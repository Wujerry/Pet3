import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
import { react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'app/generated.ts',
  contracts: [],
  plugins: [
    react(),
    foundry({
      project: '../contract/pet3_linea',
      namePrefix: 'Pet3',
    }),
  ],
})
