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
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <FaCode className="text-white text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-wider">SAKSHI</span>
              <span className="text-white/40 text-[10px] tracking-widest">PAWAR</span>
            </div>
          </div>

          {/* Center Links */}
          <div className={`nav-links ${isOpen ? 'active' : ''} hidden md:flex items-center gap-10`}>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              ABOUT ME
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              PROJECTS
            </button>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-navy-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300"
          >
            CONTACT
            <div className="w-5 h-5 rounded-full bg-navy-900 flex items-center justify-center">
              <HiArrowUpRight className="text-lime-400 text-xs" />
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
            className="md:hidden glass-card mt-2 p-4"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/80 text-sm font-medium tracking-wide text-left hover:text-lime-400 transition-colors"
              >
                ABOUT ME
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-white/80 text-sm font-medium tracking-wide text-left hover:text-lime-400 transition-colors"
              >
                SKILLS
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white/80 text-sm font-medium tracking-wide text-left hover:text-lime-400 transition-colors"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-lime text-sm w-full justify-center"
              >
                CONTACT
                <HiOutlineMail className="text-lg" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
