// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

contract Storage {
    event newPerson(address indexed newPerson);
    event electionStarted(uint electionsCounter);
    event voteCasted(address indexed voter, address indexed candidate);
    event electionConcluded(uint electionId, address indexed winner);
    event draw(uint, string);

    mapping(address => bool) public Moderators;

    struct Person {
        // address _address;
        uint id;
        string callSign; // eg., PO, BAT, GEJ
        string position;
        string elevatedIn;
        bool exists;
        bool qualified;
    }

    mapping(address => Person) public Persons;
    Person[] private allPersons;

    struct Position {
        // string title;
        address holder;
    }
    mapping(string => mapping(string => Position)) public Positions; // mapping (POSITION/TITLE => mapping (CONTEXT/COMMUNITY/STATE => Position))

    struct Election {
        uint Id;
        string purpose; // eg., purpose = "National mid-term presidential election, 2027, PO vs BAT"
        address candidate1;
        address candidate2;
        uint votes_of_candidate1;
        uint votes_of_candidate2;
        string position; // position = title eg., President, Dev. lead
        string context; // string = a alocation/state/community eg., Nigeria, USA
        uint totalVotes;
        bool concluded;
        uint startTime;
        uint conclusionTime; // in seconds eg., 60 sec
        mapping (address => bool) voted;
    }

    mapping(uint => Election) public Elections;

    uint public candidateId = 0;
    uint public electionsCounter = 0;
}

/* 

    function safeMint(string memory uri) public {
        require(balanceOf(msg.sender) == 0, "ONE NFT PER VOTER");
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
    }

 */
