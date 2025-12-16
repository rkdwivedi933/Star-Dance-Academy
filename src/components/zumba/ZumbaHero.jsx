import React from 'react';
import { motion } from 'framer-motion';

const ZumbaHero = () => {
  // Floating bubbles animation variants
 

  return (
   <section className="relative w-full overflow-hidden h-[45vh] lg:h-[85vh]">
  <style>{`
    :root {
      --color-primary: #f6466c;
      --color-secondary: #f28b00;
      --color-elegantDark: #1a1a1a;
      --color-elegantLight: #faf7f4;
    }
  `}</style>

      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0  "
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
        }}
      ></div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-10">
        <img 
          src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVtYmF8ZW58MHx8MHx8fDA%3D" 
          alt="Zumba Dancing"
          className="w-full h-[40vh] lg:h-[73vh] object-cover  opacity-20 mix-blend-overlay"
        />
      </div>

     

      

    

      

     

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Zumba Fitness
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '200px', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 mx-auto mb-6 rounded-full"
            style={{ background: 'rgba(255,255,255,0.8)' }}
          ></motion.div>

          {/* Subheading */}
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl text-white/95 font-light tracking-wide"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dance • Energy • Fitness
          </motion.p>

          {/* Additional Tagline */}
          <motion.p
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Move to the rhythm, feel the energy, transform your body
          </motion.p>

          {/* Pulsing Circle Accent */}
          <motion.div
            className="mt-8 w-3 h-3 mx-auto rounded-full bg-white"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>
      </div>

    
     <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 120"
    className="w-full h-auto block translate-y-px"
    preserveAspectRatio="none"
  >
    <path
      d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      fill="var(--color-elegantLight)"
    />
  </svg>
</div>


    </section>
  );
};

export default ZumbaHero;