import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function OpeningHoursSection() {
  const schedules = [
    { days: 'Monday – Saturday', time: '7 AM – 9 PM', isOpen: true },
    { days: 'Sunday', time: 'Closed', isOpen: false }
  ];

  return (
    <div className="relative w-full py-10 md:py-10 " >
     

      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="relative p-6 md:p-8 rounded-2xl border-2 shadow-lg"
          style={{ 
            borderColor: 'var(--color-primary)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
        >
    
          {/* Content container - horizontal on desktop, vertical on mobile */}
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            
            {/* Icon and Title */}
            <div className="flex items-center gap-4 md:gap-5">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
                className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`
                }}
              >
                <Clock className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold"
                style={{ color: 'var(--color-elegantDark)' }}
              >
                Opening Hours
              </motion.h3>
            </div>

            {/* Vertical divider for desktop */}
            <div className="hidden md:block w-px h-16 bg-linear-to-b opacity-30" style={{ 
              background: `linear-gradient(to bottom, var(--color-primary), var(--color-secondary))`
            }} />

            {/* Schedule list */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 space-y-3"
            >
              {schedules.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between gap-4 py-2"
                >
                  {/* Days */}
                  <span 
                    className="text-base md:text-lg font-medium"
                    style={{ color: 'var(--color-elegantDark)' }}
                  >
                    {schedule.days}
                  </span>

                  {/* Dot separator */}
                  <div className="flex-1 border-b border-dashed opacity-30" style={{ 
                    borderColor: 'var(--color-elegantDark)' 
                  }} />

                  {/* Time */}
                  <span 
                    className={`text-base md:text-lg font-light ${schedule.isOpen ? '' : 'italic'}`}
                    style={{ 
                      color: schedule.isOpen ? 'var(--color-secondary)' : 'var(--color-elegantDark)',
                      opacity: schedule.isOpen ? 1 : 0.6
                    }}
                  >
                    {schedule.time}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        
        </motion.div>

      </div>
    </div>
  );
}