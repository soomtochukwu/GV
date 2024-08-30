// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.8.0 <0.9.0;

import "./storage.sol";
import "./restrictions.sol";

contract Governator is Storage, Restrictions {
    // events to emmit when
    // f0,
    event TopicCreated(uint topicIds);
    // f1,
    event newMemberAdded(address indexed member);

    // f2
    event OrganzsationCreated(uint organizationIds);

    // f3,
    event memberAddedToOrg(address indexed member);
    // f3.1,
    event orgMemberRemoved(address indexed member);
    // f3.2,
    // f3.3,
    // f3.4,
    // f4,
    // f5,
    // f6,
    // f7
    // f8
    event memberBanned(address indexed member);

    // ...is called

    /* *************** */

    //  functions to
    // 0. create topic
    function createTopic(
        string memory title_,
        string memory details_,
        address implementation_contract_address_,
        string memory signature_,
        uint start_time_,
        uint voting_duration_,
        uint implementation_delay_,
        uint organzsation_
    ) public isMember returns (bool) {
        Topic storage topic = Topics[topicIds];
        topic.id = topicIds;
        topic.title = title_;
        topic.details = details_;
        topic
            .implementation_contract_address = implementation_contract_address_;
        topic.signature = signature_;
        topic.start_time = start_time_;
        topic.voting_duration = voting_duration_;
        topic.implementation_delay = implementation_delay_;
        topic.organzsation = organzsation_;
        topic.implemented = false;
        topic.cancelled = false;

        emit TopicCreated(topicIds);
        topicIds = topicIds + 1;
        return true;
    }

    // 1. add/register global members
    function addMember() public alreadyAdded returns (bool) {
        Members[msg.sender] = Member({belongs: true});

        emit newMemberAdded(msg.sender);
        return true;
    }

    // 8. ban global member
    function banMember(address offender_) public onlyAdmins returns (bool) {
        Members[offender_].belongs = false;

        emit memberBanned(offender_);
        return true;
    }

    // 2. create organization
    function createOrganization(
        string memory name_,
        string memory description_
    ) public isMember returns (bool) {
        Organzsation storage org = Organzsations[organizationIds];
        org.name = name_;
        org.description = description_;
        org.admins[msg.sender] = true;
        org.disabled = false;

        emit OrganzsationCreated(organizationIds);
        organizationIds = organizationIds + 1;
        return true;
    }

    // 3. add members to an organization
    function addMemberToOrg(
        uint id,
        address member_
    ) public onlyOrgAdmins(id) returns (bool) {
        Organzsation storage org = Organzsations[id];
        org.members[member_].belongs = true;

        emit memberAddedToOrg(member_);
        return true;
    }

    // 3.1 remove member from org
    function removeOrgMember(
        uint orgId,
        address offender
    ) public onlyOrgAdmins(orgId) returns (bool) {
        Organzsation storage org = Organzsations[orgId];
        org.members[offender].belongs = false;

        emit orgMemberRemoved(offender);
        return true;
    }
    // 3.2 add admin(s) by admin(s) to org
    // 3.3 remove admin(s) by admin(s) from org
    // 3.4 add more admin(s) by admin(s)
    // 4. cast vote
    // 5. implement topic
    // 6. cancel topic
    // 7. disable organization
}
