import { Chain } from 'viem/chains'

export const aiaTestnet = {
  id: 1320,
  name: 'AIA',
  nativeCurrency: { name: 'AIA', symbol: 'AIA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://aia-dataseed1-testnet.aiachain.org'] },
  },
  blockExplorers: {
    default: { name: 'AIAscan', url: 'https://testnet.aiascan.com' },
  },
} as const satisfies Chain
