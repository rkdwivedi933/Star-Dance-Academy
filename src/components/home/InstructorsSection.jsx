import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Award } from 'lucide-react';

const InstructorsSection = () => {
  const instructors = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Lead Instructor & Founder",
      bio: "15+ years of classical dance expertise with a passion for blending traditional techniques with contemporary styles.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop",
      social: {
        instagram: "#",
        facebook: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Zumba & Fitness Trainer",
      bio: "Certified Zumba instructor bringing high-energy workouts and infectious enthusiasm to every class and  techniques with contemporary styles.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
      social: {
        instagram: "#",
        facebook: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Wedding Choreographer",
      bio: "Specialist in creating magical wedding dance moments with personalized choreography for every couple's special day.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
      social: {
        instagram: "#",
        facebook: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <section className="py-10 lg:py-10 bg-elegantLight relative overflow-hidden ">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
           
          </motion.div>
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
                <Award size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Instructors
                </span>
              </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-elegantDark mb-4">
            Expert <span className='text-primary'>Instructors</span> 
          </h2>
          <p className="text-lg text-elegantDark/70 max-w-2xl mx-auto">
            Learn from passionate professionals dedicated to bringing out the dancer in you
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6  ">  
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg  transition-all duration-500 border-2 border-transparent ">
                {/* Decorative gradient border effect */}

                
                {/* Card Content */}
                <div className="relative pb-5 ">
                  {/* Image Container */}
                  <div className="relative mb-6 overflow-hidden rounded-xl h-[350px]">
                    <div className="aspect-3 relative">
                      <img
  src={instructor.image}
  alt={instructor.name}
  className="w-full h-[300px]  px-4 py-4  rounded-xl transform group-hover:scale-105 transition-transform duration-700"
/>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Decorative corner accent */}
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Instructor Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-elegantDark mb-2 group-hover:text-primary transition-colors duration-300">
                      {instructor.name}
                    </h3>
                    <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                      {instructor.role}
                    </p>
                    <p className="text-elegantDark/70 text-sm leading-relaxed mb-6 line-clamp-2">
                      {instructor.bio}
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-4">
                      <motion.a
                        href={instructor.social.instagram}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={instructor.social.facebook}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={instructor.social.youtube}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Youtube className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                  className="h-1 bg-linear-to-t from-primary to-secondary origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;