import { motion } from 'framer-motion';
import { Users, Heart, Baby, Sparkles, Gift, Drama, Layers } from 'lucide-react';

export default function FunctionServices() {
  const services = [
    {
      icon: Users,
      title: 'Group Family Dance',
      description: 'Coordinated choreography that brings the entire family together in perfect harmony, creating unforgettable moments of joy and celebration.'
    },
    {
      icon: Heart,
      title: 'Couple Entry & Performance',
      description: 'Romantic and elegant choreography designed to make your special entrance and first dance a magical moment everyone will remember.'
    },
    {
      icon: Baby,
      title: 'Kids Performance',
      description: 'Fun, energetic, and age-appropriate routines that let the little ones shine and add adorable charm to your celebration.'
    },
    {
      icon: Sparkles,
      title: 'Ladies Sangeet Choreography',
      description: 'Vibrant and stylish performances tailored for the ladies of the family, from traditional to contemporary dance styles.'
    },
    {
      icon: Gift,
      title: 'Surprise Performances',
      description: 'Carefully planned secret performances that create stunning moments of surprise, emotion, and heartfelt celebration.'
    },
    {
      icon: Drama,
      title: 'Theme-based Acts',
      description: 'Creative and theatrical performances based on your chosen theme, from Bollywood to classical to fusion styles.'
    }
  ];

  return (
    <div className="relative w-full py-20 md:py-20 lg:py-20 px-4 bg-gray-100">
      

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-secondary) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 rounded-full mx-auto mb-6"
            style={{ backgroundColor: 'var(--color-secondary)' }}
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
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Our <span className='text-primary'>Services</span>
          </h2>
          
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive choreography solutions for every celebration
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.33, 1, 0.68, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative h-full p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 border-2"
                  style={{
                    backgroundColor: 'rgba(250, 247, 244, 0.05)',
                    borderColor: 'var(--color-secondary)'
                  }}
                >
                 

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{
                      background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`
                    }}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 text-center">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {service.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-20 rounded-tr-2xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, var(--color-secondary) 100%)`,
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                    }}
                  />

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="absolute bottom-0 left-1 right-1 h-1 rounded-b-2xl origin-left"
                    style={{
                      background: `linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)`
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}