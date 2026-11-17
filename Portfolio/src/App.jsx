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
    <div className="min-h-screen bg-[#FFF7EB] text-[#1A1618] font-poppins selection:bg-[#CC3A63] selection:text-[#FFF7EB]">
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
