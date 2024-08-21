import { db } from '@vercel/postgres'

const client = await db.connect()

async function seed() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT,
			address TEXT NOT NULL UNIQUE,
			token TEXT NOT NULL,
			xid TEXT,
			xname TEXT,
			xusername TEXT
    );
  `
  await client.sql`
    CREATE TABLE IF NOT EXISTS box_history (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      uid UUID NOT NULL,
      amount INT NOT NULL,
			state INT NOT NULL,
			date DATE NOT NULL
    );
  `
}

export async function GET() {
  try {
    await client.sql`BEGIN`
    await seed()

    await client.sql`COMMIT`

    return Response.json({ message: 'Database seeded successfully' })
  } catch (error) {
    await client.sql`ROLLBACK`
    return Response.json({ error }, { status: 500 })
  }
}
