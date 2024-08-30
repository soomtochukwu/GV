// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

contract Storage {
    mapping(address => bool) admins;

    struct Member {
        bool belongs;
    }
    mapping(address => Member) public Members;

    struct Organzsation {
        string name;
        string description;
        mapping(address => bool) admins;
        mapping(address => Member) members;
        bool disabled;
    }
    mapping(uint => Organzsation) public Organzsations;
    /* 
    struct ballot {
        uint Topic_ID;
        bool position;
        bool voted;
    }
    mapping(address => mapping(uint => ballot)) public ballots;
    struct vote {
        uint for_votes;
        uint against_votes;
    }
    mapping(uint => vote) public votes;
 */

    struct Topic {
        uint id;
        string title;
        address initiator;
        string details;
        address implementation_contract_address;
        string signature;
        uint start_time;
        uint voting_duration;
        uint implementation_delay;
        uint forVotes;
        uint organzsation; // organizationIds, 0 if it is a global topic, is general, belongs to no organization
        uint againstVotes;
        bool implemented;
        bool cancelled;
    }
    mapping(uint => Topic) public Topics;

    uint public topicIds = 1;
    uint public organizationIds = 1;
}
