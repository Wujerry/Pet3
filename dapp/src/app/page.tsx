import { auth } from './auth'
import Header from './components/Header'

export default async function Home() {
  const session = await auth()
  console.log('session', session, session?.user)
  return (
    <div>
      <Header isLogin={!!session?.user} />
    </div>
  )
}
