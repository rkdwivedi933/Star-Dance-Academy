import React from 'react';
import { motion } from 'framer-motion';
import { Music, Zap, HeartHandshake, ArrowRight,Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const ServicesCards = () => {
  const services = [
    {
      id: 1,
      icon: Music,
      title: 'Dance Academy',
      description: 'Master classical and contemporary dance styles with expert instructors in a nurturing environment.',
      accentColor: 'var(--color-primary)',
      bubbleColor: 'rgba(246, 70, 108, 0.1)',
      link: '/about'
    },
    {
      id: 2,
      icon: Zap,
      title: 'Zumba',
      description: 'High-energy fitness dance classes that blend Latin rhythms with cardio for a fun workout experience.',
      accentColor: 'var(--color-secondary)',
      bubbleColor: 'rgba(242, 139, 0, 0.1)',
      link: '/zumba'
    },
    {
      id: 3,
      icon: HeartHandshake,
      title: 'Wedding Choreography',
      description: 'Create unforgettable moments with personalized dance routines for your special day celebrations.',
      accentColor: 'var(--color-primary)',
      bubbleColor: 'rgba(246, 70, 108, 0.1)',
      link: '/wedding'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const floatingBubbleAnimation = {
    y: [0, -15, 0],
    x: [0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  const navigate = useNavigate();
  const handleExplore = () =>{
    navigate('/services')
  }

  return (
    <section 
      className="py-20 md:py-20 px-4 sm:px-6 lg:px-8"
      
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
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
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))',
                  borderColor: 'var(--color-primary)'
                }}
              >
                <Layers size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Services
                </span>
              </motion.div>
          <h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--color-elegantDark)' }}
          >
            Our <span className='text-primary'>Services</span> 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect dance program tailored to your passion and goals
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 "
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  
                }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="relative  h-full bg-white/35 backdrop-blur-xl rounded-2xl p-8 px-2 shadow-xl border-2  border-primary overflow-hidden">

                  <motion.div
                    animate={floatingBubbleAnimation}
                    className="absolute top-4 right-4 w-24 h-24 rounded-full blur-2xl opacity-50 pointer-events-none"
                    style={{ background: service.bubbleColor }}
                  />

                  {/* Accent Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="w-12 h-1 rounded-full mb-6 origin-left"
                    style={{ background: service.accentColor }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 60, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.accentColor}, var(--color-secondary))`,
                      boxShadow: `0 8px 20px ${service.bubbleColor}`
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold mb-3"
                    style={{ color: 'var(--color-elegantDark)' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <motion.a
                    href={service.link}
                    aria-label={`Learn more about ${service.title}`}
                    className="inline-flex items-center space-x-2 font-semibold group/link"
                    style={{ color: service.accentColor }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Learn More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.a>

                  {/* Decorative Corner Shape */}
                  <svg
                    className="absolute bottom-0 right-0 opacity-10 pointer-events-none"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      fill={service.accentColor}
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
          onClick={handleExplore}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-semibold text-white shadow-xl cursor-pointer"
            style={{
              background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`
            }}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCards;