import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, HeartHandshake, Flame, Sparkles, Music2, BookOpen, CheckCircle } from "lucide-react";



export default function FeaturedArticle() {
  return (
    <div className="min-h-full bg-linear-to-br bg-elegantLight/90 py-10 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))',
                  borderColor: 'var(--color-primary)'
                }}
              >
                <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Blog
                </span>
              </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Featured <span className="text-primary">Article</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Our most popular dance and wedding choreography guide
          </p>
        </motion.div>

        {/* Featured Blog Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-lg shadow-2xl group cursor-pointer"
          style={{ minHeight: '500px' }}
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop"
              alt="Sangeet Dance Preparation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-linear-to-r from-primary/60 via-secondary/50 to-primary/40"
            style={{ mixBlendMode: 'multiply' }}
          />
          
          {/* Additional Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content Overlay */}
          <div className="relative h-full flex items-center">
            <div className="w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl"
              >
                {/* Category Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block mb-4 sm:mb-6"
                >
                  <span className="bg-white/20 text-primary px-4 py-2 rounded-full text-xs sm:text-base font-semibold tracking-wide uppercase shadow-md">
                    Wedding Choreography
                  </span>
                </motion.div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  How to Prepare for Your Sangeet Dance
                </h1>

                {/* Description */}
                <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  Master the art of creating unforgettable sangeet performances. From selecting the perfect songs to coordinating group choreography, discover expert tips that will make your special day truly magical.
                </p>

                
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
>
  {[
    { title: "Sangeet Tips", icon: PartyPopper }, // or Music2
    { title: "Couple Dance", icon: HeartHandshake },
    { title: "Zumba Fitness", icon: Flame },
    { title: "Academy News", icon: Sparkles }
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-center"
    >
      <item.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-primary mb-2" />

      <h3 className="text-sm sm:text-base font-semibold text-gray-800">
        {item.title}
      </h3>
    </motion.div>
  ))}
</motion.div>

      </div>
    </div>
  );
}