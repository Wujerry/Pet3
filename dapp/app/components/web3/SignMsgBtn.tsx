'use client'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useAccount, useSignMessage } from 'wagmi'

export default function SignMsgBtn() {
  const account = useAccount()

  const { signMessageAsync } = useSignMessage()
  const handleSignMessage = async () => {
    if (!account) {
      alert('Please connect your wallet first')
      return
    }
    const signature = await signMessageAsync({
      message: 'sign in pet3',
    })
    signIn('credentials', { address: account.address, signature })
  }
  return (
    <div className='flex justify-center p-4'>
      <Button variant='secondary' onClick={handleSignMessage}>
        Sign message
      </Button>
    </div>
  )
}
