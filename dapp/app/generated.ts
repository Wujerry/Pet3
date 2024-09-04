import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3CounterAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'setNumber',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3CounterTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3CounterTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pet3Token',
    outputs: [
      { name: '', internalType: 'contract Pet3Token', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_total',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3Erc20Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3Erc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3ERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3Erc721TokenReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3IMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3MathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3OwnableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3Pet3Game
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3Pet3GameAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_baseURI', internalType: 'string', type: 'string' },
      { name: '_pet3Coin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_CAPACITY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINT_PRICE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'claimBox',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentTokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    name: 'deposit',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'counter', internalType: 'uint256', type: 'uint256' }],
    name: 'getRandomOnchain',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'mintTo',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'rewardTokenMap',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'rewardTokens',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'BoxClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'MaxSupply' },
  { type: 'error', inputs: [], name: 'MintPriceNotPaid' },
  { type: 'error', inputs: [], name: 'NonExistentTokenURI' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3Pet3Token
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3Pet3TokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3Pet3TokenTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3Pet3TokenTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pet3Game',
    outputs: [{ name: '', internalType: 'contract Pet3Game', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pet3Token',
    outputs: [
      { name: '', internalType: 'contract Pet3Token', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_claimBox',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_deposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_random',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_total',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pet3Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pet3StringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterAbi}__
 */
export const useReadPet3Counter = /*#__PURE__*/ createUseReadContract({
  abi: pet3CounterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterAbi}__ and `functionName` set to `"number"`
 */
export const useReadPet3CounterNumber = /*#__PURE__*/ createUseReadContract({
  abi: pet3CounterAbi,
  functionName: 'number',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3CounterAbi}__
 */
export const useWritePet3Counter = /*#__PURE__*/ createUseWriteContract({
  abi: pet3CounterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3CounterAbi}__ and `functionName` set to `"increment"`
 */
export const useWritePet3CounterIncrement =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3CounterAbi,
    functionName: 'increment',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3CounterAbi}__ and `functionName` set to `"setNumber"`
 */
export const useWritePet3CounterSetNumber =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3CounterAbi,
    functionName: 'setNumber',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3CounterAbi}__
 */
export const useSimulatePet3Counter = /*#__PURE__*/ createUseSimulateContract({
  abi: pet3CounterAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3CounterAbi}__ and `functionName` set to `"increment"`
 */
export const useSimulatePet3CounterIncrement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3CounterAbi,
    functionName: 'increment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3CounterAbi}__ and `functionName` set to `"setNumber"`
 */
export const useSimulatePet3CounterSetNumber =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3CounterAbi,
    functionName: 'setNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__
 */
export const useReadPet3CounterTest = /*#__PURE__*/ createUseReadContract({
  abi: pet3CounterTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadPet3CounterTestIsTest = /*#__PURE__*/ createUseReadContract(
  { abi: pet3CounterTestAbi, functionName: 'IS_TEST' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadPet3CounterTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadPet3CounterTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadPet3CounterTestExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadPet3CounterTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"failed"`
 */
export const useReadPet3CounterTestFailed = /*#__PURE__*/ createUseReadContract(
  { abi: pet3CounterTestAbi, functionName: 'failed' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"pet3Token"`
 */
export const useReadPet3CounterTestPet3Token =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'pet3Token',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadPet3CounterTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadPet3CounterTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadPet3CounterTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadPet3CounterTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadPet3CounterTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadPet3CounterTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3CounterTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3CounterTestAbi}__
 */
export const useWritePet3CounterTest = /*#__PURE__*/ createUseWriteContract({
  abi: pet3CounterTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWritePet3CounterTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3CounterTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"test_total"`
 */
export const useWritePet3CounterTestTestTotal =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3CounterTestAbi,
    functionName: 'test_total',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3CounterTestAbi}__
 */
export const useSimulatePet3CounterTest =
  /*#__PURE__*/ createUseSimulateContract({ abi: pet3CounterTestAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulatePet3CounterTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3CounterTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `functionName` set to `"test_total"`
 */
export const useSimulatePet3CounterTestTestTotal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3CounterTestAbi,
    functionName: 'test_total',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__
 */
export const useWatchPet3CounterTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: pet3CounterTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchPet3CounterTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchPet3CounterTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchPet3CounterTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchPet3CounterTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchPet3CounterTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchPet3CounterTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchPet3CounterTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchPet3CounterTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchPet3CounterTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchPet3CounterTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchPet3CounterTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchPet3CounterTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchPet3CounterTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchPet3CounterTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchPet3CounterTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchPet3CounterTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchPet3CounterTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3CounterTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchPet3CounterTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3CounterTestAbi,
    eventName: 'logs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__
 */
export const useReadPet3Erc20 = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadPet3Erc20DomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Erc20Abi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadPet3Erc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPet3Erc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadPet3Erc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadPet3Erc20Name = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"nonces"`
 */
export const useReadPet3Erc20Nonces = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadPet3Erc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadPet3Erc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc20Abi}__
 */
export const useWritePet3Erc20 = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWritePet3Erc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"permit"`
 */
export const useWritePet3Erc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Erc20Abi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWritePet3Erc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePet3Erc20TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc20Abi}__
 */
export const useSimulatePet3Erc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: pet3Erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePet3Erc20Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc20Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"permit"`
 */
export const useSimulatePet3Erc20Permit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc20Abi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulatePet3Erc20Transfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc20Abi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePet3Erc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Erc20Abi}__
 */
export const useWatchPet3Erc20Event = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: pet3Erc20Abi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPet3Erc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPet3Erc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__
 */
export const useReadPet3Erc721 = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPet3Erc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadPet3Erc721GetApproved = /*#__PURE__*/ createUseReadContract(
  { abi: pet3Erc721Abi, functionName: 'getApproved' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadPet3Erc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadPet3Erc721Name = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadPet3Erc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPet3Erc721SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Erc721Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadPet3Erc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadPet3Erc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: pet3Erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc721Abi}__
 */
export const useWritePet3Erc721 = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWritePet3Erc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWritePet3Erc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWritePet3Erc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePet3Erc721TransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc721Abi}__
 */
export const useSimulatePet3Erc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: pet3Erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePet3Erc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulatePet3Erc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulatePet3Erc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePet3Erc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Erc721Abi}__
 */
export const useWatchPet3Erc721Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: pet3Erc721Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPet3Erc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchPet3Erc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPet3Erc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc721TokenReceiverAbi}__
 */
export const useWritePet3Erc721TokenReceiver =
  /*#__PURE__*/ createUseWriteContract({ abi: pet3Erc721TokenReceiverAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Erc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWritePet3Erc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Erc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc721TokenReceiverAbi}__
 */
export const useSimulatePet3Erc721TokenReceiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: pet3Erc721TokenReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Erc721TokenReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulatePet3Erc721TokenReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Erc721TokenReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__
 */
export const useReadPet3IMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: pet3IMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadPet3IMulticall3GetBasefee =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getBasefee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadPet3IMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadPet3IMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadPet3IMulticall3GetChainId =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getChainId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadPet3IMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadPet3IMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadPet3IMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadPet3IMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadPet3IMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadPet3IMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3IMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__
 */
export const useWritePet3IMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: pet3IMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWritePet3IMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3IMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWritePet3IMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3IMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWritePet3IMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3IMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWritePet3IMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3IMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWritePet3IMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3IMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWritePet3IMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3IMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__
 */
export const useSimulatePet3IMulticall3 =
  /*#__PURE__*/ createUseSimulateContract({ abi: pet3IMulticall3Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulatePet3IMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3IMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulatePet3IMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3IMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulatePet3IMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3IMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulatePet3IMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3IMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulatePet3IMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3IMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3IMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulatePet3IMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3IMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3OwnableAbi}__
 */
export const useReadPet3Ownable = /*#__PURE__*/ createUseReadContract({
  abi: pet3OwnableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3OwnableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPet3OwnableOwner = /*#__PURE__*/ createUseReadContract({
  abi: pet3OwnableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3OwnableAbi}__
 */
export const useWritePet3Ownable = /*#__PURE__*/ createUseWriteContract({
  abi: pet3OwnableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3OwnableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePet3OwnableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3OwnableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3OwnableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePet3OwnableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3OwnableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3OwnableAbi}__
 */
export const useSimulatePet3Ownable = /*#__PURE__*/ createUseSimulateContract({
  abi: pet3OwnableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3OwnableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePet3OwnableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3OwnableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3OwnableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePet3OwnableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3OwnableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3OwnableAbi}__
 */
export const useWatchPet3OwnableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: pet3OwnableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3OwnableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPet3OwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3OwnableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__
 */
export const useReadPet3Pet3Game = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3GameAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"MAX_CAPACITY"`
 */
export const useReadPet3Pet3GameMaxCapacity =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'MAX_CAPACITY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"MINT_PRICE"`
 */
export const useReadPet3Pet3GameMintPrice = /*#__PURE__*/ createUseReadContract(
  { abi: pet3Pet3GameAbi, functionName: 'MINT_PRICE' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPet3Pet3GameBalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: pet3Pet3GameAbi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"baseURI"`
 */
export const useReadPet3Pet3GameBaseUri = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3GameAbi,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"currentTokenId"`
 */
export const useReadPet3Pet3GameCurrentTokenId =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'currentTokenId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadPet3Pet3GameGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"getRandomOnchain"`
 */
export const useReadPet3Pet3GameGetRandomOnchain =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'getRandomOnchain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadPet3Pet3GameIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"name"`
 */
export const useReadPet3Pet3GameName = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3GameAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPet3Pet3GameOwner = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3GameAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadPet3Pet3GameOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3GameAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"rewardTokenMap"`
 */
export const useReadPet3Pet3GameRewardTokenMap =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'rewardTokenMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"rewardTokens"`
 */
export const useReadPet3Pet3GameRewardTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'rewardTokens',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPet3Pet3GameSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3GameAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPet3Pet3GameSymbol = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3GameAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadPet3Pet3GameTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3GameAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__
 */
export const useWritePet3Pet3Game = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Pet3GameAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePet3Pet3GameApprove = /*#__PURE__*/ createUseWriteContract(
  { abi: pet3Pet3GameAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"claimBox"`
 */
export const useWritePet3Pet3GameClaimBox =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3GameAbi,
    functionName: 'claimBox',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"deposit"`
 */
export const useWritePet3Pet3GameDeposit = /*#__PURE__*/ createUseWriteContract(
  { abi: pet3Pet3GameAbi, functionName: 'deposit' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"mintTo"`
 */
export const useWritePet3Pet3GameMintTo = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Pet3GameAbi,
  functionName: 'mintTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePet3Pet3GameRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3GameAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWritePet3Pet3GameSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3GameAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWritePet3Pet3GameSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3GameAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePet3Pet3GameTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3GameAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePet3Pet3GameTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3GameAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWritePet3Pet3GameWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3GameAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__
 */
export const useSimulatePet3Pet3Game = /*#__PURE__*/ createUseSimulateContract({
  abi: pet3Pet3GameAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePet3Pet3GameApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"claimBox"`
 */
export const useSimulatePet3Pet3GameClaimBox =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'claimBox',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulatePet3Pet3GameDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"mintTo"`
 */
export const useSimulatePet3Pet3GameMintTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'mintTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePet3Pet3GameRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulatePet3Pet3GameSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulatePet3Pet3GameSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePet3Pet3GameTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePet3Pet3GameTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulatePet3Pet3GameWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3GameAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3GameAbi}__
 */
export const useWatchPet3Pet3GameEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: pet3Pet3GameAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPet3Pet3GameApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3GameAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchPet3Pet3GameApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3GameAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `eventName` set to `"BoxClaimed"`
 */
export const useWatchPet3Pet3GameBoxClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3GameAbi,
    eventName: 'BoxClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `eventName` set to `"Minted"`
 */
export const useWatchPet3Pet3GameMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3GameAbi,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPet3Pet3GameOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3GameAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3GameAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPet3Pet3GameTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3GameAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__
 */
export const useReadPet3Pet3Token = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3TokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadPet3Pet3TokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadPet3Pet3TokenAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPet3Pet3TokenBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadPet3Pet3TokenDecimals = /*#__PURE__*/ createUseReadContract(
  { abi: pet3Pet3TokenAbi, functionName: 'decimals' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadPet3Pet3TokenName = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3TokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadPet3Pet3TokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3TokenAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPet3Pet3TokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3TokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadPet3Pet3TokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__
 */
export const useWritePet3Pet3Token = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Pet3TokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePet3Pet3TokenApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"burn"`
 */
export const useWritePet3Pet3TokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Pet3TokenAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePet3Pet3TokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Pet3TokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"permit"`
 */
export const useWritePet3Pet3TokenPermit = /*#__PURE__*/ createUseWriteContract(
  { abi: pet3Pet3TokenAbi, functionName: 'permit' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWritePet3Pet3TokenTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePet3Pet3TokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__
 */
export const useSimulatePet3Pet3Token = /*#__PURE__*/ createUseSimulateContract(
  { abi: pet3Pet3TokenAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePet3Pet3TokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulatePet3Pet3TokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePet3Pet3TokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulatePet3Pet3TokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulatePet3Pet3TokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePet3Pet3TokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenAbi}__
 */
export const useWatchPet3Pet3TokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: pet3Pet3TokenAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPet3Pet3TokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPet3Pet3TokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__
 */
export const useReadPet3Pet3TokenTest = /*#__PURE__*/ createUseReadContract({
  abi: pet3Pet3TokenTestAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const useReadPet3Pet3TokenTestIsTest =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'IS_TEST',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const useReadPet3Pet3TokenTestExcludeArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'excludeArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const useReadPet3Pet3TokenTestExcludeContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'excludeContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"excludeSelectors"`
 */
export const useReadPet3Pet3TokenTestExcludeSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'excludeSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const useReadPet3Pet3TokenTestExcludeSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'excludeSenders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"failed"`
 */
export const useReadPet3Pet3TokenTestFailed =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'failed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"pet3Game"`
 */
export const useReadPet3Pet3TokenTestPet3Game =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'pet3Game',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"pet3Token"`
 */
export const useReadPet3Pet3TokenTestPet3Token =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'pet3Token',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const useReadPet3Pet3TokenTestTargetArtifactSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'targetArtifactSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const useReadPet3Pet3TokenTestTargetArtifacts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'targetArtifacts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"targetContracts"`
 */
export const useReadPet3Pet3TokenTestTargetContracts =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'targetContracts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const useReadPet3Pet3TokenTestTargetInterfaces =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'targetInterfaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const useReadPet3Pet3TokenTestTargetSelectors =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'targetSelectors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"targetSenders"`
 */
export const useReadPet3Pet3TokenTestTargetSenders =
  /*#__PURE__*/ createUseReadContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'targetSenders',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__
 */
export const useWritePet3Pet3TokenTest = /*#__PURE__*/ createUseWriteContract({
  abi: pet3Pet3TokenTestAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useWritePet3Pet3TokenTestSetUp =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_claimBox"`
 */
export const useWritePet3Pet3TokenTestTestClaimBox =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_claimBox',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_deposit"`
 */
export const useWritePet3Pet3TokenTestTestDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_deposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_mint"`
 */
export const useWritePet3Pet3TokenTestTestMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_random"`
 */
export const useWritePet3Pet3TokenTestTestRandom =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_random',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_total"`
 */
export const useWritePet3Pet3TokenTestTestTotal =
  /*#__PURE__*/ createUseWriteContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_total',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__
 */
export const useSimulatePet3Pet3TokenTest =
  /*#__PURE__*/ createUseSimulateContract({ abi: pet3Pet3TokenTestAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"setUp"`
 */
export const useSimulatePet3Pet3TokenTestSetUp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'setUp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_claimBox"`
 */
export const useSimulatePet3Pet3TokenTestTestClaimBox =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_claimBox',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_deposit"`
 */
export const useSimulatePet3Pet3TokenTestTestDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_mint"`
 */
export const useSimulatePet3Pet3TokenTestTestMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_random"`
 */
export const useSimulatePet3Pet3TokenTestTestRandom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_random',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `functionName` set to `"test_total"`
 */
export const useSimulatePet3Pet3TokenTestTestTotal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pet3Pet3TokenTestAbi,
    functionName: 'test_total',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__
 */
export const useWatchPet3Pet3TokenTestEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: pet3Pet3TokenTestAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log"`
 */
export const useWatchPet3Pet3TokenTestLogEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_address"`
 */
export const useWatchPet3Pet3TokenTestLogAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_array"`
 */
export const useWatchPet3Pet3TokenTestLogArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const useWatchPet3Pet3TokenTestLogBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const useWatchPet3Pet3TokenTestLogBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_int"`
 */
export const useWatchPet3Pet3TokenTestLogIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const useWatchPet3Pet3TokenTestLogNamedAddressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_address',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_array"`
 */
export const useWatchPet3Pet3TokenTestLogNamedArrayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_array',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const useWatchPet3Pet3TokenTestLogNamedBytesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_bytes',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const useWatchPet3Pet3TokenTestLogNamedBytes32Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_bytes32',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const useWatchPet3Pet3TokenTestLogNamedDecimalIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_decimal_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const useWatchPet3Pet3TokenTestLogNamedDecimalUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_decimal_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const useWatchPet3Pet3TokenTestLogNamedIntEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_int',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const useWatchPet3Pet3TokenTestLogNamedStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const useWatchPet3Pet3TokenTestLogNamedUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_named_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_string"`
 */
export const useWatchPet3Pet3TokenTestLogStringEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_string',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const useWatchPet3Pet3TokenTestLogUintEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'log_uint',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pet3Pet3TokenTestAbi}__ and `eventName` set to `"logs"`
 */
export const useWatchPet3Pet3TokenTestLogsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: pet3Pet3TokenTestAbi,
    eventName: 'logs',
  })
