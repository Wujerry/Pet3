import { NextRequest } from 'next/server'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'
import { BASE_URL } from '@/app/lib/consts'

export async function GET() {
  const session = await auth()
  const address = session?.user?.name!
  const callback = `${BASE_URL}/api/auth/xcallback`
  redirect(
    `https://x.com/i/oauth2/authorize?scope=tweet.read%20users.read&response_type=code&client_id=${process.env.AUTH_TWITTER_ID}&redirect_uri=${callback}&state=${address}&code_challenge=challenge&code_challenge_method=plain`,
  )
}
