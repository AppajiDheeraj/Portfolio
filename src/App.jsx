import { useState, useEffect } from 'react';
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Motto from './components/Motto.jsx'
import Preloader from './components/Preloader.jsx'
import Projects from './components/Projects.jsx'
import { motion, AnimatePresence } from 'framer-motion'; // 👈 Import AnimatePresence
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollingTape from './components/ScrollingTape.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait"> {/* 👈 AnimatePresence enables exit animations */}
        {loading ? (
          <Preloader key="preloader" onFinish={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, scale: 0.997 }}
            animate={{ opacity: 1, scale: 1 }}
            
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-black flex flex-col"
          >
            {/* <Logo /> */}
            {/* <ScrollRuler /> */}
            <Hero />
            <Navbar />
            <section id="about" className="pt-20">
              <AboutMe />
            </section>
            <section id="projects" className="pt-20">
              <Projects />
            </section>
            <section>
              <Motto />
            </section>
            <ScrollingTape />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App;
