// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "./lib/sanityChecks.sol";
import "./lib/storage.sol";
import "./lib/NFT.sol";

contract Governator is Storage, Governator_NFT(msg.sender),SanityChecks {
    constructor() {
        registerPerson("MAZI");
        Moderators[msg.sender] = true;

/* 
        initiateElection(
            "National mid-term presidential election, 2027, PO vs BAT",
            0x5B38Da6a701c568545dCfcB03FcB875f56beddC4,
            0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,
            "President",
            "Nigeria"
        );
        safeMint("MZ");
        castVote(1,0x5B38Da6a701c568545dCfcB03FcB875f56beddC4); */
    }

    // functions to...
    Person[] private allPersons;

    // 1. register Person
    function registerPerson(string memory _callSign) public returns (bool) {
        require(!Persons[msg.sender].exists, "CAN ONLY REGISTER ONCE");
        Person storage person = Persons[msg.sender];
        // Person._address = msg.sender;
        person.id = candidateId;
        person.callSign = _callSign;
        person.exists = true;

        allPersons.push(Persons[msg.sender]);

        emit newPerson(msg.sender);
        candidateId = candidateId + 1;
        return true;
    }

    function getAllPersons() public view returns (Person[] memory) {
        return allPersons;
    }

    // 2. initiate an election
    function initiateElection(
        string memory _purpose,
        address _candidate1,
        address _candidate2,
        string memory _position,
        string memory context
    ) public registered(msg.sender) onlyModerators {
        electionsCounter = electionsCounter + 1;

        Election storage newElection = Elections[electionsCounter];
        newElection.Id = electionsCounter;
        newElection.purpose = _purpose;
        newElection.candidate1 = _candidate1;
        newElection.candidate2 = _candidate2;
        newElection.position = _position;
        newElection.context = context;
        newElection.startTime = block.timestamp;
        newElection.conclusionTime = block.timestamp + 86400;

        emit electionStarted(electionsCounter);
    }

    // cast vote

    function castVote(
        uint _electionId,
        address _candidate
    )
        public
        registered(msg.sender)
        elapsed(_electionId)
        voted(_electionId)
    {
        require(Persons[_candidate].exists, "CANDIDATE DOES NOT EXIST");
        require(balanceOf(msg.sender) == 1, "CANNOT VOTE: no NFT | MORE THAN ONE NFT");
        
        Election storage election = Elections[_electionId];

        address candidate1 = election.candidate1;
        address candidate2 = election.candidate2;

        if (candidate1 == _candidate) {
            election.votes_of_candidate1 += 1;
        }
        if (candidate2 == _candidate) {
            election.votes_of_candidate2 += 1;
        }

        election.voted[msg.sender] = true;
        election.totalVotes += 1;

        emit voteCasted(msg.sender, _candidate);
    }

    // 3. conclude an election
    function concludeElection(
        uint _electionId
    ) public onlyModerators canConclude(_electionId) {
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

        if (votes_of_candidate1 == votes_of_candidate2) {
            emit draw(
                _electionId,
                "Draw: no winner because of equal votes, voting continues"
            );
        }

        election.concluded = true;
    }

    function changeElectionDuration(uint _electionId, uint _newDuration /* _newDuration(min) * 60 */ ) public onlyModerators {
        Election storage election = Elections[_electionId];
        election.conclusionTime = _newDuration * 60;
    }
}
