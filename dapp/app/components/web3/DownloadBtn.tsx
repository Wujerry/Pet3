import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Chrome } from 'lucide-react'

export default function DownloadBtn() {
  return (
    <div className='text-white'>
      <Link
        className={buttonVariants({ variant: 'outline' })}
        href='https://github.com/Wujerry/Pet3/releases'
        target='_blank'
      >
        <Chrome /> <span className='pl-2'>Download Chrome extension</span>
      </Link>
    </div>
  )
}
