import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import aivoImg from '../assets/Aivo.png'
import vanrakshaImg from '../assets/Vanraksha.png'
import devFixImg from '../assets/Dev-fix.png'
import eComImg from '../assets/E-Com.png'
import sysDesImg from '../assets/Sys-Des.png'

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'AIVO',
      category: 'Final Year Project',
      techStack: 'MERN Stack, Python, Generative AI APIs, Prompt Engineering',
      description: 'Engineered a MERN-based AI visibility platform that evaluates website content and integrates generative AI APIs to produce structured, actionable optimization recommendations.',
      image: aivoImg,
      liveLink: 'https://aivo-rho.vercel.app/',
      githubLink: 'https://github.com/Samarth40/aivo'
    },
    {
      id: 2,
      title: 'VanRaksha',
      category: 'Hackathon Project',
      techStack: 'React.js, Node.js, Firebase, Aptos Blockchain',
      description: 'Developed a responsive full-stack tree-adoption platform using React.js, Node.js, and Firebase, integrating Aptos blockchain certificates and issuing over 150 NFTs. Team project for AISSMS College Hackathon.',
      image: vanrakshaImg,
      liveLink: 'https://tree-adoption.vercel.app/',
      githubLink: 'https://github.com/Samarth40/tree-adoption'
    },
    {
      id: 3,
      title: 'DevFix AI',
      category: 'AI & Developer Tool',
      techStack: 'React, Spring Boot, Google Gemini',
      description: 'AI-driven troubleshooting and system readiness scanner for developer environments built with React, Spring Boot, and Google Gemini.',
      image: devFixImg,
      liveLink: 'https://devfix-ai.vercel.app/',
      githubLink: 'https://github.com/Sakshu4/devfix-ai'
    },
    {
      id: 4,
      title: 'E-Commerce',
      category: 'Full Stack Web App',
      techStack: 'Spring Boot, React, MySQL',
      description: 'A full-stack E-Commerce platform built with Spring Boot and React, featuring secure payments, cart management, and product browsing.',
      image: eComImg,
      liveLink: '#',
      githubLink: 'https://github.com/Sakshu4/ecommerce-springboot-react'
    },
    {
      id: 5,
      title: 'System Design',
      category: 'System Architecture',
      techStack: 'React, Node.js, Distributed Systems',
      description: 'Interactive System Design Simulator for visualizing and architecting complex systems and distributed applications.',
      image: sysDesImg,
      liveLink: '#',
      githubLink: 'https://github.com/Sakshu4/system-design-simulator'
    }
  ]

  return (
    <section id="projects" className="py-32 min-h-[700px] relative overflow-hidden bg-[#F9F0E0]">
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1618] leading-tight mb-12 tracking-tight">
              THE WORKS<br />
              CLOSEST TO<br />
              MY HEART
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#CC3A63] hover:bg-[#B02950] text-[#FFF7EB] font-bold px-10 py-4 w-[130%] ml-20 mt-20 rounded-full text-sm tracking-wider w-6/12 transition-all duration-300 relative lg:translate-x-16 shadow-xl shadow-[#CC3A63]/30"
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
            className="lg:w-[55%] flex gap-3 md:gap-4 justify-center lg:justify-end items-stretch lg:pr-4"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setIsModalOpen(true)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-xl h-[480px] md:h-[560px] border border-[#A2AB73]/30 transition-all duration-300 ${
                  index === 0 
                    ? 'w-44 sm:w-48 md:w-56' 
                    : index === 1 
                    ? 'w-24 sm:w-28 md:w-32' 
                    : index === 2 
                    ? 'w-20 sm:w-24 md:w-28'
                    : index === 3
                    ? 'w-16 sm:w-20 md:w-24 hidden sm:block'
                    : 'w-16 sm:w-20 md:w-24 hidden md:block'
                }`}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay gradient - always visible at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1618]/90 via-[#1A1618]/25 to-transparent"></div>

                {/* Category badge on first card */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#CC3A63] text-[#FFF7EB] font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Hover overlay - slides up on hover */}
                <div className="absolute inset-0 bg-[#1A1618]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end pb-8 gap-3 px-3">
                  
                  {/* Project title */}
                  <p className="text-[#FFF7EB] font-bold text-sm md:text-base text-center leading-tight">
                    {project.title}
                  </p>

                  {/* GitHub Button */}
                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="View on GitHub"
                      className="flex items-center justify-center gap-1.5 bg-white/15 hover:bg-white/25 border border-white/30 text-[#FFF7EB] text-xs font-semibold px-3 py-2 rounded-full backdrop-blur-sm transition-all duration-300 w-full"
                    >
                      {/* GitHub SVG icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}

                  {/* Live Link Button */}
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="View Live"
                      className="flex items-center justify-center gap-1.5 bg-[#A2AB73] hover:bg-[#8B945D] text-[#1A1618] text-xs font-bold px-3 py-2 rounded-full transition-all duration-300 w-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live
                    </a>
                  )}
                </div>

                {/* Project Title - always visible on first card at bottom */}
                {index === 0 && (
                  <div className="absolute bottom-6 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-[#FFF7EB] font-bold text-base md:text-lg">
                      {project.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1618]/70 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFF7EB] rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[#A2AB73]/35 shadow-2xl text-[#1A1618]"
            >
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-[#FFF7EB]/95 backdrop-blur z-10 py-2 border-b border-[#A2AB73]/20">
                <h3 className="text-3xl font-extrabold text-[#1A1618]">Project Details</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#82787E] hover:text-[#1A1618] transition-colors bg-[#F9F0E0] p-2 rounded-full hover:bg-[#EFE2CC]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="bg-[#F9F0E0] rounded-2xl overflow-hidden border border-[#A2AB73]/25 shadow-sm hover:shadow-xl hover:border-[#CC3A63]/40 flex flex-col group transition-all duration-300">
                    <div className="h-56 overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F9F0E0] via-transparent to-transparent opacity-80"></div>
                      {project.category && (
                        <div className="absolute top-3 left-3 bg-[#FFF7EB]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#A2AB73]/30 shadow-sm">
                          <span className="text-[11px] font-bold text-[#CC3A63] uppercase tracking-wider">{project.category}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold text-[#1A1618] mb-1.5">{project.title}</h4>
                      {project.techStack && (
                        <p className="text-xs text-[#CC3A63] font-semibold mb-3">{project.techStack}</p>
                      )}
                      <p className="text-[#483F44] text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                      
                      <div className="flex gap-3 mt-auto">
                        {project.githubLink && project.githubLink !== '#' && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#1A1618] hover:bg-[#2C2529] text-[#FFF7EB] text-center py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                            GitHub
                          </a>
                        )}
                        {project.liveLink && project.liveLink !== '#' && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#CC3A63] hover:bg-[#B02950] text-[#FFF7EB] text-center py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#CC3A63]/25">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
