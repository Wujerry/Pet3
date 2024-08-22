import { useState } from 'react'
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client'
import { COIN_TYPE } from '../lib/consts'

export default function useBalance(address: string | undefined) {
  const [balance, setBalance] = useState<string>('0')

  const refreshBalance = () => {
    getPetBalance(address).then((balance) => {
      setBalance(balance)
    })
  }
  refreshBalance()
  return { balance, refreshBalance }
}

export async function getPetBalance(address: string | undefined) {
  if (!address) return '0'
  const client = new SuiClient({
    url: getFullnodeUrl('testnet'),
  })
  const coinBalance = await client.getBalance({
    owner: address,
    coinType: COIN_TYPE,
  })
  const total = coinBalance?.totalBalance
  return (Number(total) / 1000000).toFixed(2)
}
