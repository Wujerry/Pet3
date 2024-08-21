'use client'
import { Button } from '@/components/ui/button'
import { useCurrentAccount, useSignPersonalMessage } from '@mysten/dapp-kit'
import { signIn } from 'next-auth/react'

export default function SignMsgBtn() {
  const account = useCurrentAccount()

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
    <div className='flex justify-center p-4'>
      <Button variant='secondary' onClick={handleSignMessage}>
        Sign message
      </Button>
    </div>
  )
}
