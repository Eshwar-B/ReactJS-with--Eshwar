import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
{

  const userName = " ESHWAR";
//  let count = 5;

  let [count , setCounter] = useState(5);

  const addValue = () => { 
    console.log("Value Added ",count);
    // count = count +1;

    setCounter(count + 1);
  }

  const removeValue = () => {
    console.log("Value Removed",count);
    // count = count -1;

    setCounter(count-1);
  }

  

  return ( 
      <>
            <h1> Hello {userName}! Welcome to React JS</h1> 
            <h2> Count value : {count} </h2>

            <button  onClick={addValue} > Add Count | Count : {count}</button>
            <br />
            <button onClick={removeValue}>Remove Count | Count : {count}</button>

            <footer> Count : {count}</footer>
      </>      
         );

  
}

export default App;