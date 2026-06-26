import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/Sakshu4', color: 'bg-navy-800 hover:bg-navy-700 border border-white/20' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#', color: 'bg-[#0077B5] hover:bg-[#005E93] border border-[#0077B5]' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#', color: 'bg-[#1DA1F2] hover:bg-[#1A91DA] border border-[#1DA1F2]' },
    { icon: <FaEnvelope />, name: 'Email', url: '#', color: 'bg-[#EA4335] hover:bg-[#D33426] border border-[#EA4335]' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-3 mb-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 px-5 py-3 rounded-full text-white text-sm font-semibold shadow-lg transition-all ${link.color}`}
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-navy-900 font-bold px-6 py-3.5 rounded-full shadow-2xl shadow-lime-400/30 transition-all border-2 border-transparent hover:border-white/50"
      >
        <span>CONNECT</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default SocialConnect;
