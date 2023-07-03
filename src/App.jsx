import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SubNavbar from './components/SubNavbar'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='font-raleway'>
      <Header />
      <Navbar />
      <SubNavbar />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
