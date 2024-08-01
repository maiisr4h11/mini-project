import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import About from './About/About'
import ContactUs from './ContactUs/ContactUs'
import { useState } from 'react'
import ToDo from './ToDo/ToDo'


function App() {

  return (
    <div>
    
       <Router>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/ContactUs' element={<ContactUs/>}/>
         <Route path='/ToDo' element={<ToDo/>}/>
       </Routes>
       <Footer/>
      </Router>
      
    </div>
  )

}

export default App
