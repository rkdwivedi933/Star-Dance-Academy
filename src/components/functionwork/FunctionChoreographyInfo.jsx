import { motion } from 'framer-motion';

export default function FunctionChoreographyInfo() {
  return (
    <div className="relative w-full py-20 md:py-20 lg:py-20 px-6" style={{ backgroundColor: 'var(--color-elegantLight)' }}>
     

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-6"
          >
            {/* Section Title */}
            <div className="space-y-3">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-1 rounded-full"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--color-elegantDark)' }}>
                Celebrate Every Moment
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-base md:text-base leading-relaxed" style={{ color: 'var(--color-elegantDark)' }}>
              <p>
                We specialize in creating <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>unforgettable choreography</span> for all your wedding celebrations. From the vibrant energy of <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>Sangeet nights</span> to the intimate beauty of <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>couple dances</span>, we bring your vision to life.
              </p>

              <p>
                Our expertise includes choreographing stunning performances for <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>Mehendi ceremonies</span>, joyful <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>Haldi celebrations</span>, and coordinated <span className="font-semibold" style={{ color: 'var(--color-secondary)' }}>family dance routines</span> that bring everyone together.
              </p>

            
            </div>
        
            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" space-y-3"
            >
              <h3 className="text-xl md:text-xl font-semibold " style={{ color: 'var(--color-elegantDark)' }}>
                Our Services Include:
              </h3>
              <ul className="space-y-3">
                {[
                  'Sangeet Night Choreography',
                  'Mehendi Ceremony Performances',
                  'Haldi Function Dances',
                  'Couple Dance Routines',
                  'Family Group Choreography',
                  'Surprise Performance Planning'
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-base md:text-base"
                  >
                    <div 
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: 'var(--color-secondary)' }}
                    />
                    <span style={{ color: 'var(--color-elegantDark)' }}>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden ">
             
              
              {/* Placeholder image - replace with actual image */}
              <img
                src="https://media.istockphoto.com/id/2173305602/photo/carefree-couple-having-fun-while-dancing-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=G3Siq751wj4KqqTzlsfcA7tAmOvSlYvSH3vzbgIkc1k="
                alt="Wedding function choreography"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />

              {/* Decorative corner accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-30"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, var(--color-secondary) 100%)`,
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                }}
              />
              
             
            </div>

           
           
          </motion.div>

        </div>
      </div>
    </div>
  );
}