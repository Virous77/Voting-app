// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Voter {
        address voterAddress;
        bool isVoted;
        uint256 time;
    }

    struct VoterData {
        address[] myArray;
    }

    mapping(address => Voter) Voters;
    mapping(uint256 => VoterData) voteTypes;

    mapping(address => mapping(address => mapping(address => Voter))) GroupVoting;
    mapping(address => VoterData) memberVoters;

    function getVoterAddress() public view returns (address) {
        return Voters[msg.sender].voterAddress;
    }

    function getIsVoted() public view returns (bool) {
        return Voters[msg.sender].isVoted;
    }

    function getTime() public view returns (uint256) {
        return Voters[msg.sender].time;
    }

    function vote(uint256 number) external {
        require(Voters[msg.sender].isVoted == false, "You have already voted");

        Voters[msg.sender] = Voter({
            voterAddress: msg.sender,
            isVoted: true,
            time: block.timestamp
        });

        createVotesType(number);
    }

     function createVotesType(uint256 number) internal {
        voteTypes[number].myArray.push(msg.sender);
    }

    function groupIndividualVote(address admin, address member) external {
        require(
            GroupVoting[admin][member][msg.sender].isVoted == false,
            "You have already voted"
        );

        GroupVoting[admin][member][msg.sender] = Voter({
            voterAddress: msg.sender,
            isVoted: true,
            time: block.timestamp
        });

        createMemberVote(member);
    }

    function createMemberVote(address member) internal {
        memberVoters[member].myArray.push(msg.sender);
    }

    function getMemberVote(address member)
        public
        view
        returns (address[] memory)
    {
        return memberVoters[member].myArray;
    }

     function getVoteTypes(uint256 number)
        public
        view
        returns (address[] memory)
    {
        return voteTypes[number].myArray;
    }
}
