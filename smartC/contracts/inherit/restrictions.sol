// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

import "./storage.sol";

contract Restrictions is Storage {

    function quorum(uint forVotes, uint totalVotes, uint quorum_) internal returns(bool) {
        uint comparison = (quorum_ * totalVotes) / 100; //60% of the total votes
        require(
            forVotes >= comparison,
            "QORUM FAILURE: TOPIC NEEDS 60% SUPPORT TO BE EXECUTED."
        );
        return true;
    }

    modifier onlyAdmins() {
        require(admins[msg.sender], "ONLY ADMINS CAN TAKE THIS ACTION");
        _;
    }

    modifier onlyOrgAdmins(uint organizationIds) {
        require(
            Organzsations[organizationIds].admins[msg.sender],
            "ONLY ADMINS CAN TAKE THIS ACTION"
        );
        _;
    }

    modifier isMember() {
        require(Members[msg.sender].belongs, "NOT A MEMBER");
        _;
    }
    modifier alreadyAdded() {
        require(!Members[msg.sender].belongs, "...ALREADY A MEMBER");
        _;
    }
}
