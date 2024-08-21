import { auth } from '../../../auth'
import { redirect } from 'next/navigation'

export async function GET() {
  const session = await auth()
  const address = session?.user?.name!
  redirect(
    `https://x.com/i/oauth2/authorize?scope=tweet.read%20users.read&response_type=code&client_id=${process.env.AUTH_TWITTER_ID}&redirect_uri=${`http://localhost:3000/api/auth/xcallback`}&state=${address}&code_challenge=challenge&code_challenge_method=plain`,
  )
}
