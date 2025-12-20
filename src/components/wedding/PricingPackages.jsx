import React from 'react';
import { motion } from 'framer-motion';
import {  Sparkles, Heart, Crown, IndianRupee } from 'lucide-react';

export default function PricingPackage() {
  

  const packages = [
    {
      icon: Sparkles,
      name: "Basic Dance Performance Package",
      price: "₹15,000",
      features: [
        "1 Solo/Couple Performance",
        "3 Practice Sessions",
        "Music Editing & Selection",
        "Basic Costume Consultation",
        "Performance Duration: 3-4 minutes"
      ]
    },
    {
      icon: Heart,
      name: "Couple Dance Premium Package",
      price: "₹35,000",
      features: [
        "2-3 Couple Performances",
        "6 Practice Sessions",
        "Professional Music Mixing",
        "Complete Costume Guidance",
        "Video Recording of Final Practice",
        "Performance Duration: 8-10 minutes"
      ],
      popular: true
    },
    {
      icon: Crown,
      name: "Full Wedding Sangeet Choreography Package",
      price: "₹75,000",
      features: [
        "Unlimited Performances (Solo, Couple & Group)",
        "12+ Practice Sessions",
        "Complete Sangeet Planning",
        "Professional Music & Mixing",
        "Full Costume & Styling Support",
        "Video Documentation",
        "Event Day Coordination",
        "Performance Duration: Full Event"
      ]
    }
  ];

  return (
    <div className="min-h-full py-20 p-4" style={{ backgroundColor: 'var(--color-elegantLight)' }}>
      <style>{`
        @theme {
          --color-primary: #f6466c;
          --color-secondary: #f28b00;
          --color-elegantDark: #1a1a1a;
          --color-elegantLight: #faf7f4;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
       
        
       

        {/* Pricing Section */}
        <div className="mb-12">
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
    <IndianRupee size={18} style={{ color: 'var(--color-primary)' }} />
    <span
      className="text-sm font-semibold"
      style={{ color: 'var(--color-elegantDark)' }}
    >
      Prices
    </span>
  </motion.div>
</div>

          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4" style={{ color: 'var(--color-elegantDark)' }}>
            Pricing <span className='text-primary'>Packages</span> 
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect package for your celebration
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch ">
  {packages.map((pkg, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
      className="rounded-xl overflow-hidden backdrop-blur-sm relative flex flex-col h-full"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        border: `2px solid var(--color-secondary)`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}
    >
      {pkg.popular && (
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white z-10"
          style={{ background: 'var(--color-primary)' }}
        >
          MOST POPULAR
        </div>
      )}

      {/* Gradient Header */}
      <div
        className="p-6 text-center"
        style={{
          background:
            'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
        }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto bg-white/20">
          <pkg.icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">
          {pkg.name}
        </h3>

        <div className="text-4xl font-bold text-white">
          {pkg.price}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span
                className="mr-2 mt-1"
                style={{ color: 'var(--color-secondary)' }}
              >
                ✓
              </span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button always at bottom */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto w-full py-3 cursor-pointer rounded-lg font-semibold text-white"
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            boxShadow: '0 4px 12px rgba(246, 70, 108, 0.3)'
          }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
}