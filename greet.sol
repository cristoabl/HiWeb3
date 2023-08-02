/**
 *Submitted for verification at Etherscan.io on 2023-07-07
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


contract GreetingContract {
    string public greeting = "Hello, Juan";
    string public farewell = "Bye, Juan";

    function setGreeting(string calldata _newGreeting) public {
        require(bytes(_newGreeting).length <= 13, "Greeting must be 13 characters or less.");
        greeting = _newGreeting;
    }

    function setfarewell(string calldata _newFarewell) public {
                require(bytes(_newFarewell).length <= 13, "Greeting must be 13 characters or less.");
        greeting = _newFarewell;
    }
   
}