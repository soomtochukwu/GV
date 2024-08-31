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
            "ONLY REGISTERED PERSONS CAN TAKE THIS ACTION."
        );
        _;
    }

    modifier elapsed(uint electionId){
        Election storage election = Elections[electionId];
        require(!(block.timestamp >= election.startTime) + 4 days, "ELECTIONS HAS ENDED.");
        _;
    }

    modifier canConclude(uint electionId){
        Election storage election = Elections[electionId];
        require((block.timestamp >= election.startTime) + 4 days, "ELECTIONS IS STILL ONGOING.");
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


    /* ** NFT cannot be transferred ** */
    safeTransferFrom(address from, address to, uint256 tokenId) override returns (string memory) {
        return "ACTION CANNOT BE TAKEN"
    } 
safeTransferFrom(address from, address to, uint256 tokenId, bytes data) override returns (string memory) {
    return "ACTION CANNOT BE TAKEN"
}
transferFrom(address from, address to, uint256 tokenId) override returns (string memory) {
    return "ACTION CANNOT BE TAKEN"
}
approve(address to, uint256 tokenId) override returns (string memory) {
    return "ACTION CANNOT BE TAKEN"
}
setApprovalForAll(address operator, bool approved) override returns (string memory) {
    return "ACTION CANNOT BE TAKEN"
}
getApproved(uint256 tokenId) override returns (string memory) {
    return "ACTION CANNOT BE TAKEN"
}
isApprovedForAll(address owner, address operator) override returns (string memory) {
    return "ACTION CANNOT BE TAKEN"
} 
}
