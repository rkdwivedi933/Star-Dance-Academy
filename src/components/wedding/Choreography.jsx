import React from 'react';
import { motion } from 'framer-motion';
import { User, Music, Users, Layers } from 'lucide-react';

export default function Choreography() {
  const services = [
    {
      icon: User,
      title: "Solo Performances",
      description: "Personalized choreography that highlights your unique style and makes your moment unforgettable."
    },
    {
      icon: Music,
      title: "Sangeet Performances",
      description: "Create magical memories with custom dance routines for your sangeet celebration."
    },
    {
      icon: Users,
      title: "Group Choreography",
      description: "Coordinated performances for family and friends that bring everyone together in joyful celebration."
    }
  ];

  return (
    <div className="min-h-full p-4 bg-gray-100 py-20">
     
      
      <div className="max-w-7xl mx-auto">
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
        <div className="flex justify-center">
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
    <span
      className="text-sm font-semibold"
      style={{ color: 'var(--color-elegantDark)' }}
    >
      Services
    </span>
  </motion.div>
</div>

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4" style={{ color: 'var(--color-elegantDark)' }}>
          Wedding Choreography <span className='text-primary'> Services</span>
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Transform your special day with expertly crafted dance performances
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className="rounded-xl p-6 backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                border: `2px solid var(--color-secondary)`,
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
                }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 
                className="text-2xl font-semibold text-center mb-3"
                style={{ color: 'var(--color-elegantDark)' }}
              >
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}