// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

import "./storage.sol";

contract SanityChecks is Storage {
    /* ** Define modifiers ** */

    /* 
    modifier() name{
        _;
    } */

    modifier onlyModerators() {
        require(Moderators[msg.sender], "ONLY MODERATORS CAN TAKE THIS ACTION.");
        _;
    }

    modifier registered(address _operator) {
        require(
            Persons[_operator].exists,
            "NOT REGISTERED || ONLY REGISTERED PERSONS CAN TAKE THIS ACTION."
        );
        _;
    }

    modifier voted(uint electionId){
        Election storage election = Elections[electionId];
    
        require(!election.voted[msg.sender], "ONE VOTE PER PERSON");
        _;
    }

    modifier elapsed(uint electionId){
        Election storage election = Elections[electionId];
        require(!(block.timestamp >= election.startTime  + election.conclusionTime), "ELECTION HAS ENDED.");
        _;
    }

    modifier canConclude(uint electionId){
        Election storage election = Elections[electionId];
        require(!election.concluded, "ELECTION ALREADY CONCLUDED.");
        require((block.timestamp >= election.startTime  + election.conclusionTime), "ELECTION IS STILL ONGOING.");
        _;
    }

    /* ** Update modifiers ** */

    function addModerator(address _Moderator) public onlyModerators {
        require(
            Persons[_Moderator].exists,
            "ONLY REGISTERED PERSONS CAN ADDED AS MODERATORS."
        );
        Moderators[_Moderator] = true;
    }
    function removeModerator(address _Moderator) public onlyModerators {
        Moderators[_Moderator] = false;
    }


}
