import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function DanceAcademyCTA() {
  return (
    <div className="relative w-full overflow-hidden">
     

      <div 
        className="relative py-10 md:py-10 lg:py-10   px-6"
        style={{
          background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`
        }}
      >
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Floating decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/20 opacity-50" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-white/20 opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/10 blur-3xl" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto text-center  ">
          
          {/* Top decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-24 md:w-32 h-1 bg-white/80 rounded-full mx-auto mb-4 md:mb-6"
          />

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-4 leading-tight px-4"
          >
            Join Our Dance Academy Today!
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="text-base md:text-base lg:text-xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto  mb-5 px-4"
          >
            Start your journey with expert mentors and discover the dancer within you.
          </motion.p>

  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className=" gap-4 mt-10 lg:mt-0 justify-center lg:justify-start lg:shrink-0 "
          >
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

        

          {/* Bottom decorative elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-3 md:mt-5 flex flex-col items-center gap-6"
          >
           
            
            {/* Info text */}
            <p className="text-sm md:text-base text-white/80 font-light tracking-wide">
              Transform your passion into performance
            </p>

          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)'
          }}
        />
      </div>
    </div>
  );
}