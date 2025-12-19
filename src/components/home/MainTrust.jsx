import React from 'react'
import TrustPage from '../latout/Trust'
import {motion} from "framer-motion"
import {MessageSquareQuote} from "lucide-react"

function MainTrust() {
  return (
    <div className=' py-20'>
        <div className="text-center mb-14">
          <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-20 h-1 mx-auto mb-5 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
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
                <MessageSquareQuote size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Testimonials
                </span>
              </motion.div>
          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--color-elegantDark)' }}
          >
             Our{' '}
            <span style={{ color: 'var(--color-primary)' }}> Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our amazing community of dancers.
          </p>
        </div>
        <div>
            <TrustPage/>
        </div>
    </div>
  )
}

export default MainTrust
