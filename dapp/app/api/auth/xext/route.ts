import { BASE_URL } from '@/app/lib/consts'
import { redirect } from 'next/navigation'

export async function GET() {
  const callback = `${BASE_URL}/api/auth/xextcallback`
  redirect(
    `https://x.com/i/oauth2/authorize?scope=tweet.read%20users.read&response_type=code&client_id=${process.env.AUTH_TWITTER_ID}&redirect_uri=${callback}&state=${1}&code_challenge=challenge&code_challenge_method=plain`,
  )
}
