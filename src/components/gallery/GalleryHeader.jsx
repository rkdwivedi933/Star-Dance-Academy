import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function GalleryHeader() {
  return (
    <div 
      className="relative w-full py-10 md:py-10 lg:py-26 px-6 overflow-hidden "
      style={{
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
      }}
    >
      <style>{`
        @theme {
          --color-primary: #f6466c;
          --color-secondary: #f28b00;
          --color-elegantDark: #1a1a1a;
          --color-elegantLight: #faf7f4;
        }
      `}</style>
 <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            duration: 0.8 
          }}
          className="inline-block mb-8"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto border-2 border-white/30">
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          Our Dance Gallery
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="h-1 w-32 md:w-40 bg-white/80 rounded-full mx-auto mb-6"
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light tracking-wide"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
          }}
        >
          Moments of Passion, Energy & Art
        </motion.p>

        {/* Additional Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 md:w-16 bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white/70" />
          <div className="h-px w-12 md:w-16 bg-white/50" />
        </motion.div>
      </div>

      {/* Bottom Wave Effect */}
     <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
  <svg 
    viewBox="0 0 1440 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full block translate-y-px"
    preserveAspectRatio="none"
  >
    <path 
      d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z"
      fill="var(--color-elegantLight)"
    />
  </svg>
</div>

    </div>
  );
}