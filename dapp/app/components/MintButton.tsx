export default function MintButton({
  minted,
  address,
  isConnected,
}: {
  minted: boolean
  address: `0x${string}` | undefined
  isConnected: boolean
}) {
  return <button className='glow-on-hover text-xl'>{minted ? 'Minted !' : 'Mint your free Pet3 now !'}</button>
}
