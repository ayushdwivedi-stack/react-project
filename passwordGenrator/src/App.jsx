import { useState , useCallback ,useEffect } from 'react'
 
import './App.css'

function App() {
   const [length , setLength] = useState(8)
   const [numberAllowed , setNumberAllowed] = useState(false)
   const [characterAllowed , setCharacterAllowed] = useState(false)
   const [password , setPassword] = useState("")
   
   const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) str += "0123456789";
  if (characterAllowed) str += "!@#$%^&*()_+";

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, characterAllowed]);

useEffect(() => {
  passwordGenerator();
}, [passwordGenerator]);

  return (
  <>
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-5 text-orange-500 bg-gray-700">

        <h1 className="text-white text-center text-2xl font-bold mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
           className="outline-none w-full py-2 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
          />
        </div>

        <div className="flex flex-wrap gap-4 text-white justify-center">

          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>

        </div>

      </div>
    </div>
  </>
)
}

export default App
