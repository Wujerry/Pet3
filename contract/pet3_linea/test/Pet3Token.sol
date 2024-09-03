// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {Pet3Token} from "../src/Pet3Token.sol";
import {Pet3Game} from "../src/Pet3Game.sol";

contract Pet3TokenTest is Test {
    Pet3Token public pet3Token;
    Pet3Game public pet3Game;

    function setUp() public {
        pet3Token = new Pet3Token();
        pet3Game = new Pet3Game("Pet3 Game", "PET3", "https://pet3game.com/", address(pet3Token));
    }

    function test_total() public {
        pet3Token.mint(msg.sender, 1000);
        console2.log("pet3Token.totalSupply", pet3Token.totalSupply());
        assertEq(pet3Token.totalSupply(), 10000000 * 10 ** 18 + 1000);
    }

    function test_mint() public {
        pet3Game.mintTo(msg.sender);
        console2.log("pet3Game.currentTokenId", pet3Game.currentTokenId());
        assertEq(pet3Game.currentTokenId(), 1);
    }

    function test_deposit() public {
        pet3Token.mint(msg.sender, 10000);
        pet3Token.approve(address(pet3Game), 2000);
        pet3Game.deposit(2000);
        pet3Game.withdraw(1000);
        console2.log("pet3Token.balanceOf(address(pet3Game))", pet3Token.balanceOf(address(pet3Game)));
        console2.log("pet3Token.balanceOf(msg.sender)", pet3Token.balanceOf(msg.sender));
        assertEq(pet3Token.balanceOf(address(pet3Game)), 1000);
    }

    function test_random() public {
        for (uint256 i = 0; i < 10; i++) {
            console2.log("pet3Game.getRandomOnchain()", pet3Game.getRandomOnchain(i) % 10);
        }
    }
}
