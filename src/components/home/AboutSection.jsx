import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Star} from "lucide-react"

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(imageScrollProgress, [0, 1], ['10%', '-10%']);
  const stripHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-full bg-gray-100 overflow-hidden  "
    >
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0  opacity-[0.025] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-[15%] w-2 h-2 rounded-full bg-linear-to-br from-rose-400/30 to-amber-400/30 blur-sm"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-48 right-[20%] w-3 h-3 rounded-full bg-linear-to-br from-amber-400/20 to-rose-400/20 blur-sm"
      />

      <motion.div
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 left-[8%] w-32 h-32 border border-rose-200/10 rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-12 py-20 lg:py-20">
          {/* Header */}
                 <motion.div
                   initial={{ opacity: 0, y: -20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
                   className="text-center mb-10 md:mb-16"
                 >
                  
                   <motion.div
                               initial={{ scaleX: 0 }}
                               whileInView={{ scaleX: 1 }}
                               viewport={{ once: true }}
                               transition={{ duration: 0.8, delay: 0.2 }}
                               className="w-20 h-1 mx-auto mb-4 rounded-full"
                               style={{ 
                                 background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`
                               }}
                             />
                             
                   <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.4 }}
                     className="
                       inline-flex items-center gap-2
                       px-4 py-2 rounded-full
                       border shadow-md mb-4
                     "
                     style={{
                       background:
                         'linear-gradient(135deg, rgba(246,70,108,0.1), rgba(242,139,0,0.1))',
                       borderColor: 'var(--color-primary)',
                     }}
                   >
                     <Star size={16} style={{ color: 'var(--color-primary)' }} />
                     <span
                       className="text-sm font-semibold"
                       style={{ color: 'var(--color-elegantDark)' }}
                     >
                       About
                     </span>
                   </motion.div>
         
                   <h2
                     className="text-4xl md:text-6xl font-bold mb-4"
                     style={{ color: 'var(--color-elegantDark)' }}
                   >
                     About{' '}
                     <span style={{ color: 'var(--color-primary)' }}>
                       Our Academy
                     </span>
                   </h2>
         
                   <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                     Experience the perfect blend of expert training, personalized
                     attention, and world-class facilities that make us the premier choice
                     for dance enthusiasts.
                   </p>
                 </motion.div>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Story Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="lg:col-span-5 space-y-2"
          >
            {/* Accent Label */}
            <motion.div variants={textItemVariants}>
              <span className="inline-block text-[16px] tracking-[0.35em] uppercase font-bold text-secondary ">
                About The Academy
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={textItemVariants} className="relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--color-elegantDark)' }}>
                Where Passion
                <br />
                <span className="relative inline-block mt-1">
                  Meets Performance
                  <motion.span
                    variants={underlineVariants}
                    className="absolute -bottom-2 left-0 h-[3px] bg-linear-to-r from-primary via-secondary to-primary rounded-full"
                  />
                </span>
              </h2>
            </motion.div>

            {/* Story Paragraphs */}
            <motion.div variants={textItemVariants} className="space-y-6 pt-4">
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                For over a decade, we've been crafting moments that transcend movement. 
                Each step, each turn, each expression—meticulously designed to transform 
                hesitation into confidence, and dreams into unforgettable performances.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Our academy isn't just a space to learn choreography. It's where souls 
                discover their rhythm, where couples find their first dance, and where 
                celebration becomes an art form. This is the alchemy of dance—where 
                discipline meets emotion.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                From classical grace to contemporary fire, from Zumba energy to wedding 
                elegance, we don't teach steps. We curate experiences, build memories, 
                and celebrate the extraordinary within you.
              </p>
            </motion.div>

            {/* Signature Line */}
            <motion.div variants={textItemVariants} className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-px  w-8 bg-linear-to-r from-primary to-transparent" />
                <p className="text-[16px] italic text-primary font-bold tracking-wide">
                  Founded with love, sustained by passion
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* VERTICAL ACCENT STRIP */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-transparent via-primary/20 to-transparent overflow-hidden">
              <motion.div
                style={{ height: stripHeight }}
                className="w-full bg-linear-to-b from-primary via-secondary to-primary"
              />
            </div>
          </div>

          {/* RIGHT: Cinematic Image */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="lg:col-span-6"
          >
            <motion.div 
              style={{ y: imageY }}
              className="relative group"
            >
              <div className="
  relative 
  aspect-3/4 
  sm:aspect-3/4
  lg:aspect-3/4
  rounded-tl-4xl sm:rounded-tl-[48px] lg:rounded-tl-[80px]
  rounded-br-4xl sm:rounded-br-[48px] lg:rounded-br-[80px]
  overflow-hidden 
  border-2 border-secondary
  shadow-xl sm:shadow-2xl shadow-rose-900/10
  group
">
  {/* Image Container */}
  <div className="
    absolute inset-0
    bg-linear-to-br from-rose-100 via-amber-50 to-pink-100
    grayscale-0
    lg:grayscale-30 lg:group-hover:grayscale-0
    transition-all duration-700
  ">
    <img
      src="https://plus.unsplash.com/premium_photo-1710064057043-d301e344e348?w=600&auto=format&fit=crop&q=60"
      alt="Dance Academy"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Hover Scale – Desktop only */}
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="absolute inset-0 hidden lg:block"
  />

  {/* Border Glow – Desktop only */}
  <div className="
    absolute inset-0
    opacity-0 lg:group-hover:opacity-100
    transition-opacity duration-700
    rounded-tl-4xl sm:rounded-tl-[48px] lg:rounded-tl-[80px]
    rounded-br-4xl sm:rounded-br-[48px] lg:rounded-br-[80px]
    border-2 border-secondary
    shadow-[0_0_30px_rgba(242,139,0,0.3)]
    hidden lg:block
  " />
</div>


              {/* Decorative Corner Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -right-6 w-24 h-24 border-r-2 border-t-2 border-primary/20 rounded-tr-[40px]"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 w-24 h-24 border-l-2 border-b-2 border-secondary/20 rounded-bl-[40px]"
              />

              {/* Floating Motion Lines */}
              <motion.div
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
                className="absolute top-1/4 -left-8 w-16 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
              />

              <motion.div
                animate={{
                  pathLength: [0, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  delay: 1
                }}
                className="absolute bottom-1/3 -right-8 w-20 h-px bg-linear-to-r from-transparent via-secondary/30 to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white/60 to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutSection;