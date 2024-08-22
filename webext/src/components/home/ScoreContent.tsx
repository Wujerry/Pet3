export default function ScoreContent({ tokenId }: { tokenId: number }) {
  return <Score score={Number(0)}></Score>
}

function Score({ score }: { score: number }) {
  return (
    <div className='flex  items-end justify-center text-white mx-8 mt-2 border rounded-md border-gray-600 px-4 py-2'>
      <span className='text-5xl flex-1 pl-4 text-yellow-400'>{score || 0}</span>
      <div className='text-xl'>Boxs</div>
    </div>
  )
}
