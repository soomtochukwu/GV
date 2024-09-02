Governator.sol Documentation
Overview
Governator.sol is a smart contract that facilitates decentralized governance. It allows users to register, initiate elections, cast votes, and conclude elections. The contract integrates with external contracts from the lib directory, namely
- sanityChecks.sol
- storage.sol
- NFT.sol

This documentation breaks down each function in the Governator.sol contract by its arguments, returned data, and emitted events.

Here are all the functions defined in `Governator.sol`:

1. **registerPerson()**
2. **getAllPersons()**
3. **initiateElection(address _person1, address _person2, string calldata _purpose, string calldata _position, string calldata _context)**
4. **castVote(uint256 _electionID, address _candidate)**
5. **concludeElection(uint256 _electionID)**
6. **changeElectionDuration(uint256 _electionID, uint256 _newDuration)**

<hr></hr>

#### 1. **`registerPerson`**
   - **Arguments**: None
   - **Returned Data**: None
   - **Event Emitted**: 
     - `newPerson(uint256 indexed id, address indexed person)`
       - `id`: Unique ID assigned to the person.
       - `person`: Address of the registered person.
   - **Modifiers**: None
   - **Description**: 
     This function registers a new person in the system. The function checks if the person is already registered and, if not, assigns them a unique ID and stores their data.

#### 2. **`getAllPersons`**
   - **Arguments**: None
   - **Returned Data**: 
     - `address[]`: Array of addresses representing all registered persons.
   - **Event Emitted**: None
   - **Modifiers**: None
   - **Description**: 
     This function returns a list of all registered persons in the contract.

#### 3. **`initiateElection`**
   - **Arguments**: 
     - `address _person1`: Address of the first candidate.
     - `address _person2`: Address of the second candidate.
     - `string calldata _purpose`: Purpose of the election.
     - `string calldata _position`: Position being contested in the election.
     - `string calldata _context`: Context or additional details about the election.
   - **Returned Data**: None
   - **Event Emitted**: 
     - `electionStarted(uint256 indexed id, string purpose, string position, string context, address indexed moderator)`
       - `id`: Unique ID of the election.
       - `purpose`: Purpose of the election.
       - `position`: Position being contested.
       - `context`: Additional details about the election.
       - `moderator`: Address of the moderator who initiated the election.
   - **Modifiers**: 
     - `onlyModerators`: Ensures that only a moderator can call this function.
   - **Description**: 
     This function allows a moderator to start a new election with two candidates. The purpose, position, and context of the election are provided as arguments.

#### 4. **`castVote`**
   - **Arguments**: 
     - `uint256 _electionID`: The ID of the election in which the vote is being cast.
     - `address _candidate`: The address of the candidate receiving the vote.
   - **Returned Data**: None
   - **Event Emitted**: 
     - `voteCasted(address indexed voter, address indexed candidate, uint256 electionID)`
       - `voter`: Address of the voter.
       - `candidate`: Address of the candidate who received the vote.
       - `electionID`: ID of the election in which the vote was cast.
   - **Modifiers**: 
     - `registered`: Ensures that the caller is a registered person.
     - `elapsed`: Ensures that the voting occurs within the election's duration.
     - `voted`: Ensures that the caller has not already voted in this election.
   - **Description**: 
     This function allows a registered person to cast a vote in a specific election. The voter must own exactly one NFT and can only vote once in each election.

#### 5. **`concludeElection`**
   - **Arguments**: 
     - `uint256 _electionID`: The ID of the election to be concluded.
   - **Returned Data**: None
   - **Event Emitted**: 
     - `electionConcluded(uint256 indexed electionID, address indexed winner)`
       - `electionID`: ID of the concluded election.
       - `winner`: Address of the winning candidate.
     - `draw(uint256 electionID)`: Emitted if the election ends in a draw.
       - `electionID`: ID of the election that ended in a draw.
   - **Modifiers**: 
     - `onlyModerators`: Ensures that only a moderator can call this function.
     - `canConclude`: Ensures that the election can be concluded.
   - **Description**: 
     This function concludes the election and determines the winner based on vote counts. If the vote count is tied, the election is declared a draw.

#### 6. **`changeElectionDuration`**
   - **Arguments**: 
     - `uint256 _electionID`: The ID of the election for which the duration is being changed.
     - `uint256 _newDuration`: The new duration (in seconds) for the election.
   - **Returned Data**: None
   - **Event Emitted**: None
   - **Modifiers**: 
     - `onlyModerators`: Ensures that only a moderator can call this function.
   - **Description**: 
     This function allows a moderator to change the duration of an ongoing election.

---

This documentation describes the key functions of the `Governator.sol` contract, including their arguments, returned data, events emitted, and applicable modifiers.
