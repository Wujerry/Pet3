'use server'

import { sql } from '@vercel/postgres'
import { User } from './def'
import { auth } from '../auth'

export async function getUserInfo() {
  const session = await auth()
  if (!session?.user) {
    return null
  }
  const address = session?.user?.name!
  const userQuery = await sql<User>`select * from users where address = ${address}`
  const user = userQuery.rows[0]
  const boxsQuery = await sql`select count(*) from box_history where uid = ${user.id} and state = 0`
  const boxsCount = boxsQuery.rows[0].count
  user.boxs = boxsCount
  return user
}
