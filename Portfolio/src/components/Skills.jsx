import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaJava,
  FaGitAlt,
  FaGithub,
  FaEnvelope,
  FaFigma,
  FaDatabase,
  FaNodeJs,
  FaDocker,
  FaPaperPlane,
  FaCopy,
  FaCheck
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

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [requestData, setRequestData] = useState({
    name: '',
    email: '',
    company: '',
    note: ''
  })
  const [copied, setCopied] = useState(false)

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Resume Request: ${requestData.name || 'Recruiter'}${requestData.company ? ` from ${requestData.company}` : ''}`)
    const body = encodeURIComponent(
      `Hi Sakshi,\n\nI visited your portfolio and would like to request a copy of your updated resume.\n\nRecruiter/Contact Details:\n- Name: ${requestData.name}\n- Email: ${requestData.email}\n- Company/Organization: ${requestData.company || 'N/A'}\n- Message: ${requestData.note || 'Looking forward to reviewing your resume.'}\n\nBest regards,\n${requestData.name}`
    )
    window.location.href = `mailto:sakshipawar7444@gmail.com?subject=${subject}&body=${body}`
    setIsResumeModalOpen(false)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sakshipawar7444@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
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
                onClick={() => setIsResumeModalOpen(true)}
                className="btn-berry text-xs font-bold px-6 py-3 rounded-full shadow-lg shadow-[#CC3A63]/25 flex items-center gap-2"
              >
                REQUEST MY CV
                <FaEnvelope className="text-xs" />
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

      {/* Resume Request Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1618]/70 backdrop-blur-md"
            onClick={() => setIsResumeModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFF7EB] rounded-3xl p-7 md:p-8 max-w-lg w-full border border-[#A2AB73]/35 shadow-2xl text-[#1A1618] relative"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#F9F0E0] px-3.5 py-1.5 rounded-full border border-[#A2AB73]/30 text-xs font-bold text-[#CC3A63] mb-3">
                    <FaEnvelope className="text-xs" />
                    <span>DIRECT INBOX REQUEST</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1A1618] tracking-tight">Request My Resume</h3>
                  <p className="text-xs text-[#645A60] mt-1">
                    Fill in your details to notify Sakshi directly and receive her updated CV via email.
                  </p>
                </div>
                <button 
                  onClick={() => setIsResumeModalOpen(false)}
                  className="text-[#82787E] hover:text-[#1A1618] transition-colors bg-[#F9F0E0] p-2 rounded-full hover:bg-[#EFE2CC]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1A1618] uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#CC3A63]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={requestData.name}
                    onChange={(e) => setRequestData({ ...requestData, name: e.target.value })}
                    className="w-full bg-[#F9F0E0] border border-[#A2AB73]/40 rounded-xl px-4 py-3 text-sm text-[#1A1618] placeholder-[#A49BA0] focus:outline-none focus:border-[#CC3A63] focus:ring-2 focus:ring-[#CC3A63]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1618] uppercase tracking-wider mb-1.5">
                    Your Work Email <span className="text-[#CC3A63]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={requestData.email}
                    onChange={(e) => setRequestData({ ...requestData, email: e.target.value })}
                    className="w-full bg-[#F9F0E0] border border-[#A2AB73]/40 rounded-xl px-4 py-3 text-sm text-[#1A1618] placeholder-[#A49BA0] focus:outline-none focus:border-[#CC3A63] focus:ring-2 focus:ring-[#CC3A63]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1618] uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Google, Startup, etc."
                    value={requestData.company}
                    onChange={(e) => setRequestData({ ...requestData, company: e.target.value })}
                    className="w-full bg-[#F9F0E0] border border-[#A2AB73]/40 rounded-xl px-4 py-3 text-sm text-[#1A1618] placeholder-[#A49BA0] focus:outline-none focus:border-[#CC3A63] focus:ring-2 focus:ring-[#CC3A63]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1A1618] uppercase tracking-wider mb-1.5">
                    Message / Opportunity Note
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. We have a Full Stack / Java Developer opening..."
                    value={requestData.note}
                    onChange={(e) => setRequestData({ ...requestData, note: e.target.value })}
                    className="w-full bg-[#F9F0E0] border border-[#A2AB73]/40 rounded-xl px-4 py-3 text-sm text-[#1A1618] placeholder-[#A49BA0] focus:outline-none focus:border-[#CC3A63] focus:ring-2 focus:ring-[#CC3A63]/20 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 bg-[#CC3A63] hover:bg-[#B02950] text-[#FFF7EB] font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-[#CC3A63]/25 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Send Request to Sakshi</span>
                  </motion.button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="bg-[#F9F0E0] hover:bg-[#EFE2CC] text-[#483F44] border border-[#A2AB73]/40 px-4 py-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-[#8B945D] text-sm" />
                        <span className="text-[#8B945D]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-xs" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Skills
