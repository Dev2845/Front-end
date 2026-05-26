import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Contact from './Website/Pages/Contact'
import Blogs from './Website/Pages/Blogs'
import BlogsDati from './Website/Pages/BlogsDati'
import Price from './Website/Pages/Price'
import PackageDtai from './Website/Pages/PackageDtai'
import Package from './Website/Pages/Package'
import NotFound from './Website/Pages/NotFound'
import Dashboard from './Admin/Apage/Dashboard'
import PackManage from './Admin/Apage/Packmanage'
import PackAdd from './Admin/Apage/PackAdd'
import Services from './Website/Pages/Services'
import Servicemana from './Admin/Apage/Servicemana'



function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/blogsdetails' element={<BlogsDati />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/price' element={<Price />} />
          <Route path='/PackageDetail' element={<PackageDtai />} />
          <Route path='/Package' element={<Package />}/>
          <Route path='/Services' element={<Services/>}/>

            <Route path='*' element={<NotFound />} />
            {/* Admin */}
            <Route path='/dash' element={<Dashboard />}/>
            <Route path='/packmange' element={<PackManage/>} />
          <Route path='/PackAdd' element={<PackAdd/>} />
          <Route path='/Servicemana' element={<Servicemana/>} />
          </Routes>
    
      
    </div>
    </BrowserRouter>
    
  )
  
}

export default App