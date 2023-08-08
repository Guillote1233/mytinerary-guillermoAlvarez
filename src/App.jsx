import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Landing from './components/landing'
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Footer/>
    </div>
  )
}

export default App
