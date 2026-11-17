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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#CC3A63]/15 via-[#A2AB73]/12 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#CC3A63]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-[250px] h-[250px] bg-[#A2AB73]/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-[#1A1618]">I'm </span>
            <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CC3A63] via-[#B02950] to-[#A2AB73]">Sakshi Pawar</span>
          </h1>
          <div className="inline-block">
            <span className="bg-[#F9F0E0] text-[#483F44] px-6 py-1.5 rounded-full text-xs md:text-xl font-semibold border border-[#A2AB73]/40 shadow-sm">
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
              <p className="text-xs uppercase tracking-wider text-[#82787E] font-semibold mb-1">Experience</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-[#1A1618]">GDG On Campus</span>
                <span className="text-[#CC3A63] text-sm font-bold">Lead</span>
                <FaStar className="text-[#CC3A63] text-sm" />
              </div>
              <p className="text-sm text-[#5C5257] leading-relaxed">
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
                className="w-[280px] h-[380px] md:w-[350px] md:h-[470px] lg:w-[420px] lg:h-[560px] object-cover object-top drop-shadow-2xl"
              />
              
              {/* CTA Button - Positioned at bottom of image */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#CC3A63] hover:bg-[#B02950] text-[#FFF7EB] font-bold px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#CC3A63]/30"
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
              <h3 className="text-xs font-bold text-[#1A1618] mb-5 tracking-widest uppercase">MY EXPERTISE</h3>
              
              <div className="space-y-4">
                {/* React.js */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#483F44] text-xs font-semibold">REACT.JS</span>
                    <span className="text-[#82787E] text-xs font-bold">90%</span>
                  </div>
                  <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#CC3A63] to-[#DE4D75] rounded-full" style={{ width: '90%' }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#CC3A63] rounded-full shadow-sm" style={{ left: '90%', transform: 'translate(-50%, -50%)' }}></div>
                  </div>
                </div>
                
                {/* Java */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#483F44] text-xs font-semibold">JAVA</span>
                    <span className="text-[#82787E] text-xs font-bold">95%</span>
                  </div>
                  <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#A2AB73] to-[#8B945D] rounded-full" style={{ width: '95%' }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#A2AB73] rounded-full shadow-sm" style={{ left: '95%', transform: 'translate(-50%, -50%)' }}></div>
                  </div>
                </div>
                
                {/* SQL */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#483F44] text-xs font-semibold">SQL</span>
                    <span className="text-[#82787E] text-xs font-bold">92%</span>
                  </div>
                  <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73] rounded-full" style={{ width: '92%' }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#CC3A63] rounded-full shadow-sm" style={{ left: '92%', transform: 'translate(-50%, -50%)' }}></div>
                  </div>
                </div>
                
                {/* Spring Boot */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#483F44] text-xs font-semibold">SPRING BOOT</span>
                    <span className="text-[#82787E] text-xs font-bold">88%</span>
                  </div>
                  <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#A2AB73] to-[#CC3A63] rounded-full" style={{ width: '88%' }}></div>
                    <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#CC3A63] rounded-full shadow-sm" style={{ left: '88%', transform: 'translate(-50%, -50%)' }}></div>
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
            <p className="text-xs uppercase tracking-wider text-[#82787E] font-semibold mb-1">Experience</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base font-bold text-[#1A1618]">GDG On Campus</span>
              <span className="text-[#CC3A63] text-sm font-bold">Lead</span>
              <FaStar className="text-[#CC3A63] text-sm" />
            </div>
            <p className="text-sm text-[#5C5257] leading-relaxed">
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
            <h3 className="text-xs font-bold text-[#1A1618] mb-4 tracking-widest uppercase">MY EXPERTISE</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#483F44] text-xs font-semibold">REACT.JS</span>
                  <span className="text-[#82787E] text-xs font-bold">90%</span>
                </div>
                <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#CC3A63] to-[#DE4D75] rounded-full" style={{ width: '90%' }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#CC3A63] rounded-full" style={{ left: '90%', transform: 'translate(-50%, -50%)' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#483F44] text-xs font-semibold">JAVA</span>
                  <span className="text-[#82787E] text-xs font-bold">95%</span>
                </div>
                <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#A2AB73] to-[#8B945D] rounded-full" style={{ width: '95%' }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#A2AB73] rounded-full" style={{ left: '95%', transform: 'translate(-50%, -50%)' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#483F44] text-xs font-semibold">SQL</span>
                  <span className="text-[#82787E] text-xs font-bold">92%</span>
                </div>
                <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#CC3A63] to-[#A2AB73] rounded-full" style={{ width: '92%' }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#CC3A63] rounded-full" style={{ left: '92%', transform: 'translate(-50%, -50%)' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#483F44] text-xs font-semibold">SPRING BOOT</span>
                  <span className="text-[#82787E] text-xs font-bold">88%</span>
                </div>
                <div className="relative h-[3px] bg-[#A2AB73]/20 rounded-full">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#A2AB73] to-[#CC3A63] rounded-full" style={{ width: '88%' }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#CC3A63] rounded-full" style={{ left: '88%', transform: 'translate(-50%, -50%)' }}></div>
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
