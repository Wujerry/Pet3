'use client'

import { useAccount } from 'wagmi'
import { useReadPet3Pet3TokenBalanceOf } from '@/app/generated'
import { Pet3Token } from '@/app/lib/consts'
import { formatUnits } from 'viem'

export default function Balance({ address, symbol }: { address: `0x${string}`; symbol: string }) {
  const account = useAccount()
  console.log(222, account?.address, account)
  const { data } = useReadPet3Pet3TokenBalanceOf({
    address: address,
    args: [account?.address!],
  })
  console.log(123123, data)

  const balance = data ? formatUnits(data, 18) : '0'
  return (
    <div suppressHydrationWarning className='px-6 text-yellow-400'>
      {balance} ${symbol}
    </div>
  )
}
