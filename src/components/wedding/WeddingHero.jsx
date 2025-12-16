import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const WeddingHero = () => {
 

  return (
    <div className="relative min-h-full overflow-hidden bg-linear-to-br h-[45vh] lg:h-[85vh] "
    >
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
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
        }}
      ></div>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-10">
        <img 
          src="https://images.unsplash.com/photo-1618566864264-fb013f791da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZyUyMGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Zumba Dancing"
          className="w-full h-[550px] object-cover  opacity-20 mix-blend-overlay"
        />
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-linear-to-br from-pink-200 to-rose-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-linear-to-br from-amber-200 to-orange-200 rounded-full blur-3xl"
        />
      </div>

      {/* Decorative Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute text-rose-300"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          >
            <Heart size={16 + i * 2} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Silhouette SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl"
      >
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <defs>
            <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f6466c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f28b00" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Bride silhouette */}
          <path
            d="M 150 280 Q 150 220 160 200 Q 165 180 170 170 Q 175 160 175 150 Q 175 130 165 120 Q 155 110 155 100 Q 155 85 165 75 Q 175 65 185 65 Q 195 65 205 75 Q 215 85 215 100 Q 215 110 205 120 Q 195 130 195 150 Q 195 160 200 170 Q 205 180 210 200 Q 220 220 220 280 Z"
            fill="url(#silhouetteGradient)"
          />
          {/* Groom silhouette */}
          <path
            d="M 230 280 Q 230 230 235 210 Q 238 190 240 180 Q 242 170 242 160 Q 242 140 235 130 Q 228 120 228 110 Q 228 95 235 85 Q 242 75 250 75 Q 258 75 265 85 Q 272 95 272 110 Q 272 120 265 130 Q 258 140 258 160 Q 258 170 260 180 Q 262 190 265 210 Q 270 230 270 280 Z"
            fill="url(#silhouetteGradient)"
          />
          {/* Heart between them */}
          <motion.path
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            d="M 200 140 Q 195 135 195 128 Q 195 120 200 115 Q 205 110 210 110 Q 215 110 218 115 Q 220 118 220 120 Q 220 118 222 115 Q 225 110 230 110 Q 235 110 240 115 Q 245 120 245 128 Q 245 135 240 140 L 220 155 Z"
            fill="#f6466c"
            style={{ transformOrigin: '220px 130px' }}
          />
        </svg>
      </motion.div>

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
                 Dance Into Forever
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
                 Dance • Cupple • Love
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

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 120"
    className="w-full h-auto block -mb-px"
    preserveAspectRatio="none"
  >
    <path
      d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      style={{ fill: "var(--color-elegantLight)" }}
    />
  </svg>
</div>
    </div>
  );
};

export default WeddingHero;