<img src="https://github.com/soomtochukwu/Governator/blob/main/governator/public/gv%20p%20d.png" alt="pitch deck">

# Governator, the smart contract documentation
## Overview

# Governor.sol

`Governor.sol` is a blockchain-based smart contract designed to empower communities, Nations, or any entity that migth need it, with decentralized governance. This innovative solution leverages blockchain technology to ensure transparency, security, and fairness in the voting process.

## Key Features:

### Anonymous Voting:
- **Privacy Protection:** Voters' identities remain confidential, codeventing potential coercion or manipulation.
- **Fair Elections:** Eliminates biases and ensures that all votes carry equal weight.

### NFT-Based Voting Rights:
- **Tokenization:** Each registered voter is minted a unique NFT, acting as a digital passport to participate in elections.

- **Proof of Ownership:** NFTs provide verifiable proof of voting rights, codeventing fraud and double voting.


### Decentralized Governance:
- **Community-Driven:** The power to initiate and conclude elections rests with the community, ensuring democratic control.

- **Transparency:** All voting activities, including election results and moderator selections, are publicly verifiable on the blockchain.


### Moderator Selection:
- **Democratic Process:** Moderators are chosen through a transparent voting mechanism, ensuring accountability and fairness.
- **Oversight:** Moderators play a crucial role in overseeing the election process and ensuring compliance with established rules.

## Benefits of Governor.sol:

- **Increased Participation:** The ease of registration and anonymous voting encourages broader engagement from community members.
- **Enhanced Security:** Blockchain technology provides a tamper-proof and transparent record of all voting activities.
- **Reduced Costs:** Eliminates the need for costly and time-consuming traditional voting methods.
- **Improved Trust:** Decentralization and transparency foster trust among community members and stakeholders.

## FAQ
<pre>
   
1. Who can vote?
   A registered voter whom
   - possesses an NFT,
   - has not voted in a specific election
   
2. What happens when count is tied?
   - the election continues for another 2 days
   
3. How long does an election last by default, can it be changed?
   - 4 days,
   - yes 
</pre>

## Technicalities
The contract integrates with external contracts from the lib directory, namely
- _sanityChecks.sol_: restrictions, access control, e.t.c.,
- _storage.sol_: stores decentralized data,

- _NFT.sol_: allows Governator.sol to mint and track NFTs. 


_This documentation breaks down each function in the Governator.sol contract by its arguments, returned data, and emitted events._

Here are all the functions defined in `Governator.sol`:

1. **registerPerson(string memory _callSign)**
2. **getAllPersons()**
3. **initiateElection(address _person1, address _person2, string calldata _purpose, string calldata _position, string calldata _context)**
4. **castVote(uint256 _electionID, address _candidate)**
5. **concludeElection(uint256 _electionID)**
6. **changeElectionDuration(uint256 _electionID, uint256 _newDuration)**

   
#### 1. **`registerPerson`**
   - **Arguments**: 
     - `string callSign`: aka/callSign of the voter.
   - **Returned Data**: 
   - **Event Emitted**: 
     - `newPerson(uint256 indexed id)`
       - `id`: Unique ID assigned to the person.
   - **Modifiers**: None
   - **Description**: 
     This function registers a new person in the system. The function checks if the person is already registered and, if not, assigns them a unique ID and stores their data.

#### 2. **`getAllPersons`**
   - **Arguments**: None
   - **Returned Data**: 
     - `Persons[]`: Array of Persons struct/object codesenting all registered persons.
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
     - `string calldata _context`: Location or Institution where the election is goin on.
   - **Returned Data**: None
   - **Event Emitted**: 
     - `electionStarted(uint256 indexed id)`
       - `id`: Unique ID of the election which can be used to query the smart contract for the given election details.
   - **Modifiers**: 
     - `onlyModerators`: Ensures that only a moderator can call this function.
   - **Description**: 
     This function allows a moderator to start a new election with two candidates. The purpose, position, and context of the election are provided as arguments. **ELECTION LASTS FOR 4 DAYS BY DEFAULT, THISCAN BE CHANGED BY CALLING _changeElectionDuration(uint electionId, uint newDuration)_ FUNCTION**.

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
     This function concludes the election and determines the winner based on vote counts. If the vote count is tied, the election is declared a draw and continues for two days.

#### 6. **`changeElectionDuration`**
   - **Arguments**: 
     - `uint256 _electionID`: The ID of the election for which the duration is being changed.
     - `uint256 _newDuration`: The new duration (in seconds) for the election.
   - **Returned Data**: None
   - **Event Emitted**: None
   - **Modifiers**: 
     - `onlyModerators`: Ensures that only a moderator can call this function.
   - **Description**: 
     This function allows a moderator to change the duration of an ongoing election if required.

## Thanks for reading.
<img src="https://github.com/soomtochukwu/Governator/blob/main/governator/public/Hidden-mining-bro2.svg" alt="pitch deck">
