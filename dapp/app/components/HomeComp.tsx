'use client'

import { useCurrentAccount, useSuiClientQuery } from '@mysten/dapp-kit'
import { auth } from '../auth'
import Mint from './Mint'
import { NFT_TYPE } from '../lib/consts'
import TabContent from './home/TabContent'

export default function HomeComp({ isLogin }: { isLogin: boolean }) {
  const account = useCurrentAccount()

  if (!account || !isLogin) {
    return <Mint></Mint>
  }

  if (account) {
    return <OwnedObjects address={account.address}></OwnedObjects>
  }
}

function OwnedObjects({ address }: { address: string }) {
  console.log(address)
  const { data } = useSuiClientQuery('getOwnedObjects', {
    owner: address,
    filter: {
      StructType: NFT_TYPE,
    },
  })
  if (data && data.data && data.data.length > 0) {
    const nftId = data.data[0].data?.objectId
    console.log('nftId', nftId)
    return (
      <div className='mt-10 p-10'>
        <TabContent></TabContent>
      </div>
    )
  }
  return <Mint></Mint>
}
