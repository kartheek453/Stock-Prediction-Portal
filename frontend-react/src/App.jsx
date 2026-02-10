import { useState } from 'react'
import './assets/css/style.css'
import Footer from './assets/css/components/Footer'
import Main from './assets/css/components/Main'
import Header from './assets/css/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Main />
      <Footer />
    </>
  )
}

export default App
