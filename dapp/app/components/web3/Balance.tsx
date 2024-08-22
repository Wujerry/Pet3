'use client'
import useBalance from '@/app/common/useBalance'
import { COIN_TYPE } from '@/app/lib/consts'
import { useCurrentAccount } from '@mysten/dapp-kit'
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client'
import { useEffect, useState } from 'react'

export default function Balance() {
  const account = useCurrentAccount()
  const { balance } = useBalance(account?.address)
  return <div className='text-yellow-400'>{balance} PET</div>
}
