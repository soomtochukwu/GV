// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract ELECTION_SYSTEM {
    event newVoter(address indexed newVoter);
    event electionStarted(uint electionsCounter);
    event nomination(address indexed nominator, address indexed nominee);

    struct Voter {
        // address _address;
        uint id;
        string name;
        string position;
        bool exists;
        bool qualified;
    }

    /* 
    struct Candidate {
        uint id;
        address _address;
        string name;
        string position;
        bool qualified;
    }

    mapping(uint => Candidate) Candidates; */

    mapping(address => Voter) public Voters;
    Voter[] public allVoters;

    struct Positions {
        mapping(string => Voter) president; // mapping (country => Voter) president
        mapping(string => Voter) governor; // mapping (state => Voter) president
    }

    struct Election {
        uint electionId;
        string purpose; // eg., purpose = "National mid-term presidential election, 2027, PO vs BAT"
        address[] candidates; // [can1, can2]
        string[2] position; // strict length of 2. eg., position = ["president", "Nigeria"], position = ["president", "SA"].
        uint totalVotes;
        bool exists;
    }

    mapping(uint => Election) public Elections;

    // funcions to...

    // nominate a candidate for an election
    function nominateCandidate(
        address _candidate,
        uint electionID
    ) public returns (bool) {
        Election storage election = Elections[electionID];
        for (uint i = 0; i < election.candidates.length; i++) {
            require(
                !(election.candidates[i] == _candidate),
                "CANDIDATE ALREADY NOMINATED"
            );
        }
        require(election.exists, "INVALID ELECTION ID");
        election.candidates.push(_candidate);

        emit nomination(msg.sender, _candidate);
        return true;
    }

    // 1. regiser voter
    function registerVoter(string memory _name) public returns (bool) {
        require(!Voters[msg.sender].qualified, "CAN ONLY REGISTER ONCE");
        Voter storage voter = Voters[msg.sender];
        // voter._address = msg.sender;
        voter.id = candidateId;
        voter.name = _name;
        voter.position = "";
        voter.exists = true;

        allVoters.push(Voters[msg.sender]);

        emit newVoter(msg.sender);
        candidateId = candidateId + 1;
        return true;
    }

    function getAllVoters() public view returns (Voter[] memory) {
        return allVoters;
    }

    // 2. initiate an election
    function initiateElection(
        string memory _purpose,
        address[] memory _candidates, // array of voters/candidates id
        string[2] memory _position
    ) public returns (bool) {
        require(!Elections[electionsCounter].exists, "Election already exists");
        
        Election storage newElection = Elections[electionsCounter];
        newElection.electionId = electionsCounter;
        newElection.purpose = _purpose;
        newElection.candidates = _candidates;
        newElection.position = _position;
        newElection.totalVotes = 0;
        newElection.exists = true;
        
        emit electionStarted(electionsCounter);
        electionsCounter = electionsCounter + 1;
        return true;
    }

    // cast vote

    // 3. conclude an election
    // 4. add positions an election

    uint public candidateId = 0;
    uint public electionsCounter = 0;
}
