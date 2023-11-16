import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './Home';
import Logout from './components/Logout';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>
    <Toaster/>
      <BrowserRouter>
      
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/logout' element={<Logout />} />
      </Routes>
      </BrowserRouter>
      
    
    

    </>
  )
}

export default App