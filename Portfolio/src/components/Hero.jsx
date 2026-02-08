import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import profileImg from '../assets/profile.png'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-bg dots-pattern min-h-screen relative overflow-hidden pt-28 pb-20">
      {/* Glow Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute top-40 right-10 w-[250px] h-[250px] bg-blue-500/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">I'm </span>
            <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400">Sakshi Pawar</span>
          </h1>
          <div className="inline-block">
            <span className="bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full text-white text-xl md:text-2xl font-medium border border-white/10">
              Software Developer
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Left Card - Client Review */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-0 lg:left-10 xl:left-20 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
          >
            <div className="review-card p-5 w-64 float-animation">
              <p className="text-sm text-white/70 mb-1">Experience</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-semibold text-white">GDG On Campus</span>
                <span className="text-lime-400 text-sm font-semibold">Lead</span>
                <FaStar className="text-lime-400 text-sm" />
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Women In-Tech Lead at<br />
                Google Developers Group<br />
                PDEACOE, Pune
              </p>
            </div>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Profile Image - No container, transparent background */}
            <div className="relative">
              <img 
                src={profileImg} 
                alt="Sakshi Pawar" 
                className="w-[280px] h-[380px] md:w-[350px] md:h-[470px] lg:w-[420px] lg:h-[560px] object-cover object-top"
              />
              
              {/* CTA Button - Positioned at bottom of image */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-lime-400 hover:bg-lime-300 text-navy-900 font-semibold px-8 py-3 rounded-full text-sm tracking-wide transition-all duration-300 shadow-lg shadow-lime-400/20"
              >
                MY PROJECTS
              </motion.button>
            </div>
          </motion.div>

          {/* Right Card - Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-0 lg:right-10 xl:right-20 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
          >
            <div className="expertise-card p-5 w-64 float-animation" style={{ animationDelay: '1s' }}>
              <h3 className="text-sm font-semibold text-white/90 mb-5 tracking-widest">MY EXPERTISE</h3>
              
              <div className="space-y-4">
                {/* React.js */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">REACT.JS</span>
                    <span className="text-white/50 text-xs">90%</span>
                  </div>
                  <div className="relative h-[2px] bg-white/10 rounded-full">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/60 to-white/40 rounded-full" style={{ width: '90%' }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" style={{ left: '90%', transform: 'translate(-50%, -50%)' }}></div>
                  </div>
                </div>
                
                {/* UI/UX */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">UI/UX</span>
                    <span className="text-white/50 text-xs">85%</span>
                  </div>
                  <div className="relative h-[2px] bg-white/10 rounded-full">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400/80 to-blue-500/60 rounded-full" style={{ width: '85%' }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" style={{ left: '85%', transform: 'translate(-50%, -50%)' }}></div>
                  </div>
                </div>
                
                {/* Frontend */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">FRONTEND</span>
                    <span className="text-white/50 text-xs">92%</span>
                  </div>
                  <div className="relative h-[2px] bg-white/10 rounded-full">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-lime-400/80 to-lime-500/60 rounded-full" style={{ width: '92%' }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-lime-400 rounded-full" style={{ left: '92%', transform: 'translate(-50%, -50%)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Cards - Show below image on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 lg:hidden">
          {/* Mobile Review Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="review-card p-4 w-full sm:w-64"
          >
            <p className="text-sm text-white/70 mb-1">Experience</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-semibold text-white">GDG On Campus</span>
              <span className="text-lime-400 text-sm font-semibold">Lead</span>
              <FaStar className="text-lime-400 text-sm" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Women In-Tech Lead at Google Developers Group PDEACOE, Pune
            </p>
          </motion.div>

          {/* Mobile Expertise Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="expertise-card p-4 w-full sm:w-64"
          >
            <h3 className="text-sm font-semibold text-white/90 mb-4 tracking-widest">MY EXPERTISE</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">REACT.JS</span>
                  <span className="text-white/50 text-xs">90%</span>
                </div>
                <div className="relative h-[2px] bg-white/10 rounded-full">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-white/60 to-white/40 rounded-full" style={{ width: '90%' }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" style={{ left: '90%', transform: 'translate(-50%, -50%)' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">UI/UX</span>
                  <span className="text-white/50 text-xs">85%</span>
                </div>
                <div className="relative h-[2px] bg-white/10 rounded-full">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400/80 to-blue-500/60 rounded-full" style={{ width: '85%' }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" style={{ left: '85%', transform: 'translate(-50%, -50%)' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70 text-sm">FRONTEND</span>
                  <span className="text-white/50 text-xs">92%</span>
                </div>
                <div className="relative h-[2px] bg-white/10 rounded-full">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-lime-400/80 to-lime-500/60 rounded-full" style={{ width: '92%' }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-lime-400 rounded-full" style={{ left: '92%', transform: 'translate(-50%, -50%)' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
