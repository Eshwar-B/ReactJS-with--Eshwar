import { useCallback, useState, useEffect } from 'react'



function App() {
  
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback( () => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRDSTUVWXYZabcdefghijklmonpqrstuvwxyz";

    if(numberAllowed) { str += "0123456789" }
    if(charAllowed) { str += "!@#$%^&*(){}[]~`" }

    for(let i = 1; i <=  length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);




   } , [length,numberAllowed,charAllowed,setPassword])
  

   useEffect(()=>{passwordGenerator()},[length,charAllowed,numberAllowed,passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-slate-600'> 

      <h1 className='text-white  text-center py-5'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 

              <input type="text" value={password}  className='outline-none w-full py-2 px-3 mb-5' placeholder='password' readOnly/>

              <button className='outline-none bg-blue-800 text-white px-3  py-2 h-10 shrink-0'
              
              
              
              >COPY</button>
        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'> 

            <input type="range"   min={5} max={50} value={length} className='cursor-pointer'  onChange={(e) => {setLength(e.target.value)}} />
              <label > length: {length}</label>
          </div>

          <input type="checkbox"  defaultChecked={numberAllowed} id="nummberInput" onChange={ () => {setNumberAllowed((prev) => !prev)}} />
          <label htmlFor="numberInput">Numbers</label>

          <input type="checkbox"  defaultChecked={charAllowed} id="nummberInput" onChange={ () => {setCharAllowed((prev) => !prev)}} />
          <label htmlFor="characterInput">Characters</label>

        </div>

    </div>
      
    </>
  )
}

export default App
