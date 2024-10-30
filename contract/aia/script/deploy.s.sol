// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {Pet3Token} from "../src/Pet3Token.sol";
import {Pet3Game} from "../src/Pet3Game.sol";

contract Pet3Deploy is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Pet3Token pet3Token = new Pet3Token();
        Pet3Game pet3Game =
            new Pet3Game("Pet3 Game", "PET3", "https://pet3-fawn.vercel.app/pet3.png", address(pet3Token));

        pet3Token.mint(msg.sender, 10000 * 10 ** 18);
        pet3Token.approve(address(pet3Game), 10000 * 10 ** 18);
        pet3Game.deposit(10000 * 10 ** 18, address(pet3Token));
        vm.stopBroadcast();
    }
}
