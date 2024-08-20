import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519'
import { isValidSuiAddress } from '@mysten/sui/utils'
import { verifyPersonalMessageSignature } from '@mysten/sui/verify'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        address: {
          label: 'Address',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {},
      },
      async authorize(credentials) {
        const address = String(credentials?.address)
        const signature = String(credentials?.signature)
        if (!isValidSuiAddress(address)) {
          return null
        }
        const message = new TextEncoder().encode('123')
        try {
          const publicKey = await verifyPersonalMessageSignature(message, signature)
          console.log('Public Key:', publicKey.toSuiAddress())
          if (publicKey.toSuiAddress() !== address) {
            return null
          }
          return {
            id: credentials?.address as string,
            name: credentials?.address,
            address: credentials?.address,
          }
        } catch (error) {
          console.error(error)
          return null
        }
      },
    }),
  ],
})
