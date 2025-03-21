import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/todos'

function App() {
  return (

    <>

    <h2 className='text-center bg-pink-600 p-5 text-2xl text-bold'>Manage you Todos</h2>
    <AddTodo />
    <Todos />
    </>
    
  )
}

export default App
