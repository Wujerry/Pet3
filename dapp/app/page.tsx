import { auth } from './auth'
import Header from './components/Header'
import Mint from './components/Mint'

export default async function Home() {
  const session = await auth()
  console.log('session', session, session?.user)
  return (
    <div className='flex h-full flex-col'>
      <Header isLogin={!!session?.user} />
      <div className='flex-1'>
        <Mint></Mint>
      </div>
    </div>
  )
}
