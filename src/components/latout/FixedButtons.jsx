import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, X } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FixedButtons() {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/919999999999",
      color: "from-green-400 to-emerald-500",
      hoverColor: "hover:from-green-500 hover:to-emerald-600",
      iconColor: "text-white",
      delay: 0.1
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      iconColor: "text-white",
      delay: 0.15
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com",
      color: "from-blue-600 to-indigo-600",
      hoverColor: "hover:from-blue-700 hover:to-indigo-700",
      iconColor: "text-white",
      delay: 0.2
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com",
      color: "bg-primary ",
      hoverColor: "hover:from-pink-600 hover:bg-primary",
      iconColor: "text-white",
      delay: 0.25
    }
  ];

  return (
    <>
      {/* Backdrop blur overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0   z-[998]"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-3">
        {/* Social Icons Popup */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3 "
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                        delay: social.delay
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: 50, 
                      scale: 0.5,
                      transition: { duration: 0.2, delay: (socialLinks.length - index) * 0.05 }
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${social.color} ${social.hoverColor} shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 group overflow-hidden`}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    
                    <Icon className={`${social.iconColor} relative z-10 `} size={20} />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-br from-white/30 to-transparent" />
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-12 w-12 rounded-full bg-gradient-to-br from-primary  to-secondary text-white flex items-center justify-center shadow-2xl overflow-hidden group"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Rotating border effect */}
          <div className="absolute inset-0 rounded-2xl opacity-75">
            <div className="absolute inset-[-2px]  bg-gradient-to-r from-primary  to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 rounded-2xl"
          >
            {open ? <X size={24} /> : <Share2 size={24} />}
          </motion.div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          {/* Ripple effect on click */}
          {open && (
            <motion.div
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl bg-white"
            />
          )}
        </motion.button>
      </div>
    </>
  );
}