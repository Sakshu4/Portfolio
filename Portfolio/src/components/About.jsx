import { motion } from 'framer-motion'

const About = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-navy-800">
      {/* Background decorations */}
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Center Content */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12"
          >
            WHO AM I <span className="text-lime-400">?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8 text-white/60 text-sm md:text-base leading-loose mb-12"
          >
            <p>
              I am a passionate Software Developer specializing in React.js and modern web technologies. Currently pursuing my B.E. in Computer Engineering at PDEA's College of Engineering, Pune, with an SGPA of 8.43.
            </p>
            <p>
              As the Women In-Tech Lead at GDG On Campus PDEACOE, I actively contribute to fostering a vibrant tech community and empowering women in technology.
            </p>
            <p>
              I love building intuitive user interfaces with clean code and exploring the intersection of technology and design. When I'm not coding, you can find me exploring new design trends or contributing to open-source projects!
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
            className="bg-transparent border-2 border-white/30 hover:border-lime-400 text-white hover:text-lime-400 font-medium px-8 py-3 rounded-full text-sm tracking-wide transition-all duration-300"
          >
            SHOW MY PROJECTS
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default About
