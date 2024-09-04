'use client'

import { useAccount } from 'wagmi'
import { Pet3Game } from '../lib/consts'
import { useWritePet3Pet3GameMintTo } from '../generated'
import { waitForTransactionReceipt } from '@wagmi/core'
import { config } from '../common/config'

export default function MintButton() {
  let isMinting = false
  const account = useAccount()
  const { writeContractAsync } = useWritePet3Pet3GameMintTo()

  // mint pet3
  const handleClick = async () => {
    if (!account) return alert('Please connect your wallet first')
    if (isMinting) return
    isMinting = true
    console.log('minting', account.address!)
    const hash = await writeContractAsync({
      address: Pet3Game,
      args: [account.address!],
    })
    const receipt = await waitForTransactionReceipt(config, { hash })
    isMinting = false
    console.log('executed transaction', hash, receipt)
    window.location.reload()
  }

  return (
    <button className='glow-on-hover text-xl' onClick={handleClick}>
      Mint your free Pet3 now !
    </button>
  )
}
