import { auth } from '@/app/auth'
import { sql } from '@vercel/postgres'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { pet3Pet3GameAbi, pet3Pet3TokenAbi } from '@/app/generated'
import { Pet3Game } from '@/app/lib/consts'
import { createPublicClient, createWalletClient, formatUnits, http, parseEventLogs } from 'viem'
import { linea } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const inAddress = searchParams.get('address')
  console.log('inAddress', inAddress)
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }
  const address = session?.user?.name!
  if (inAddress !== address) {
    return Response.json({ message: 'Invalid address' })
  }
  const userQuery = await sql`select * from users where address = ${address}`
  const user = userQuery.rows[0]
  const boxQuery = await sql`select count(*) as count from box_history where uid = ${user.id} and state = 0`
  const count = boxQuery.rows[0].count
  const contractRes = await callContract(count, address)
  await sql`update box_history set state = 1 where uid = ${user.id} and state = 0`
  await sql`insert into reward_history (address, reward, date) values (${address}, ${contractRes}, now())`
  // redirect('/')
  revalidatePath('/')
  return Response.json({ message: `Claimed ${contractRes}` })
}

async function callContract(count: number, address: string) {
  const account = privateKeyToAccount(process.env.Owner_key as `0x${string}`)
  const client = createWalletClient({
    account,
    chain: linea,
    transport: http('https://linea-mainnet.g.alchemy.com/v2/' + process.env.alchemy_key),
  })

  const publicClient = createPublicClient({
    chain: linea,
    transport: http('https://linea-mainnet.g.alchemy.com/v2/' + process.env.alchemy_key),
  })

  console.log('count', count)
  // const { request } = await publicClient.simulateContract({

  // })
  // console.log(request)
  const gas = BigInt(0.5 * 10 ** 9)
  let hash: `0x${string}` = '0x123'
  try {
    hash = await client.writeContract({
      abi: pet3Pet3GameAbi,
      address: Pet3Game,
      functionName: 'claimBox',
      args: [BigInt(count), address as `0x${string}`],
      maxFeePerGas: gas,
      maxPriorityFeePerGas: gas,
      account,
    })
  } catch (e) {
    console.log(e)
  }

  const res = await publicClient.waitForTransactionReceipt({
    hash,
  })
  const logs = parseEventLogs({
    abi: pet3Pet3GameAbi,
    eventName: 'BoxClaimed',
    logs: res.logs,
  })
  let result = '0'
  let symbol = '$PET'
  if (logs.length > 0) {
    result = formatUnits(logs[0].args.amount, 18)
    const tokenAddress = logs[0].args.tokenAddress
    const data = await publicClient.readContract({
      address: tokenAddress as `0x${string}`,
      abi: pet3Pet3TokenAbi,
      functionName: 'symbol',
    })
    symbol = data
  }
  return result + ' ' + symbol
}
