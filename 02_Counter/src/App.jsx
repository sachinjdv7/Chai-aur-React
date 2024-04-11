import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
   
   const handleAddValue = () =>{
    if(counter === 20) return
    // setCounter(counter +1)
    setCounter((prevCount)=> prevCount + 1)
  }

  const handleRemoveValue = ()=>{
   if(counter === 0) return
    // setCounter(counter -1) 
    setCounter((prevCount)=> prevCount -1)
  }

  const handleAddRemoveValueChange = (delta) => {
    if (counter + delta >= 0 && counter + delta <= 20) {
      setCounter((prevCount) => prevCount + delta);
    }
  };

  return (
    <>
      <h3>counter value is :{counter}</h3>
      <button onClick={()=>handleAddRemoveValueChange(1)}>Add</button>
      <button onClick={()=>handleAddRemoveValueChange(-1)}>Remove</button>
      
    </>
  )
}

export default App
