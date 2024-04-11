import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
   const name = 'sachin'
   const obj = {
    username: 'sachin',
    password: "123"
   }
   const arrayTest = ['shaktiman','hulk','natwarlal']
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card name ={name}  btnText = 'click me'/>
      <Card name ='nitin' btnText='visit me' />
    </>
  )
} 

export default App
