import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function BlogIntroSection() {
  return (
    <div className="relative w-full py-16 md:py-20 lg:py-24 px-6 bg-elegantLight/90" >
      

      <div className="max-w-4xl mx-auto text-center">
        
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 md:w-20 h-1 rounded-full mx-auto mb-8"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        />

        {/* Main intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="space-y-6"
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
                <MessageSquare size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Introduction
                </span>
              </motion.div>
          <p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
            style={{ color: 'var(--color-elegantDark)', opacity: 0.9 }}
          >
            Welcome to our dance community hub, where we share the latest <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>learning techniques</span>, <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>academy updates</span>, and inspiring stories from our journey.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl leading-relaxed font-light"
            style={{ color: 'var(--color-elegantDark)', opacity: 0.85 }}
          >
            Whether you're a beginner taking your first steps or an experienced dancer refining your craft, our blog offers valuable <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>insights</span>, <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>tips</span>, and <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>inspiration</span> to help you grow. Stay connected with our vibrant community and never miss a beat!
          </motion.p>
        </motion.div>

        
      </div>
    </div>
  );
}