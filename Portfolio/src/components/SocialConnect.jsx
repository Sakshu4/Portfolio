import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/Sakshu4', color: 'bg-[#1A1618] hover:bg-[#2C2529] text-[#FFF7EB] border border-[#A2AB73]/30' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com/in/sakshipawar7', color: 'bg-[#0077B5] hover:bg-[#005E93] text-white' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#', color: 'bg-[#1DA1F2] hover:bg-[#1A91DA] text-white' },
    { icon: <FaEnvelope />, name: 'Email', url: 'mailto:sakshipawar7444@gmail.com', color: 'bg-[#CC3A63] hover:bg-[#B02950] text-[#FFF7EB]' },
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
                className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold shadow-xl transition-all ${link.color}`}
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
        className="flex items-center gap-2 bg-[#CC3A63] hover:bg-[#B02950] text-[#FFF7EB] font-bold px-6 py-3.5 rounded-full shadow-2xl shadow-[#CC3A63]/35 transition-all border-2 border-[#FFF7EB]"
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
