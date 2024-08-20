'use client'
import { useAccounts, useCurrentAccount, useSignPersonalMessage, useSwitchAccount } from '@mysten/dapp-kit'
import { verifyPersonalMessageSignature } from '@mysten/sui/verify'
import { signIn } from 'next-auth/react'

export default function SignMsgBtn() {
  const account = useCurrentAccount()
  console.log('address:', account?.address)
  const { mutate: switchAccount } = useSwitchAccount()
  const accounts = useAccounts()
  console.log('accounts:', accounts)
  // switchAccount(
  // 	{ account },
  // 	{
  // 		onSuccess: () => console.log(`switched to ${account.address}`),
  // 	},
  // );
  const { mutate: signPersonalMessage } = useSignPersonalMessage()
  const handleSignMessage = async () => {
    if (!account) {
      alert('Please connect your wallet first')
      return
    }
    signPersonalMessage(
      {
        message: new TextEncoder().encode('123'),
      },
      {
        onSuccess: async ({ signature }) => {
          signIn('credentials', { address: account.address, signature })
        },
      },
    )
  }
  return (
    <div>
      <button onClick={handleSignMessage}>Sign Message</button>
    </div>
  )
}
