import { auth } from '@/app/auth'
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client'
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519'
import { fromHEX, fromB64 } from '@mysten/sui/utils'
import { Transaction } from '@mysten/sui/transactions'
import { sql } from '@vercel/postgres'
import { redirect } from 'next/navigation'
import { ADMIN_CAP, CLAIM_BOX, COIN_TYPE, PET_POOL } from '@/app/lib/consts'
import { decodeSuiPrivateKey } from '@mysten/sui/cryptography'
import { revalidatePath } from 'next/cache'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }
  const address = session?.user?.name!
  const userQuery = await sql`select * from users where address = ${address}`
  const user = userQuery.rows[0]
  const boxQuery = await sql`select count(*) as count from box_history where uid = ${user.id} and state = 0`
  const count = boxQuery.rows[0].count
  const contractRes = await callContract(count, address)
  if (contractRes.effects?.status.status !== 'success') return Response.json({ message: 'contract error!' })
  const balance = contractRes.balanceChanges?.find((item) => item.coinType === COIN_TYPE)?.amount
  await sql`update box_history set state = 1 where uid = ${user.id} and state = 0`
  // redirect('/')
  revalidatePath('/')
  return Response.json({ message: `Claimed ${(Number(balance) / 1000000).toFixed(3)} $PET` })
}

async function callContract(count: number, address: string) {
  const rpcUrl = getFullnodeUrl('testnet')
  const adminKeypairs = Ed25519Keypair.fromSecretKey(decodeSuiPrivateKey(process.env.SUI_PRIVATE_KEY!).secretKey)

  // create a client connected to devnet
  const client = new SuiClient({ url: rpcUrl })
  const tx = new Transaction()
  tx.moveCall({
    target: CLAIM_BOX,
    arguments: [
      tx.object(ADMIN_CAP),
      tx.object(PET_POOL),
      tx.pure.address(address),
      tx.pure.u64(count),
      tx.object('0x8'),
    ],
  })
  tx.setGasBudgetIfNotSet(100000000)
  const res = await client.signAndExecuteTransaction({
    transaction: tx,
    signer: adminKeypairs,
  })
  const transaction = await client.waitForTransaction({
    digest: res.digest,
    options: {
      showBalanceChanges: true,
      showEffects: true,
    },
  })
  return transaction
}
