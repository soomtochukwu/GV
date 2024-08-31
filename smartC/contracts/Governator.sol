// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "./inherit/NFT.sol";
import "./storage.sol";

contract Governator is Storage,  Governator_NFT(msg.sender) {

    constructor() {
        initiateElection("National mid-term presidential election, 2027, PO vs BAT",
         0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, 
         0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2, "President", "Nigeria");
    }
    // funcions to...
    Person[] private allPersons;

    // 1. regiser Person
    function registerPerson(string memory _name) public returns (bool) {
        require(!Persons[msg.sender].exists, "CAN ONLY REGISTER ONCE");
        Person storage person = Persons[msg.sender];
        // Person._address = msg.sender;
        person.id = candidateId;
        person.name = _name;
        person.position = "";
        person.exists = true;

        allPersons.push(Persons[msg.sender]);

        emit newPerson(msg.sender);
        candidateId = candidateId + 1;
        return true;
    }

    function getallPersons() public view returns (Person[] memory) {
        return allPersons;
    }

    // 2. initiate an election
    function initiateElection(
        string memory _purpose,
        address _candidate1,
        address _candidate2,
        string memory _position,
        string memory context
    ) public {
        electionsCounter = electionsCounter + 1;
        
        Election storage newElection = Elections[electionsCounter];
        newElection.Id = electionsCounter;
        newElection.purpose = _purpose;
        newElection.candidate1 = _candidate1;
        newElection.candidate2 = _candidate2;
        newElection.position = _position;
        newElection.context = context;

        emit electionStarted(electionsCounter);
    }

    // cast vote

    function castVote(uint _electionId, address _candidate) public  {
        Election storage election = Elections[_electionId];

        address candidate1 = election.candidate1;
        address candidate2 = election.candidate2;
        
        if (candidate1 == _candidate) {
            election.votes_of_candidate1 +=1 ;
        }
        if (candidate2  == _candidate) {
            election.votes_of_candidate2 += 1;
        }

        election.totalVotes += 1;
        
        emit voteCasted(msg.sender, _candidate);
        
    }
    // 3. conclude an election
    function concludeElection(uint _electionId) public {
        Election storage election = Elections[_electionId];
        
        address candidate1 = election.candidate1;
        address candidate2 = election.candidate2;

        uint votes_of_candidate1 = election.votes_of_candidate1;
        uint votes_of_candidate2 = election.votes_of_candidate2;

        string memory context = election.context;
        string memory position = election.position;

        Position storage pos = Positions[position][context];

        if (votes_of_candidate1 > votes_of_candidate2) {
            pos.holder = candidate1;
            Persons[candidate1].position = position;
            Persons[candidate1].elevatedIn = context;

            emit electionConcluded(_electionId, candidate1);
        }
        
        if (votes_of_candidate2 > votes_of_candidate1) {
            pos.holder = candidate2;
            Persons[candidate2].position = position;
            Persons[candidate2].elevatedIn = context;

            emit electionConcluded(_electionId, candidate2);
        }

        if(votes_of_candidate1 == votes_of_candidate2){
            emit draw(_electionId, "Draw: no winner because of equal votes, voting continues");
        }


        election.concluded = true;
    }
}
