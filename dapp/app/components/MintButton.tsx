'use client'

import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit'
import { Transaction } from '@mysten/sui/transactions'
import { MINT_RECORD, NFT_IMGAE_URL, NFT_MINT, POINTS } from '../lib/consts'

export default function MintButton() {
  let isMinting = false
  const account = useCurrentAccount()
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction()
  const handleClick = async () => {
    if (!account) return alert('Please connect your wallet first')
    if (isMinting) return
    isMinting = true
    const tx = new Transaction()
    tx.moveCall({
      target: NFT_MINT,
      arguments: [tx.object(MINT_RECORD), tx.pure.string(NFT_IMGAE_URL), tx.pure.address(account!.address)],
    })
    signAndExecuteTransaction(
      {
        transaction: tx,
        // chain: 'sui:testnet',
      },
      {
        onSuccess: (result) => {
          isMinting = false
          console.log('executed transaction', result)
          window.location.reload()
        },
      },
    )
  }

  return (
    <button className='glow-on-hover text-xl' onClick={handleClick}>
      Mint your free Pet3 now !
    </button>
  )
}
