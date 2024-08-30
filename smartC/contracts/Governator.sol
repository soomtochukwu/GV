// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract ELECTION_SYSTEM {

    constructor() {
        initiateElection("National mid-term presidential election, 2027, PO vs BAT",
         0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, 
         0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2, "President", "Nigeria");
    }
    event newPerson(address indexed newPerson);
    event electionStarted(uint electionsCounter);
    event nomination(address indexed nominator, address indexed nominee);

    struct Person {
        // address _address;
        uint id;
        string name;
        string position;
        bool exists;
        bool qualified;
    }

    mapping(address => Person) public Persons;
    Person[] private allPersons;

    struct Position {
        string title;       
        address holder;
    }
    mapping (string => Position) public Positions; // string = a alocation eg., Nigeria, USA
struct Vote{
    uint votes;
}
mapping (uint => mapping (address => Vote)) public Votes; // electioId against candidates addresses
    struct Election {
        uint Id;
        string purpose; // eg., purpose = "National mid-term presidential election, 2027, PO vs BAT"
        address candidate1;
        address candidate2;
        uint vote_candidate1;
        uint vote_candidate2;
        string position; // position = title eg., President, Dev. lead
        string GEO; // string = a alocation eg., Nigeria, USA
        uint totalVotes;
        bool exists;
    }

    mapping(uint => Election) public Elections;

    // funcions to...

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

    function getAllPersons() public view returns (Person[] memory) {
        return allPersons;
    }

    // 2. initiate an election
    function initiateElection(
        string memory _purpose,
        address _candidate1,
        address _candidate2,
        string memory _position,
        string memory _geo
    ) public {
        require(!Elections[electionsCounter].exists, "Election already exists");
        electionsCounter = electionsCounter + 1;
        
        Election storage newElection = Elections[electionsCounter];
        newElection.Id = electionsCounter;
        newElection.purpose = _purpose;
        newElection.candidate1 = _candidate1;
        newElection.candidate2 = _candidate2;
        newElection.position = _position;
        newElection.GEO = _geo;

        newElection.totalVotes = 0;
        newElection.exists = true;
        
        emit electionStarted(electionsCounter);
    }

    // cast vote

    function castVote(uint _electionId, address _candidate) public  {
        Election storage election = Elections[_electionId];
        Vote storage vote = Votes[_electionId][_candidate];

        vote.votes += 1 ;
        election.totalVotes += 1;
        
    }
    // 3. conclude an election
    function concludeElection(uint _electionId) public  {
        Election storage election = Elections[_electionId];
        address candidate1 = election.candidate1;
        address candidate2 = election.candidate2;

        uint vote_candidate1 = Votes[_electionId][candidate1].votes;
        uint vote_candidate2 = Votes[_electionId][candidate2].votes;

        string memory GEO = election.GEO;
        string memory position = election.position;

        Position storage position_ = Positions[GEO];

        if (vote_candidate1 > vote_candidate2) {
            position_.holder = candidate1;
            position_.title = position;

        }else {
            position_.holder = candidate2;
            position_.title = position;
        }
        
        election.exists = false;
    }

    uint public candidateId = 0;
    uint public electionsCounter = 0;
}
