import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Share2 } from 'lucide-react';

export default function SocialMediaSection() {
  const socialLinks = [
    { 
      icon: Instagram, 
      name: 'Instagram', 
      url: 'https://instagram.com',
      color: '#E4405F'
    },
    { 
      icon: Facebook, 
      name: 'Facebook', 
      url: 'https://facebook.com',
      color: '#1877F2'
    },
    { 
      icon: Youtube, 
      name: 'YouTube', 
      url: 'https://youtube.com',
      color: '#FF0000'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <div className="min-h-full w-full py-20 md:py-20 px-6 bg-gray-100" >
      

      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="mb-8 md:mb-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 rounded-full mx-auto mb-4"
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
                <Share2 size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Follow  Us
                </span>
              </motion.div>
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: 'var(--color-elegantDark)' }}
          >
            Follow <span className='text-primary'>Us</span> 
          </h2>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-center gap-4 md:gap-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.15,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`
                }}
                aria-label={social.name}
              >

                {/* Icon */}
                <Icon className="relative z-10 w-7 h-7 md:w-9 md:h-9 text-white" />

                {/* Subtle ring animation on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100"
                  style={{ borderColor: 'var(--color-secondary)' }}
                  animate={{
                    scale: [1, 1.2, 1.2],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Helper text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-10 space-y-3"
        >
          <p 
            className="text-sm md:text-base font-light"
            style={{ color: 'var(--color-elegantDark)', opacity: 0.7 }}
          >
            Stay connected for updates, performances & tutorials
          </p>

         
        </motion.div>

      </div>
    </div>
  );
}