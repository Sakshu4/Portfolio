import { motion } from 'framer-motion'

const About = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#F9F0E0]">
      {/* Background decorations */}
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Center Content */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1618] mb-12 tracking-tight"
          >
            WHO AM I <span className="text-[#CC3A63]">?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-7 text-[#483F44] text-base md:text-lg leading-relaxed mb-12 font-normal"
          >
            <p>
              I am a passionate <span className="font-semibold text-[#1A1618]">Software Developer</span> specializing in React.js and modern web technologies. Currently pursuing my B.E. in Computer Engineering at PDEA's College of Engineering, Pune, with an SGPA of 8.43.
            </p>
            <p>
              As the <span className="font-semibold text-[#CC3A63]">Women In-Tech Lead</span> at GDG On Campus PDEACOE, I actively contribute to fostering a vibrant tech community and empowering women in technology.
            </p>
            <p>
              I love building intuitive user interfaces with clean architecture and exploring the intersection of modern systems and design. When I'm not coding, you can find me exploring new design trends or contributing to innovative open-source projects!
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="bg-transparent border-2 border-[#CC3A63] text-[#CC3A63] hover:bg-[#CC3A63] hover:text-[#FFF7EB] font-bold px-8 py-3.5 rounded-full text-sm tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#CC3A63]/25"
          >
            SHOW MY PROJECTS
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default About
