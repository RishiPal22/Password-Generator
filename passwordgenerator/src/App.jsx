import { useState, useRef, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    var pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "123456789"
    if (characterAllowed) str += "!@#$%^&*(){}|><?"

    for (let i = 0; i < length; i++) {
      let cha = Math.floor(Math.random() * str.length)
      pass = pass + str[cha]
    }
    setpassword(pass)

  }, [length, setpassword, numberAllowed, characterAllowed])

  useEffect(() => {
    passwordGenerator()

  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={password}
            readOnly
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6} max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            ></input>
          </div>
          <label>length: {length}</label>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }}
            ></input>
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            id='characterInput'
            defaultChecked = {characterAllowed}
            onChange={() => {
              setcharacterAllowed((prev) => !prev)
            }}

            ></input>
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>

      </div>
    </>

  )
}

export default App;
