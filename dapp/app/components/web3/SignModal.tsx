'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SignMsgBtn from './SignMsgBtn'
import { useCurrentAccount } from '@mysten/dapp-kit'

export default function SignModal() {
  const account = useCurrentAccount()
  return (
    <Dialog open={!!account?.address}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-white'>Sign message</DialogTitle>
          <DialogDescription>
            Sign the message to verify your identity
            <SignMsgBtn></SignMsgBtn>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
