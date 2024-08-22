import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Twitter } from 'lucide-react'

export default function BindXBtn({ username }: { username: string | undefined }) {
  return (
    <div className='text-white'>
      <Link
        className={buttonVariants({ variant: 'outline' })}
        href={username ? '#' : '/api/auth/x'}
        target={username ? '' : '_blank'}
        prefetch={false}
      >
        <Twitter /> <span className='pl-2'>{username ?? 'Bind X'}</span>
      </Link>
    </div>
  )
}
