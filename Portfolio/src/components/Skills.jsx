import { motion } from 'framer-motion'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDownload,
  FaFigma,
  FaDatabase,
  FaNodeJs,
  FaDocker
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiFirebase,
  SiAdobeillustrator,
  SiCanva,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiApachetomcat,
  SiSpring,
  SiSpringboot
} from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'

const Skills = () => {
  const mainSkills = [
    // Frontend
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaReact, name: 'React.js', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    // Backend
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiSpring, name: 'Servlets', color: '#6DB33F' },
    { icon: FaDatabase, name: 'JDBC', color: '#007396' },
    // Database & Tools
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: FaDocker, name: 'Docker', color: '#2496ED' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
  ]

  const additionalSkills = [
    { icon: FaFigma, name: 'Figma', color: '#F24E1E' },
    { icon: SiAdobeillustrator, name: 'Illustrator', color: '#FF9A00' },
    { icon: FaGithub, name: 'GitHub', color: '#ffffff' },
    { icon: SiCanva, name: 'Canva', color: '#00C4CC' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiApachetomcat, name: 'Apache Tomcat', color: '#F8DC75' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Sakshi_Pawar.pdf' // Vite serves public folder files at root
    link.download = 'Sakshi_Pawar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 dots-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          MY SKILLS
        </motion.h2>

        {/* Skills Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {mainSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="skill-card p-6 flex flex-col items-center justify-center aspect-square cursor-pointer"
                >
                  <skill.icon 
                    className="text-4xl md:text-5xl mb-3" 
                    style={{ color: skill.color }}
                  />
                  <span className="text-white/60 text-xs text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-72"
          >
            <div className="experience-card p-8 h-full flex flex-col items-center justify-center text-center">
              <span className="text-6xl md:text-7xl font-bold text-white mb-2">2+</span>
              <span className="text-white/80 text-lg font-medium">Years</span>
              <span className="text-white/80 text-lg font-medium">Learning &</span>
              <span className="text-white/80 text-lg font-medium mb-6">Building</span>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="btn-lime text-xs"
              >
                DOWNLOAD MY CV
                <FaDownload className="text-sm" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="skills-strip mt-12 p-8"
        >
          <h3 className="text-center text-white/80 text-sm font-semibold tracking-widest mb-8">
            ADDITIONAL SKILLS
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <skill.icon 
                  className="text-3xl md:text-4xl transition-all duration-300"
                  style={{ color: skill.color }}
                />
                <span className="text-white/40 text-xs hidden md:block">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
