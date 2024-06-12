import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import About from './components/About'
import BestSeller from './components/BestSeller'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductSection />
      <About />
      <BestSeller />
      <Footer />
    </div>
  )
}
