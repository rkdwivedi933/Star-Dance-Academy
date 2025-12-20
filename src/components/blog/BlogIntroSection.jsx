import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, BookOpen, TrendingUp, Music2, Music } from 'lucide-react';

export default function BlogIntroSection() {
  return (
    <div className="relative w-full py-20 md:py-20 px-4 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-elegantLight via-white to-elegantLight/80" />
      
      {/* Decorative background elements */}
      
<div className="absolute inset-0 pointer-events-none overflow-hidden">

  {/* Glow Orbs */}
  <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl"
    style={{ backgroundColor: "var(--color-primary)" }}
  />

  <motion.div
    animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.07, 0.04] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl"
    style={{ backgroundColor: "var(--color-secondary)" }}
  />

  {/* 🎶 Floating Music Notes */}
  {[...Array(5)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -60, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 20 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.8,
      }}
      className="absolute text-primary"
      style={{
        left: `${10 + i * 18}%`,
        top: `${50 + i * 5}%`,
      }}
    >
      <Music2 size={20 + i * 3} />
    </motion.div>
  ))}

  {/* ✨ Sparkle Beats */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        scale: [0.6, 1.2, 0.6],
        opacity: [0.15, 0.4, 0.15],
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.6,
      }}
      className="absolute text-secondary"
      style={{
        left: `${20 + i * 12}%`,
        top: `${25 + i * 10}%`,
      }}
    >
      <Music size={14} />
    </motion.div>
  ))}
</div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Premium top accent line with shimmer */}
        <div className="relative mb-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-24 md:w-32 h-1 rounded-full mx-auto relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))'
            }}
          >
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>
        </div>

        {/* Premium badge with glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="inline-block mb-8"
        >
          <div className="relative">
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full blur-xl"
              
            />
            
            {/* Badge content */}
            <div className="relative">
              {/* Gradient border */}
              <div 
                className="absolute inset-0 rounded-full p-0.5 "
               
              >
                <div className="w-full h-full  rounded-full  border border-primary"
                 style={{
              background:
                "linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))",
              borderColor: "var(--color-primary)",
            }} />
              </div>
              
              <div className="relative flex items-center gap-3  px-4 py-3.5 rounded-full ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            
                >
                  <Sparkles size={20} style={{ color: 'var(--color-primary)' }} />
                </motion.div>
                <span className="text-sm font-bold tracking-wider uppercase" style={{ color: 'var(--color-elegantDark)' }}>
                  Introduction
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="space-y-10"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl  font-bold leading-tight mb-4">
            <span >
              Your Dance <span className='text-primary'>Journey</span>
            </span>

            
          </h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-4'>Discover valuable insights, tips, and inspiration to elevate your artistry</p>

          {/* Premium description with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p 
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light mb-8"
              
            >
              Welcome to our dance community hub, where we share the latest{' '}
              <span 
                className="font-semibold relative inline-block"
                style={{ color: 'var(--color-secondary)' }}
              >
                learning techniques
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                  style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.3 }}
                />
              </span>
              ,{' '}
              <span 
                className="font-semibold relative inline-block"
                style={{ color: 'var(--color-secondary)' }}
              >
                academy updates
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                  style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.3 }}
                />
              </span>
              , and inspiring stories from our journey.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
              style={{ color: 'var(--color-elegantDark)', opacity: 0.85 }}
            >
              Whether you're a beginner taking your first steps or an experienced dancer refining your craft, discover valuable{' '}
              <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>
                insights
              </span>
              ,{' '}
              <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>
                tips
              </span>
              , and{' '}
              <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>
                inspiration
              </span>
              {' '}to elevate your artistry.
            </motion.p>
          </motion.div>

          {/* Premium feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto "
          >
            {[
              {
                icon: BookOpen,
                title: 'Expert Guides',
                description: 'In-depth tutorials and techniques',
              },
              {
                icon: TrendingUp,
                title: 'Latest Updates',
                description: 'Stay ahead with trending topics',
              },
              {
                icon: MessageSquare,
                title: 'Community Stories',
                description: 'Real experiences from dancers',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Gradient border */}
                <div 
                  className="absolute inset-0 rounded-2xl p-px opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
                  }}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                {/* Card content */}
                <div className="relative bg-linear-to-br from-white to-gray-50/30 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
                  <div 
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(246,70,108,0.1), rgba(242,139,0,0.1))'
                    }}
                  >
                    <feature.icon size={24} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-elegantDark)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light" style={{ color: 'var(--color-elegantDark)', opacity: 0.75 }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        
        </motion.div>
      </div>
    </div>
  );
}