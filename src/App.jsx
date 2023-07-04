import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
    <div id='top' className='font-raleway'>
      <Header />
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
