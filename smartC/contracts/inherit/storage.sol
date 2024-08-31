// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

contract Storage {
    event newPerson(address indexed newPerson);
    event electionStarted(uint electionsCounter);
    event voteCasted(address indexed voter, address indexed candidate);
    event electionConcluded(uint electionId, address indexed winner);
    event draw(uint, string);

    struct Person {
        // address _address;
        uint id;
        string name;
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
    mapping (string => mapping (string => Position)) public Positions; // mapping (POSITION/TITLE => mapping (CONTEXT/COMMUNITY/STATE => Position))

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
    }

    mapping(uint => Election) public Elections;


    uint public candidateId = 0;
    uint public electionsCounter = 0;}
