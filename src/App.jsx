
import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import AllItems from './components/AllItems';
import ProductDetail from './components/product'



function App() {
  
  return (

   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="bg-white py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
                    <p className="text-lg text-gray-600">Swap. Save. Sustain.</p>
                  </div>
                </div>
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/all-items" element={<AllItems />} />
         <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
   
   
   
     
  )
}

export default App
