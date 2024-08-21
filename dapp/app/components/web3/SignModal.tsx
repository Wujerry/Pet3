'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SignMsgBtn from './SignMsgBtn'

export default function SignModal() {
  return (
    <Dialog open={true}>
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
