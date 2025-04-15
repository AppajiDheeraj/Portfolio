import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Motto from './components/Motto.jsx'

function App() {

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Hero />
      <Navbar />
      <section id="about" className="pt-20">
        <AboutMe />
      </section>
      <section>
        <Motto />
      </section>
      <Footer />
    </div>
  )
}

export default App
