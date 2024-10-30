```
forge script script/deploy.s.sol:Pet3Deploy --fork-url http://localhost:8545 --broadcast
```

```
forge script script/deploy.s.sol:Pet3Deploy --fork-url https://aia-dataseed1-testnet.aiachain.org --broadcast --legacy
```

```
forge script script/deploy.s.sol:Pet3Deploy --rpc-url https://rpc.linea.build --broadcast --etherscan-api-key  --verify --verifier-url https://api.lineascan.build/api
```

```
forge verify-contract --verifier-url https://testnet.aiascan.com/api/v2 0x8f9f4C8FB12b68866c6e5cAe7113942CfA59a8ec src/Pet3Game.sol:Pet3Game --watch --show-standard-json-input
```

```
forge script script/run.s.sol:Pet3Run --fork-url http://localhost:8545 --broadcast
forge script script/run.s.sol:Pet3Run --rpc-url https://rpc.linea.build --broadcast
```

```
cast call 0x8f9f4C8FB12b68866c6e5cAe7113942CfA59a8ec "deposit(uint256, address)"
```