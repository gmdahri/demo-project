import { useState } from 'react'
import UserList from './page/users'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>User Management</h1>
    <UserList />
    </>
  )
}

export default App
