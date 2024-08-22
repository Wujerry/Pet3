import './App.css'
import Header from './components/Header'
import Home from './components/home/Home'

function App() {
  return (
    <div className='w-full'>
      <Header></Header>
      <main>
        <Home address={'0x'}></Home>
      </main>
    </div>
  )
}

export default App
