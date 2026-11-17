import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-[#F9F0E0] border-t border-[#A2AB73]/25">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#796E74] text-sm flex items-center gap-1.5 font-medium"
          >
            Made with <FaHeart className="text-[#CC3A63] text-xs" /> by Sakshi Pawar © {currentYear}
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
              href="https://github.com/Sakshu4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#FFF7EB] border border-[#A2AB73]/30 flex items-center justify-center hover:bg-[#CC3A63] hover:text-[#FFF7EB] hover:border-[#CC3A63] text-[#483F44] transition-all duration-300 shadow-sm"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/sakshipawar7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#FFF7EB] border border-[#A2AB73]/30 flex items-center justify-center hover:bg-[#CC3A63] hover:text-[#FFF7EB] hover:border-[#CC3A63] text-[#483F44] transition-all duration-300 shadow-sm"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:sakshipawar7444@gmail.com"
              className="w-10 h-10 rounded-full bg-[#FFF7EB] border border-[#A2AB73]/30 flex items-center justify-center hover:bg-[#CC3A63] hover:text-[#FFF7EB] hover:border-[#CC3A63] text-[#483F44] transition-all duration-300 shadow-sm"
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
