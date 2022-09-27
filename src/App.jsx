import { useState } from 'react'
import './Styles/App.css'
import NavBar from './components/NavBar/NavBar'
import CardClima from './components/CardClima/CardClima'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <CardClima />
    </div>
  )
}

export default App
