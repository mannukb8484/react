import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    console.log("clicked", counter)
    setCounter(() => {
      if (counter >= 20) setCounter(20)
      else setCounter(counter + 1);
    });
  }
  const removeValue = () => {
    console.log("clicked", counter)
    setCounter(() => {
      if (counter <= 0) setCounter(0)
      else setCounter(counter - 1)
    });
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add values</button >
      <br />
      <button onClick={removeValue}>remove values</button >
    </>
  )
}
export default App
