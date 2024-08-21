import BindXBtn from './web3/BindXBtn'
import ConnectBtn from './web3/ConnectBtn'
import DownloadBtn from './web3/DownloadBtn'
import SignModal from './web3/SignModal'
import SignMsgBtn from './web3/SignMsgBtn'

export default function Header({ isLogin }: Readonly<{ isLogin: boolean }>) {
  const isShowSignModal = !isLogin
  return (
    <div className='flex items-center justify-center p-2'>
      <div className='flex-1'>{!isLogin ? <SignMsgBtn></SignMsgBtn> : null}</div>
      <div className='mr-4'>
        <DownloadBtn></DownloadBtn>
      </div>
      <div className='mr-4'>
        <BindXBtn></BindXBtn>
      </div>
      <div>
        <ConnectBtn></ConnectBtn>
      </div>
      {isShowSignModal ? <SignModal></SignModal> : null}
    </div>
  )
}
