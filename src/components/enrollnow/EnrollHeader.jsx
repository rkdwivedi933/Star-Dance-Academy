import React from 'react';
import { motion } from 'framer-motion';

export default function EnrollHeader() {
  return (
    <div className="min-h-full bg-linear-to-br from-rose-50 via-orange-50 to-pink-50">
      
      {/* Premium Page Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        
        {/* Gradient Background */}
        <div className="relative bg-linear-to-r from-primary via-secondary to-primary py-20 sm:py-24 lg:py-32">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
            
            {/* Animated Dots Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center"
            >
              {/* Decorative Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 sm:mb-8"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block text-6xl sm:text-7xl"
                >
                  
                </motion.div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
              >
                Contact & Inquiry
              </motion.h1>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-24 sm:w-32 h-1 bg-white/50 mx-auto rounded-full mb-6 sm:mb-8"
              />

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Get in touch for classes, choreography, or training.
              </motion.p>

              {/* Additional Info Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                {['Quick Response', 'Expert Team', '24/7 Support'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-xs sm:text-sm font-medium border border-white/30"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Wave Decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full h-12 sm:h-16 text-rose-50"
              preserveAspectRatio="none"
              viewBox="0 0 1440 54"
              fill="currentColor"
            >
              <path d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,16C840,11,960,21,1080,26.7C1200,32,1320,32,1380,32L1440,32L1440,54L1380,54C1320,54,1200,54,1080,54C960,54,840,54,720,54C600,54,480,54,360,54C240,54,120,54,60,54L0,54Z" />
            </svg>
          </div>
        </div>
      </motion.div>

     
    </div>
  );
}