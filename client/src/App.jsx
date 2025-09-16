import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  return (
   <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/profile' element={<Profile></Profile>}/>
      <Route path='/chat' element={<Chat></Chat>}/>

      
    </Routes>
   </div>
  )
}

export default App