import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const updateCounter = (type) => {
    if (type === 'add') {
      setCounter((prev) => (prev < 20 ? prev + 1 : prev))
    }
    else {
      setCounter((prev) => (prev > 0 ? prev - 1 : prev))
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={() => updateCounter('add')}>add values</button >
      <br />
      <button onClick={() => updateCounter('subtract')}>remove values</button >
    </>
  )
}
export default App
