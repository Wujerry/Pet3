import ScoreContent from './ScoreContent'
import TabContent from './TabContent'

export default function Home({
  address,
}: {
  address: `0x${string}` | undefined
}) {
  console.log(address)
  if (status === 'pending') {
    return <div></div>
  }
  return (
    <div>
      <ScoreContent tokenId={0}></ScoreContent>
      <div className='mx-8 mt-6'>
        <TabContent></TabContent>
      </div>
      <div className='text-gray-200 text-center py-2'>
        Market (coming soon...)
      </div>
    </div>
  )
}
