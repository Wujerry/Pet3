import { sql } from '@vercel/postgres'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }
  const address = session?.user?.name!
  const userQuery = await sql`select * from users where address = ${address}`
  const user = userQuery.rows[0]
  const boxQuery = await sql`select * from box_history where uid = ${user.id} and state = 0  order by date desc limit 1`
  if (boxQuery.rows.length > 0) {
    const box = boxQuery.rows[0]
    console.log(111, box.date.getTime(), Date.now() - 1000 * 60 * 60)
    if (box.date.getTime() > Date.now() - 1000 * 60 * 60) {
      return Response.json({ message: 'You can only find a box once an hour!' })
    }
  }
  await sql`insert into box_history (uid, amount, state, date) values (${user.id}, 1, 0, now())`
  revalidatePath('/')
  // redirect('/')
  return Response.json({ message: 'You find a box!' })
}
