import ConnectBtn from './web3/ConnectBtn'
import SignMsgBtn from './web3/SignMsgBtn'

export default function Header({ isLogin }: Readonly<{ isLogin: boolean }>) {
  return (
    <div className='flex'>
      <div className='flex-1'>{!isLogin ? <SignMsgBtn></SignMsgBtn> : null}</div>
      <div>
        <ConnectBtn></ConnectBtn>
      </div>
    </div>
  )
}
