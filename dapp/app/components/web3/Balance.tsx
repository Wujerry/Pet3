'use client'
import { COIN_TYPE } from '@/app/lib/consts'
import { useCurrentAccount } from '@mysten/dapp-kit'
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client'
import { useEffect, useState } from 'react'

export default function Balance() {
  const account = useCurrentAccount()
  const [balance, setBalance] = useState<string>('0')

  const fetchBalance = async (address: string) => {
    const client = new SuiClient({
      url: getFullnodeUrl('testnet'),
    })
    const coinBalance = await client.getBalance({
      owner: address,
      coinType: COIN_TYPE,
    })
    const total = coinBalance?.totalBalance
    setBalance(total.substring(0, total.length - 6))
  }
  useEffect(() => {
    if (account?.address) {
      fetchBalance(account.address)
    }
  }, [account])
  return <div className='text-yellow-400'>{balance} PET</div>
}
