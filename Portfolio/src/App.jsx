import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialConnect from './components/SocialConnect'

function App() {
  return (
    <div className="min-h-screen bg-navy-900 font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SocialConnect />
    </div>
  )
}

export default App
