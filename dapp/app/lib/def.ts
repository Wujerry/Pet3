export type User = {
  id: string
  name: string
  email: string
  address: string
  token: string
  xusername?: string
  boxs?: number
}

export type BoxHistory = {
  id: string
  uid: string
  amount: number
  state: number
  date: string
}
