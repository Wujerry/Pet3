import './App.css'
import { EvmProvider } from './common/EvmProvider'
import Header from './components/Header'
import Mint from './components/Mint'

function App() {
  const content = (
    <div className='w-full'>
      <Header></Header>
      <main>
        <Mint></Mint>
      </main>
    </div>
  )
  return <EvmProvider>{content}</EvmProvider>
}

export default App
