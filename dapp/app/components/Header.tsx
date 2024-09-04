import Balance from './web3/Balance'
import BindXBtn from './web3/BindXBtn'
import ConnectBtn from './web3/ConnectBtn'
import DownloadBtn from './web3/DownloadBtn'
import SignModal from './web3/SignModal'
import { getUserInfo } from '../lib/actions'
import ClaimBox from './web3/ClaimBox'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { CROAKToken, Pet3Token } from '../lib/consts'

export default async function Header({ isLogin }: Readonly<{ isLogin: boolean }>) {
  const isShowSignModal = !isLogin
  const user = await getUserInfo()
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center p-2'>
        <div className='flex-1 px-10 text-3xl text-white'>
          <div className='flex items-center'>
            <span>Pet</span>
            <span className='inline-block pl-2 text-yellow-400'>3</span>
            <div className='pl-10'>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Market (coming soon)
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
        <div className='mr-4'>
          <DownloadBtn></DownloadBtn>
        </div>
        <div className='mr-4'>
          <BindXBtn username={user?.xusername}></BindXBtn>
        </div>
        <div className='mx-4'>
          <ClaimBox count={user?.boxs}></ClaimBox>
        </div>

        <div>
          <ConnectBtn></ConnectBtn>
        </div>
        {isShowSignModal ? <SignModal></SignModal> : null}
      </div>
      <div className='flex'>
        <div className='flex-1'></div>
        <div className='mr-4 flex'>
          <Balance address={Pet3Token} symbol='PET'></Balance>
          <Separator orientation='vertical' />
          <Balance address={CROAKToken} symbol='CROAK'></Balance>
        </div>
      </div>
    </div>
  )
}
