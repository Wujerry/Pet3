import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { auth } from './auth'
import AppBg from './components/AppBg'
import Header from './components/Header'
import HomeComp from './components/HomeComp'

export default async function Home() {
  const session = await auth()
  return (
    <div className='flex h-full flex-col'>
      <AppBg></AppBg>
      <Header isLogin={!!session?.user} />
      <div className='flex flex-1'>
        <div className='flex-1'>
          <HomeComp isLogin={!!session?.user}></HomeComp>
        </div>
      </div>
    </div>
  )
}
