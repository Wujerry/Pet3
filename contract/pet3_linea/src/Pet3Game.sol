// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "../lib/solmate/src/tokens/ERC721.sol";
import "../lib/openzeppelin-contracts/contracts/utils/Strings.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import "./Pet3Token.sol";

error MintPriceNotPaid();
error MaxSupply();
error NonExistentTokenURI();

contract Pet3Game is ERC721, Ownable {
    using Strings for uint256;

    string public baseURI;
    uint256 public currentTokenId;
    uint256 public constant MAX_CAPACITY = 100_000;
    uint256 public constant MINT_PRICE = 0 ether;
    address public immutable PET3_COIN;

    constructor(string memory _name, string memory _symbol, string memory _baseURI, address _pet3Coin)
        ERC721(_name, _symbol)
        Ownable(msg.sender)
    {
        baseURI = _baseURI;
        PET3_COIN = _pet3Coin;
    }

    function claimBox(uint256 amount, address recipient) public payable onlyOwner returns (bool) {
        require(amount > 0, "Amount must be greater than 0");
        uint256 balance = Pet3Token(PET3_COIN).balanceOf(address(this));
        uint256 totalReward = 0;
        for (uint256 i = 0; i < amount; i++) {
            totalReward += getRandomOnchain(i);
        }
        require(balance >= totalReward, "Not enough balance to claim");
        Pet3Token(PET3_COIN).transfer(recipient, totalReward);
        return true;
    }

    // TODO: change to VRF
    function getRandomOnchain(uint256 counter) public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, counter)));
    }

    function mintTo(address recipient) public payable returns (uint256) {
        if (msg.value != MINT_PRICE) {
            revert MintPriceNotPaid();
        }
        uint256 newItemId = ++currentTokenId;
        if (newItemId > MAX_CAPACITY) {
            revert MaxSupply();
        }
        _safeMint(recipient, newItemId);
        return newItemId;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        if (ownerOf(tokenId) == address(0)) {
            revert NonExistentTokenURI();
        }

        if (bytes(baseURI).length > 0) {
            return string(abi.encodePacked(baseURI, tokenId.toString()));
        } else {
            return "";
        }
    }

    function deposit(uint256 amount) public onlyOwner returns (bool) {
        Pet3Token(PET3_COIN).transferFrom(msg.sender, address(this), amount);
        return true;
    }

    function withdraw(uint256 amount) public onlyOwner returns (bool) {
        Pet3Token(PET3_COIN).transfer(msg.sender, amount);
        return true;
    }
}
