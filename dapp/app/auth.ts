import { isValidSuiAddress } from '@mysten/sui/utils'
import { verifyPersonalMessageSignature } from '@mysten/sui/verify'
import { sql } from '@vercel/postgres'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { User } from './lib/def'
import Twitter from 'next-auth/providers/twitter'

async function getUser(address: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE address=${address}`
    return user.rows[0]
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

async function getUserByXToken(address: string, token: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE address=${address} and token=${token}`
    return user.rows[0]
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Twitter({}),
    Credentials({
      name: 'Credentials',
      credentials: {
        address: {
          label: 'Address',
          type: 'text',
          placeholder: '0x0',
        },
        signature: {},
        xToken: {},
        type: {},
      },
      async authorize(credentials) {
        const address = String(credentials?.address)
        const signature = String(credentials?.signature)
        const xToken = String(credentials?.xToken)
        const type = String(credentials?.type)

        if (!isValidSuiAddress(address)) {
          return null
        }

        if (type === 'ext') {
          const user = await getUserByXToken(address, xToken)
          if (user) {
            return {
              id: address,
              name: address,
              address,
            }
          } else {
            return null
          }
        } else {
          const message = new TextEncoder().encode('123')
          try {
            const publicKey = await verifyPersonalMessageSignature(message, signature)
            if (publicKey.toSuiAddress() !== address) {
              return null
            }
            const user = await getUser(address)
            if (user) {
              return user
            } else {
              await sql`
                INSERT INTO users (name, address, token)
                VALUES (${address}, ${address}, ${''})`
              return {
                id: address,
                name: address,
                address,
              }
            }
          } catch (error) {
            console.error(error)
            return null
          }
        }
      },
    }),
  ],
})
