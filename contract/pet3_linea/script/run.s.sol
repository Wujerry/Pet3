// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {Pet3Token} from "../src/Pet3Token.sol";
import {Pet3Game} from "../src/Pet3Game.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

contract Pet3Run is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
        // console.log("Pet3Token address: ");
        // Pet3Token pet3Token = Pet3Token(0x8A791620dd6260079BF849Dc5567aDC3F2FdC318);
        // console.log("Pet3Token address: ");
        // pet3Token.mint(msg.sender, 10000 * 10 ** 18);
        // pet3Token.approve(0x610178dA211FEF7D417bC0e6FeD39F05609AD788, 10000 * 10 ** 18);
        Pet3Game pet3Game = Pet3Game(0xfb75c5211CEE65D292DC2A070Dd603EE1F9ceb8d);
        // // pet3Game.deposit(10000 * 10 ** 18);

        // IERC20 pet3Token = IERC20(0xaCb54d07cA167934F57F829BeE2cC665e1A5ebEF);
        // pet3Token.approve(0xfb75c5211CEE65D292DC2A070Dd603EE1F9ceb8d, 1000 * 10 ** 18);
        // pet3Game.deposit(1000 * 10 ** 18, 0xaCb54d07cA167934F57F829BeE2cC665e1A5ebEF);
        pet3Game.claimBox(1, 0x82aB6C00514F4f7e67270dAcB344e198aEeec44f);

        // console.log("balance", pet3Token.balanceOf(0xfb75c5211CEE65D292DC2A070Dd603EE1F9ceb8d));

        vm.stopBroadcast();
    }
}
