```
forge script script/deploy.s.sol:Pet3Deploy --fork-url http://localhost:8545 --broadcast
```

```
forge script script/deploy.s.sol:Pet3Deploy --fork-url https://rpc.sepolia.linea.build --broadcast --etherscan-api-key  --verify --verifier-url https://api-sepolia.lineascan.build/api
```

```
forge script script/deploy.s.sol:Pet3Deploy --rpc-url https://rpc.linea.build --broadcast --etherscan-api-key  --verify --verifier-url https://api.lineascan.build/api
```

```
forge verify-contract --verifier-url https://api-sepolia.lineascan.build/api src/Pet3Game.sol:Pet3Game --watch
```

```
forge script script/run.s.sol:Pet3Run --fork-url http://localhost:8545 --broadcast
forge script script/run.s.sol:Pet3Run --rpc-url https://rpc.linea.build --broadcast
```

```
cast call 0xfb75c5211CEE65D292DC2A070Dd603EE1F9ceb8d "deposit(uint256, address)"
```