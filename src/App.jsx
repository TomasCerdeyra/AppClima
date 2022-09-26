import { useState } from 'react'
import './Styles/App.css'
import NavBar from './components/NavBar/NavBar'
import Form from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Form />
    </div>
  )
}

export default App
