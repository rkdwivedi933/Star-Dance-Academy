

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function BatchTimingSection() {
  const batches = [
    {
      title: 'Morning Batch',
      timings: [
        { label: 'Morning', time: '8:30 to 10:00 AM' },
      ],
    },
    {
      title: 'Evening Batches',
      timings: [
        { label: 'Girls Batch', time: '04:00 to 05:00 PM' },
        { label: 'Kids Batch', time: '05:00 to 06:00 PM' },
        { label: 'Zumba Batch', time: '06:00 to 07:00 PM' },
        { label: 'Combine Batch', time: '07:00 to 08:00 PM' },
        { label: 'Special Batch', time: '08:00 to 09:00 PM' },
      ],
    },
  ];

  return (
    <div className="relative w-full py-10 md:py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="relative p-6 md:p-8 rounded-2xl border-2 shadow-lg"
          style={{
            borderColor: 'var(--color-primary)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Header */}
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex items-center gap-4 md:gap-5">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
                }}
              >
                <Clock className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold"
                style={{ color: 'var(--color-elegantDark)' }}
              >
                Batch Timing
              </motion.h3>
            </div>

            {/* Divider */}
            <div
              className="hidden md:block w-px h-16 opacity-30"
              style={{
                background: `linear-gradient(to bottom, var(--color-primary), var(--color-secondary))`,
              }}
            />

            {/* Batch Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 space-y-6"
            >
              {batches.map((batch, index) => (
                <div key={index} className="space-y-3">
                  {/* Batch Title */}
                  <h4
                    className="text-lg md:text-xl font-semibold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {batch.title}
                  </h4>

                  {batch.timings.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + i * 0.1,
                      }}
                      className="flex items-center justify-between gap-4 py-1"
                    >
                      <span
                        className="text-base md:text-lg font-medium"
                        style={{ color: 'var(--color-elegantDark)' }}
                      >
                        {item.label}
                      </span>

                      <div
                        className="flex-1 border-b border-dashed opacity-30"
                        style={{ borderColor: 'var(--color-elegantDark)' }}
                      />

                      <span
                        className="text-base md:text-lg font-light"
                        style={{ color: 'var(--color-secondary)' }}
                      >
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
