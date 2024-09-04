'use client'

import { useAccount } from 'wagmi'
import { auth } from '../auth'
import Mint from './Mint'
import TabContent from './home/TabContent'
import { useReadPet3Pet3GameBalanceOf } from '../generated'
import { Pet3Game } from '../lib/consts'

export default function HomeComp({ isLogin }: { isLogin: boolean }) {
  const { address } = useAccount()

  if (!address || !isLogin) {
    return <Mint></Mint>
  }

  if (address) {
    return <OwnedObjects address={address}></OwnedObjects>
  }
}

function OwnedObjects({ address }: { address: `0x${string}` }) {
  console.log(address)
  const { data } = useReadPet3Pet3GameBalanceOf({
    address: Pet3Game,
    args: [address],
  })
  console.log(data)

  if (data && data > 0) {
    return (
      <div className='mt-10 p-10'>
        <div className='p-2 text-center text-lg text-gray-500'>
          Drag to find hidden treasure box and $PET, $CROAK, etc
        </div>
        <TabContent></TabContent>
      </div>
    )
  }
  return <Mint></Mint>
}
