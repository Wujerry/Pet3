import { Button } from '@/components/ui/button'
import { Twitter } from 'lucide-react'

export default function BindXBtn({
  username,
}: {
  username: string | undefined
}) {
  return (
    <div className='text-white'>
      <Button asChild variant='outline'>
        <a href=''>
          <Twitter />

          <span className='p-2'>{username ?? 'Sign in with X'}</span>
        </a>
      </Button>
    </div>
  )
}
