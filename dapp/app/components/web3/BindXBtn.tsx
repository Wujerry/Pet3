import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Twitter } from 'lucide-react'

export default function BindXBtn() {
  return (
    <div className='text-white'>
      <Link className={buttonVariants({ variant: 'outline' })} href='/api/auth/x' target='_blank'>
        <Twitter /> <span className='pl-2'>Bind X</span>
      </Link>
    </div>
  )
}
