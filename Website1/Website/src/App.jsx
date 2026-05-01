import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Contact from './Website/Pages/Contact'


function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
    
  )
  
}

export default App