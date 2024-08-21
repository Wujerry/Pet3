import { Button } from '@/components/ui/button'

export default function ClaimBox({ count }: { count: number | undefined }) {
  return (
    <div className='flex items-center justify-center rounded-md border'>
      <div className='px-4 text-4xl font-bold text-pink-300'>{count || '0'}</div>
      <Button variant='secondary'>Open Box</Button>
    </div>
  )
}
