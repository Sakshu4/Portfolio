import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'VANRAKSHA',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Portfolio',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'GDG Event',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=600&fit=crop',
    }
  ]

  return (
    <section id="projects" className="py-32 min-h-[700px] relative overflow-hidden bg-navy-800">
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-[45%] relative z-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-12">
              THE WORKS<br />
              CLOSEST TO<br />
              MY HEART
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 hover:bg-lime-300 text-navy-900 font-semibold px-10 py-4 w-[130%] ml-20 mt-20 rounded-full text-sm tracking-wider w-6/12 transition-all duration-300 relative lg:translate-x-16"
            >
              SHOW MY PROJECTS
            </motion.button>
          </motion.div>

          {/* Right Side - Project Image Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-[55%] flex gap-4 justify-center lg:justify-end items-stretch lg:pr-4"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-xl h-[480px] md:h-[560px] ${
                  index === 0 
                    ? 'w-52 md:w-60' 
                    : index === 1 
                    ? 'w-32 md:w-36' 
                    : 'w-24 md:w-28'
                }`}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Project Title - Only on first card */}
                {index === 0 && (
                  <div className="absolute bottom-6 left-4 right-4">
                    <h3 className="text-white font-semibold text-base md:text-lg">
                      {project.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
