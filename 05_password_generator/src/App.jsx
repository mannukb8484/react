import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null) //we dont want to give any default so set it to null

  const passwordGenerator =
    useCallback(
      () => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()";
        for (let i = 1; i <= length; i++) {
          let random = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(random);
          setPassword(pass);
        }
      }
      ,
      [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length - 1) //if use length-1 all select, is end not exclusive??
    window.navigator.clipboard.writeText(password);
  }, [password])
  useEffect(() => { passwordGenerator() }, [charAllowed, numberAllowed, length])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-6'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink'
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <label>Length:{length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
          </div>
          <div className='flex items-center gap-x-1'>
            <label htmlFor='numberInput'>Number:</label>
            <input
              type="checkbox"
              defaultChecked={false}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
          </div>

          <div className='flex items-center gap-x-1'>
            <label htmlFor='charInput'>Character:</label>
            <input
              type="checkbox"
              defaultChecked={false}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
