// Navbar.jsx
import { useEffect, useState } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Menu, Phone, X } from 'lucide-react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
   
    
  ];

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div className='relative'>

    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-500
    ${scrolled
      ? "bg-black/90 backdrop-blur-xl shadow-lg"
      : "bg-transparent"
    }
  `}
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            onClick={() => handleLinkClick('/')}
            className="text-2xl md:text-3xl font-serif font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
          >
            Star Dance Academy
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1 ">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;

              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className={`group relative px-3  cursor-pointer xl:px-4 py-2 text-sm xl:text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}

                  {isActive ? (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-secondary"
                    />
                  ) : (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Enroll Now (Desktop) */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLinkClick('/enroll-now')}
            className="hidden lg:block px-6 py-2.5 cursor-pointer text-white font-semibold rounded-full bg-linear-to-r from-primary to-secondary shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Enroll Now
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
    {/* Mobile Sidebar */}
<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMenuOpen(false)}
        className="fixed inset-0 z-40"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="
          fixed top-0 right-0 bottom-0 w-72
          bg-linear-to-b from-primary via-primary to-secondary
          shadow-2xl z-50
          pt-16 px-5
          lg:hidden
          overflow-y-auto
          h-screen
        "
      >
        {/* Decorative Blobs */}
        <div className="absolute -top-24 -right-20 w-56 h-56 bg-white/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-black/10 blur-2xl rounded-full" />

        {/* Top Bar : Logo + Close */}
        <div className="absolute top-5 right-5 left-5 flex items-center justify-between z-20">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick("/")}
            className="flex items-center gap-2"
          >
            <img
              src="https://www.tfptechnologies.in/_next/static/media/logo2.2e00e4b8.png"   // <-- apna logo path
              alt="Logo"
              className="w-9 h-9 rounded-lg object-contain  p-1"
            />
           
          </button>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="
              p-2 rounded-lg
              bg-white/20 text-white
              hover:bg-white/30 transition-all
              shadow-md hover:scale-110
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4 relative z-10 mt-4">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <motion.button
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, type: "spring" }}
                whileHover={{ x: 8 }}
                className={`
                  relative px-5 py-3 rounded-xl text-left font-medium
                  border transition-all overflow-hidden
                  backdrop-blur-xl
                  ${
                    isActive
                      ? `
                        text-white border-secondary/40
                        bg-secondary/40 shadow-lg
                        before:absolute before:inset-0 before:rounded-xl
                        before:bg-linear-to-r before:from-white/20 before:to-transparent
                      `
                      : `
                        text-white/80 border-white/10 bg-white/10
                        hover:text-white hover:border-white/30
                      `
                  }
                `}
              >
                {link.name}
              </motion.button>
            );
          })}

          {/* Enroll Button */}
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.08 }}
            onClick={() => handleLinkClick("/enroll-now")}
            className="
              mt-12 px-6 py-3 rounded-full
              text-white font-semibold tracking-wide
              bg-linear-to-r from-primary to-secondary
              border border-white/30
              shadow-lg hover:shadow-xl
            "
          >
            Enroll Now
          </motion.button>

          {/* Contact Info */}
          <div className="mt-10 space-y-2 text-white/80 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={15} /> Satna, Madhya Pradesh
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} /> +91 7670-123456
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>


    </motion.nav>
    </div>
  );
};

export default Navbar;