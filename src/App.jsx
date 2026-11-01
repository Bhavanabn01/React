import { useState } from 'react'
import './App.css'

function Greeting(props) {
  return <h2>Welcome to my React app, {props.name}!</h2>
}

function Counter(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function App() {
  return (
    <>
      <h1>Hello, React!</h1>
      <Greeting name="Bhavana" />
      <Counter />
    </>
  )
}

export default App
