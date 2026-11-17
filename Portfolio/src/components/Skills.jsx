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
    <section id="skills" className="py-20 relative overflow-hidden bg-[#FFF7EB]">
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#1A1618] text-center mb-16 tracking-tight"
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
                  className="skill-card p-6 flex flex-col items-center justify-center aspect-square cursor-pointer bg-[#F9F0E0] border border-[#A2AB73]/30 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#CC3A63]/50 transition-all duration-300"
                >
                  <skill.icon 
                    className="text-4xl md:text-5xl mb-3 drop-shadow-sm" 
                    style={{ color: skill.color }}
                  />
                  <span className="text-[#1A1618] font-semibold text-xs text-center">{skill.name}</span>
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
            <div className="bg-[#F9F0E0] border border-[#A2AB73]/40 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center shadow-md">
              <span className="text-6xl md:text-7xl font-extrabold text-[#CC3A63] mb-2 tracking-tight">2+</span>
              <span className="text-[#1A1618] text-lg font-bold">Years</span>
              <span className="text-[#483F44] text-base font-medium">Learning &</span>
              <span className="text-[#483F44] text-base font-medium mb-6">Building</span>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="btn-berry text-xs font-bold px-6 py-3 rounded-full shadow-lg shadow-[#CC3A63]/25 flex items-center gap-2"
              >
                DOWNLOAD MY CV
                <FaDownload className="text-xs" />
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
          className="skills-strip mt-12 p-8 bg-[#F9F0E0] border border-[#A2AB73]/35 rounded-3xl shadow-sm"
        >
          <h3 className="text-center text-[#1A1618] text-xs font-bold tracking-widest mb-8 uppercase">
            ADDITIONAL SKILLS & TOOLS
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
                  className="text-3xl md:text-4xl transition-all duration-300 drop-shadow-sm" 
                  style={{ color: skill.color }}
                />
                <span className="text-[#483F44] font-medium text-xs hidden md:block">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
