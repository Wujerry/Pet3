import { useEffect } from 'react'
import Balance from './web3/Balance'
import BindXBtn from './web3/BindXBtn'
import ConnectBtn from './web3/ConnectBtn'
import DownloadBtn from './web3/DownloadBtn'
import SignModal from './web3/SignModal'
import { getUserInfo } from '../lib/actions'
import { User } from '../lib/def'
import ClaimBox from './web3/ClaimBox'

export default async function Header({ isLogin }: Readonly<{ isLogin: boolean }>) {
  const isShowSignModal = !isLogin
  const user = await getUserInfo()
  return (
    <div className='flex items-center justify-center p-2'>
      <div className='flex-1 px-10 text-3xl text-white'>
        <span>Pet</span>
        <span className='inline-block pl-2 text-yellow-400'>3</span>
        <span className='inline-block pl-8 text-lg text-gray-500'>Drag to find hidden treasure box and $PET</span>
      </div>
      {/* <div className='flex-1'>{!isLogin ? <SignMsgBtn></SignMsgBtn> : null}</div> */}
      <div className='mr-4'>
        <DownloadBtn></DownloadBtn>
      </div>
      <div className='mr-4'>
        <BindXBtn username={user?.xusername}></BindXBtn>
      </div>
      <div className='mx-4'>
        <ClaimBox count={user?.boxs}></ClaimBox>
      </div>
      <div className='mr-4'>
        <Balance></Balance>
      </div>
      <div>
        <ConnectBtn></ConnectBtn>
      </div>
      {isShowSignModal ? <SignModal></SignModal> : null}
    </div>
  )
}
