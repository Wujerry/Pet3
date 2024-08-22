import { signIn } from '@/app/auth'
import { sql } from '@vercel/postgres'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  // get token from x.com with code
  const res = await fetch('https://api.x.com/2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code!,
      client_id: process.env.AUTH_TWITTER_ID!,
      code_verifier: 'challenge',
      redirect_uri: `http://localhost:3000/api/auth/xcallback`,
    }),
  })
  const data = await res.json()
  const access_token = data.access_token

  // get user info from x.com
  const xUser = await fetch('https://api.x.com/2/users/me', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  const userData = await xUser.json()
  const { id, name, username } = userData.data
  // update the user token in db by address
  console.log('id', id, 'name', name, 'username', username)

  const userQuery = await sql`select * from users where xid = ${id}`
  if (userQuery.rows.length === 0) {
    return Response.json({ message: 'User not found!', code: '004' })
  } else {
    signIn('credentials')
  }

  redirect('/xauthed')
}
