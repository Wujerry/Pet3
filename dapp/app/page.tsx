import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { auth } from './auth'
import AppBg from './components/AppBg'
import Header from './components/Header'
import HomeComp from './components/HomeComp'
import Image from 'next/image'
import Mint from './components/Mint'

export default async function Home() {
  const session = await auth()
  return (
    <div className='flex h-full flex-col'>
      <AppBg></AppBg>
      <Header isLogin={!!session?.user} />
      <div className='flex flex-1'>
        <div className='flex w-[30%] min-w-[425px] flex-col p-10'>
          <div className='my-2 flex cursor-pointer items-center rounded-md border border-gray-600 p-6 hover:border-gray-900'>
            <Image src='/pet3.png' width={80} height={80} alt='' />
            <div className='pl-6 text-gray-500'>
              <div className='text-2xl text-gray-300'>Pet3</div>
              <div>An Virtual onchain Pet</div>
            </div>
          </div>
          <div className='my-2 flex cursor-pointer items-center rounded-md border border-gray-600 p-6 hover:border-gray-900'>
            <Image src='/efrog.jpg' width={80} height={80} alt='' />
            <div className='pl-6 text-gray-500'>
              <div className='text-2xl text-gray-300'>Ethereum Frogs</div>
              <div>Efrogs is the OG PFP collection on Linea</div>
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <HomeComp isLogin={!!session?.user}></HomeComp>
        </div>
      </div>
    </div>
  )
}
