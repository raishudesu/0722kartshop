import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
    <div id='top' className='font-raleway'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<MainSection />}/>
          <Route path='/productpage' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
