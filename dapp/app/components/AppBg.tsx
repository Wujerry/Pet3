'use client'
import { useEffect } from 'react'
import bgMatter from '../matter/app-bg'
import { Pet } from '../pet/Pet'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

export default function AppBg() {
  const router = useRouter()
  const { toast } = useToast()
  const onBoxClick = async () => {
    const res = await fetch('/api/box/add')
    const data = await res.json()
    toast({
      variant: 'destructive',
      description: data.message,
    })
    router.refresh()
  }
  useEffect(() => {
    // bgMatter()
    Pet(onBoxClick)
  }, [])
  return <div id='app-bg-wrapper' className='absolute bottom-0 left-0 right-0 top-0' style={{ zIndex: -1 }}></div>
}
