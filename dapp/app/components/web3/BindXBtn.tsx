import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Twitter } from 'lucide-react'

export default function BindXBtn({ username }: { username: string | undefined }) {
  return (
    <div className='text-white'>
      <Link
        className={buttonVariants({ variant: 'outline' })}
        href={username ? 'javascript:void(0);' : '/api/auth/x'}
        target='_blank'
        prefetch={false}
      >
        <Twitter /> <span className='pl-2'>{username ?? 'Bind X'}</span>
      </Link>
    </div>
  )
}
