import { motion } from 'framer-motion';
import { Map } from 'lucide-react';

export default function GoogleMapSection() {
  // Replace with your actual Google Maps embed URL
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3207!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <div className="relative w-full py-20 md:py-20 px-4" >
     

      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 rounded-full mx-auto mb-4"
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
                <Map size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Map
                </span>
              </motion.div>
          <h2 
            className="text-4xl md:text-4xl lg:text-6xl font-bold"
            style={{ color: 'var(--color-elegantDark)' }}
          >
            Find Us on <span className='text-primary'>Map</span> 
          </h2>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          className="relative"
        >
         
          {/* Map wrapper */}
          <div 
            className="relative rounded-xl overflow-hidden shadow-2xl border-3"
            style={{ 
              borderWidth: '3px',
              borderColor: 'var(--color-secondary)'
            }}
          >
            {/* Google Maps iframe */}
            <iframe
              src={mapUrl}
              className="w-full h-[250px] md:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Star Dance Academy Location"
            />

           

            {/* Decorative corner accents */}
            <div 
              className="absolute top-0 left-0 w-16 h-16 opacity-15 rounded-tl-xl"
              style={{
                background: `linear-gradient(135deg, var(--color-primary) 0%, transparent 100%)`
              }}
            />
            <div 
              className="absolute top-0 right-0 w-20 h-20 opacity-15 rounded-tr-xl"
              style={{
                background: `linear-gradient(135deg, transparent 0%, var(--color-secondary) 100%)`
              }}
            />
          </div>
        </motion.div>

        {/* Optional address note below map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-6 md:mt-8"
        >
          <p 
            className="text-sm md:text-base font-light"
            style={{ color: 'var(--color-elegantDark)', opacity: 0.7 }}
          >
            Click on the map to get directions
          </p>

         
        </motion.div>

      </div>
    </div>
  );
}