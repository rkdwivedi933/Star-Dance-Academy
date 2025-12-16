import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTAToContact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="w-full min-h-full flex items-center justify-center px-4 py-6 relative overflow-hidden"
    >
      
     

      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg "
      style={{
          background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`
        }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full blur-lg"></div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Floating Icon */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center  float-animation"
        >
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
        >
          Ready to Join Our <br className="hidden sm:block" />
          <span className="inline-block mt-2">Wedding Dance Class?</span>
        </motion.h2>

        {/* Subline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6 text-white text-lg md:text-xl font-medium"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            High energy
          </span>
          <span className="hidden sm:inline text-2xl opacity-50">•</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Cupple
          </span>
          <span className="hidden sm:inline text-2xl opacity-50">•</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            Love
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
           {/* Primary Button - Enroll Now */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                
              }}
              whileTap={{ scale: 0.98 }}
              className="group  relative px-4 py-2 border-2 border-white   text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden transition-all duration-300"
              style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
                  color: "white",
                }}
            >
              <span  className="relative z-10 flex items-center justify-center gap-2 ">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20"
              />
            </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-white text-opacity-90 text-sm md:text-base"
        >
          No experience needed • All fitness levels welcome • First class free
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center"
        >
          <div className="w-24 h-1 bg-white opacity-30 rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent opacity-10"></div>
    </section>  
  );
}