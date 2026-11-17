import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { FaCode } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#FFF7EB]/85 backdrop-blur-md border-b border-[#A2AB73]/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#CC3A63] to-[#A2AB73] flex items-center justify-center shadow-md shadow-[#CC3A63]/25">
              <FaCode className="text-[#FFF7EB] text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#1A1618] font-bold text-sm tracking-wider">SAKSHI</span>
              <span className="text-[#82787E] text-[10px] tracking-widest font-semibold">PAWAR</span>
            </div>
          </div>

          {/* Center Links */}
          <div className={`nav-links ${isOpen ? 'active' : ''} hidden md:flex items-center gap-10`}>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-[#483F44] hover:text-[#CC3A63] text-sm font-semibold tracking-wide transition-colors"
            >
              ABOUT ME
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link text-[#483F44] hover:text-[#CC3A63] text-sm font-semibold tracking-wide transition-colors"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link text-[#483F44] hover:text-[#CC3A63] text-sm font-semibold tracking-wide transition-colors"
            >
              PROJECTS
            </button>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center gap-2 bg-[#CC3A63] hover:bg-[#B02950] text-[#FFF7EB] font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-md shadow-[#CC3A63]/20 hover:shadow-lg hover:shadow-[#CC3A63]/30"
          >
            CONTACT
            <div className="w-5 h-5 rounded-full bg-[#FFF7EB] flex items-center justify-center">
              <HiArrowUpRight className="text-[#CC3A63] text-xs font-bold" />
            </div>
          </button>

          {/* Hamburger Menu */}
          <div
            className="hamburger md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={isOpen ? 'rotate-45 translate-y-2' : ''}></span>
            <span className={isOpen ? 'opacity-0' : ''}></span>
            <span className={isOpen ? '-rotate-45 -translate-y-2' : ''}></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#F9F0E0] border border-[#A2AB73]/30 rounded-2xl shadow-xl mt-3 p-5"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#1A1618] text-sm font-semibold tracking-wide text-left hover:text-[#CC3A63] transition-colors"
              >
                ABOUT ME
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-[#1A1618] text-sm font-semibold tracking-wide text-left hover:text-[#CC3A63] transition-colors"
              >
                SKILLS
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-[#1A1618] text-sm font-semibold tracking-wide text-left hover:text-[#CC3A63] transition-colors"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-berry text-sm w-full justify-center text-center mt-2"
              >
                CONTACT
                <HiArrowUpRight className="text-base" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
