import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-navy-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm flex items-center gap-1"
          >
            Made with <FaHeart className="text-red-500 text-xs" /> by Sakshi Pawar © {currentYear}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/sakshipawar7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-400 hover:text-navy-900 text-white/60 transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/sakshipawar7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-400 hover:text-navy-900 text-white/60 transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:sakshipawar7444@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-400 hover:text-navy-900 text-white/60 transition-all duration-300"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
