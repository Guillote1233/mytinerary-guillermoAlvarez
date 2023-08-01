import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Landing from './components/landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Landing/>
    </div>
  )
}

export default App
