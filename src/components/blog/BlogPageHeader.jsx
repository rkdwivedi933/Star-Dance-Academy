import { motion } from 'framer-motion';

export default function BlogPageHeader() {
  return (
    <div className="relative w-full overflow-hidden">
      <style>{`
        @theme {
          --color-primary: #f6466c;
          --color-secondary: #f28b00;
          --color-elegantDark: #1a1a1a;
          --color-elegantLight: #faf7f4;
        }
      `}</style>
      
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

        {/* Floating decorative elements */}
        <div className="absolute top-16 left-10 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/20 opacity-50" />
        <div className="absolute bottom-16 right-10 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/20 opacity-40" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 blur-2xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          
          {/* Top decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 md:w-24 h-1 bg-white/80 rounded-full mx-auto mb-8 md:mb-10"
          />

          {/* Main heading with reveal animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.33, 1, 0.68, 1] 
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight"
            >
              Our Blog & Insights
            </motion.h1>
          </motion.div>
          
          {/* Subtitle with stagger */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Discover dance tips, tutorials, and inspiring stories from our community
          </motion.p>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-10 md:mt-14 mx-auto w-24 md:w-32 h-1 bg-white/80 rounded-full"
          />

          
        </div>

        {/* Bottom gradient fade */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 md:h-32"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.15), transparent)'
          }}
        />
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
    </div>
  );
}