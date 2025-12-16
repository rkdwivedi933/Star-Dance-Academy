import { motion } from 'framer-motion';

export default function FunctionWorkHeader() {
  return (
    <div className="relative w-full overflow-hidden">
     
      
      <div 
        className="relative py-24 px-6 md:py-32 lg:py-40"
        style={{
          background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`
        }}
      >
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

       

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Decorative top accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 md:mb-8 mx-auto w-16 md:w-20 h-0.5 bg-white/80 rounded-full"
            />

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 md:mb-5 tracking-tight leading-tight">
             Our Services
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="text-lg md:text-xl lg:text-2xl text-white/95 font-light tracking-wide max-w-3xl mx-auto"
            >
              Choreography that Makes Every Moment Special
            </motion.p>

            {/* Decorative bottom accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-8 md:mt-12 mx-auto w-24 md:w-32 h-1 bg-white/80 rounded-full"
            />
          </motion.div>

          
        </div>

        {/* Bottom gradient fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 md:h-32"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.15), transparent)'
          }}
        />
      </div>
      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
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
}