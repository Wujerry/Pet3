import { getDefaultConfig } from 'connectkit'
import { Chain } from 'viem/chains'
import { createConfig, http } from 'wagmi'
import { aiaTestnet } from './aiachain'

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [aiaTestnet],
    transports: {
      // RPC URL for each chain
      // [lineaTestnet.id]: http(),
      // [foundry.id]: http(),
      [aiaTestnet.id]: http(),
    },
    // Required API Keys
    walletConnectProjectId: '',
    // Required App Info
    appName: 'Pet3',
    // Optional App Info
    appDescription: 'An virtual onchain Pet',
    appUrl: 'https://pet3-fawn.vercel.app', // your app's url
    appIcon: 'https://pet3-fawn.vercel.app/pet3.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
)
