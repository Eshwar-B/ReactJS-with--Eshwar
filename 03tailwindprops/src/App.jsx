import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const userDetails = {
    firstName: "Eshwar",
    domain: "Full Stack Developer"
  };
  const channel = "Welcome to React";

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>TailWind Test</h1>
      
      {/* Pass channel and userDetails as props to the Card component */}
      <Card channel={channel} someObj={userDetails} />
    </>
  )
}

export default App;
