import { useReadContract } from 'wagmi'
import ScoreContent from './ScoreContent'
import { Pet3Abi } from '../../abi/Pet3'
import { CONTRACT_ADDRESS } from '../../common/const'
import TabContent from './TabContent'

export default function Home({
  address,
}: {
  address: `0x${string}` | undefined
}) {
  const { status, data: tokenId } = useReadContract({
    abi: Pet3Abi,
    address: CONTRACT_ADDRESS,
    functionName: 'getTokenId',
    args: [address],
  })
  if (status === 'pending') {
    return <div></div>
  }
  return (
    <div>
      <ScoreContent tokenId={tokenId as number}></ScoreContent>
      <div className='mx-8 mt-6'>
        <TabContent></TabContent>
      </div>
      <div className='text-gray-200 text-center py-2'>
        Market (coming soon...)
      </div>
    </div>
  )
}
