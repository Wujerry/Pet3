// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "../lib/solmate/src/tokens/ERC721.sol";
import "../lib/openzeppelin-contracts/contracts/utils/Strings.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import "./Pet3Token.sol";
import "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

error MintPriceNotPaid();
error MaxSupply();
error NonExistentTokenURI();

contract Pet3Game is ERC721, Ownable {
    using Strings for uint256;

    string public baseURI;
    uint256 public currentTokenId;
    uint256 public constant MAX_CAPACITY = 100_000;
    uint256 public constant MINT_PRICE = 0 ether;
    address[] public rewardTokens;
    mapping(address => bool) public rewardTokenMap;

    event Minted(address indexed to, uint256 indexed tokenId);
    event BoxClaimed(address indexed to, uint256 amount, address tokenAddress);

    constructor(string memory _name, string memory _symbol, string memory _baseURI, address _pet3Coin)
        ERC721(_name, _symbol)
        Ownable(msg.sender)
    {
        baseURI = _baseURI;
        rewardTokens.push(_pet3Coin);
        rewardTokenMap[_pet3Coin] = true;
    }

    function claimBox(uint256 amount, address recipient) public payable onlyOwner returns (uint256) {
        require(amount > 0, "Amount must be greater than 0");
        uint256 tokenIndex = getRandomOnchain(1) % rewardTokens.length;
        address rewardToken = rewardTokens[tokenIndex];
        uint256 balance = IERC20(rewardToken).balanceOf(address(this));
        uint256 totalReward = 0;
        for (uint256 i = 0; i < amount; i++) {
            totalReward += getRandomOnchain(i);
        }
        totalReward = totalReward * 10 ** 18;
        require(balance >= totalReward, "Not enough balance to claim");
        IERC20(rewardToken).transfer(recipient, totalReward);
        emit BoxClaimed(recipient, totalReward, rewardToken);
        return totalReward;
    }

    // TODO: change to VRF
    function getRandomOnchain(uint256 counter) public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, counter))) % 10;
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
        emit Minted(recipient, newItemId);
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

    function deposit(uint256 amount, address token) public onlyOwner returns (bool) {
        bool isRewardToken = rewardTokenMap[token];
        if (!isRewardToken) {
            rewardTokenMap[token] = true;
            rewardTokens.push(token);
        }
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        return true;
    }

    function withdraw(uint256 amount, address token) public onlyOwner returns (bool) {
        if (!rewardTokenMap[token]) {
            revert("Token not supported");
        }
        IERC20(token).transfer(msg.sender, amount);
        return true;
    }
}
