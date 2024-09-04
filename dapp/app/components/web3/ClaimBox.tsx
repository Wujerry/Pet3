'use client'
// import useBalance from '@/app/common/useBalance'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAccount } from 'wagmi'

export default function ClaimBox({ count }: { count: number | undefined }) {
  const router = useRouter()
  const account = useAccount()
  const [loading, setLoading] = useState(false)
  // const { refreshBalance } = useBalance(account?.address)
  const handleClick = async () => {
    console.log(count)
    if ((count ?? 0) < 1) return
    setLoading(true)
    try {
      const res = await fetch('/api/box/open?address=' + account!.address, { method: 'GET' })
      const data = await res.json()
      toast({ variant: 'destructive', description: data.message })
      console.log(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
      router.refresh()
      // refreshBalance()
    }
  }
  return (
    <div className='flex items-center justify-center rounded-md border'>
      <div className='px-4 text-4xl font-bold text-pink-300'>{count || '0'}</div>
      <Button variant='secondary' disabled={loading} onClick={handleClick}>
        {loading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        Open Box
      </Button>
    </div>
  )
}
