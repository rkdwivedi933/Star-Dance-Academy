import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

const navigate = useNavigate();
const handleExplore = () =>{
    navigate('/about')
}

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-linear-to-br bg-elegantLight"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-primary">Our Academy</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Where <span>Passion</span> Meets{" "}
              <span className="text-primary">Performance</span>
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to our world of{" "}
              <span className="font-semibold text-primary">
                rhythm and grace
              </span>
              . For over{" "}
              <span className="font-semibold text-primary">15 years</span>,
              we've been nurturing talent and transforming dreams into reality
              through the art of dance.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We are a{" "}
              <span className="font-semibold text-primary">
                premier dance institution
              </span>{" "}
              dedicated to excellence in dance education. Our academy is home to{" "}
              <span className="font-semibold text-primary">
                world-class instructors
              </span>{" "}
              who bring years of professional experience from stages around the
              globe.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our{" "}
              <span className="font-semibold text-primary">
                passion for dance
              </span>{" "}
              goes beyond teaching steps—we cultivate{" "}
              <span className="font-semibold text-primary">
                confidence, discipline, and creativity
              </span>{" "}
              in every student. Whether you're taking your first dance step or
              perfecting your technique, we provide a{" "}
              <span className="font-semibold text-primary">
                nurturing environment
              </span>{" "}
              where every dancer can flourish.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  15+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Expert Instructors
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">500+ Students</span>
              </div>
               <motion.button
                                onClick={handleExplore}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-8 py-4 rounded-full font-semibold text-white shadow-xl cursor-pointer"
                                  style={{
                                    background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`
                                  }}
                                >
                                  Explore All Programs
                                </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-purple-600/20 z-10"></div>

              {/* Placeholder for dance image - replace src with actual image */}
              <img
                src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80"
                alt="Dance Academy"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-linear-to-br from-pink-400 to-purple-600 rounded-2xl -z-10 opacity-20"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
