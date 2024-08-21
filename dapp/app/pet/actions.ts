// import { createWalletClient, custom } from 'viem'
// import { mainnet } from 'viem/chains'
// import PortStream from 'extension-port-stream'
// import { MetaMaskInpageProvider } from '@metamask/providers'

export async function Test() {
  const script = document.createElement('script')
  script.innerHTML = `
  console.log(123123123)
  `
  document.body.appendChild(script)
  // let provider: any
  // try {
  //   const currentMetaMaskId = 'mcohilncbfahbmgdjkbpemcciiolgcge'
  //   const metamaskPort = chrome.runtime.connect(currentMetaMaskId)
  //   const pluginStream = new PortStream(metamaskPort)
  //   provider = new MetaMaskInpageProvider(pluginStream)
  // } catch (e) {
  //   console.dir(`Metamask connect error `, e)
  //   // throw e
  // }
  // const client = createWalletClient({
  //   chain: mainnet,
  //   transport: custom(provider),
  // })

  // const [address] = await client.getAddresses()
  // console.log(address)
}
