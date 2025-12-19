import { motion } from 'framer-motion';
import { Flame, HeartPulse, Smile, Bolt, Users, Zap, SmileIcon } from 'lucide-react';

const benefits = [
  {
    icon: Flame,
    title: 'Burn Calories',
    description:
      'Torch up to 500-800 calories per hour while having fun and dancing to infectious rhythms.',
    image:
      'https://plus.unsplash.com/premium_photo-1694558053087-61c4ead81c99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya291dCUyMGRhbmNlfGVufDB8fDB8fHww'
  },
  {
    icon: HeartPulse,
    title: 'Cardiovascular Health',
    description:
      'Improve heart health and endurance through dynamic, continuous movement and aerobic exercise.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80'
  },
  {
    icon: Smile,
    title: 'Boost Mood',
    description:
      'Release endorphins and reduce stress while dancing to energizing Latin and world music.',
    image:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80'
  },
  {
    icon: Bolt,
    title: 'Full Body Workout',
    description:
      'Tone and strengthen every muscle group with choreography that targets all body areas.',
    image:
      'https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=800&q=80'
  },
  {
    icon: Users,
    title: 'Social Connection',
    description:
      'Join a vibrant community and make new friends while sharing the joy of dance fitness.',
    image:
      'https://images.unsplash.com/photo-1765604551414-3917c981a703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNvY2lhbCUyMENvbm5lY3Rpb258ZW58MHx8MHx8fDA%3D'
  },
  {
    icon: Zap,
    title: 'Increase Energy',
    description:
      'Build stamina and feel energized throughout your day with regular Zumba practice.',
    image:
      'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' }
  }
};

export default function ZumbaBenefits() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8  bg-gray-100  overflow-hidden">



      {/* Badge */}
      <div className="flex justify-center mb-6 relative z-10">
        <div>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border shadow-md backdrop-blur-md"
          style={{
            background:
              'linear-gradient(135deg, rgba(246,70,108,0.12), rgba(242,139,0,0.12))',
            borderColor: 'var(--color-primary)'
          }}
        >
          <SmileIcon size={18} className="text-primary" />
          <span className="text-sm font-semibold text-elegantDark">
            Benefits
          </span>
          
        </motion.div>
        </div>
      </div>

      {/* Heading */}
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-14 relative z-10"
>
  <h2 className="text-4xl md:text-6xl">
    <span className="font-bold">Benefits of </span>
    <span className="text-primary font-bold">Zumba</span>
  </h2>

  <p className="text-gray-600 text-xl max-w-xl mx-auto mt-4">
    High-energy sessions designed to keep you fit, confident & happy
  </p>
</motion.div>

     

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="relative  h-full rounded-2xl bg-white/60 backdrop-blur-xl border-2 border-primary shadow-xl overflow-hidden">

                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Icon */}
                  <div className="w-14 h-14 -mt-12 mb-4 rounded-xl flex items-center justify-center bg-white shadow-lg border border-secondary/30">
                    <Icon size={26} className="text-secondary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
