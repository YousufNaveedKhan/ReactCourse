import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentRForm from './components/StudentRForm'

function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);    
  }
return (
  <div>
    <h2>Enter Name</h2>

    <input type="text" value={name} onChange={handleChange} />

    <h3>Your Name: {name}</h3>

    <br /><br />

    <StudentRForm />
    
  </div>
)
}

export default App
