import { motion } from "framer-motion";
import { Heart, Music, Sparkles, Camera } from "lucide-react";

const CoupleDanceInfo = () => {
  const features = [
    {
      icon: Heart,
      title: "Romantic Routines",
      description:
        "Beautifully crafted choreography that celebrates your unique love story with grace and emotion.",
    },

    
    {
      icon: Music,
      title: "Reception Ready",
      description:
        "Create memorable moments with elegant first dance choreography for your wedding reception.",
    },
    {
      icon: Camera,
      title: "Pre-Wedding Shoots",
      description:
        "Picture-perfect dance sequences that bring magic to your pre-wedding photography and videos.",
    },
  ];

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <style>{`
        @theme {
          --color-primary: #f6466c;
          --color-secondary: #f28b00;
          --color-elegantDark: #1a1a1a;
          --color-elegantLight: #faf7f4;
        }
      `}</style>

      <section
        className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-elegantLight)" }}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.04, 0.06, 0.04],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, var(--color-primary), transparent)`,
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.04, 0.07, 0.04],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, var(--color-secondary), transparent)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeLeft}
              className="space-y-5"
            >
              

              {/* Heading */}
              <div>
                <h2
                  className="text-2xl sm:text-4xl lg:text-4xl font-medium mb-4 leading-tight"
                  style={{ color: "var(--color-elegantDark)" }}
                >
                  Personalized
                </h2>
                <h2
                  className="text-2xl sm:text-4xl lg:text-4xl font-medium leading-tight"
                  style={{
                    background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Couple Dance Training
                </h2>
              </div>

              <p className="text-base sm:text-base text-gray-700 leading-relaxed max-w-xl">
                Transform your special moments with expert choreography designed
                exclusively for you. From intimate first dances to grand sangeet
                performances, we create magic that lasts a lifetime.
              </p>

              {/* Features List */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-4"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemFade}
                      whileHover={{ x: 10 }}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className="shrink-0">
                        <div
                          className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl"
                          style={{
                            background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                          }}
                        >
                          <Icon className="text-white" size={22} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-semibold mb-2 transition-colors duration-300"
                          style={{
                            color: "var(--color-elegantDark)",
                          }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

             
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              ></motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeRight}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden"
               
              >
                {/* Gradient Overlay */}
               

                {/* Image with Romantic Illustration */}
                <div
                  className="aspect-4/5 flex items-center justify-center relative overflow-hidden"
                
                >
                  {/* Enhanced Dancing Couple SVG */}
                  {/* Wedding Image */}
                  <div className="aspect-4/5 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1591604442449-ecc9943efabf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZGUlMjBhbmQlMjBncm9vbXxlbnwwfHwwfHx8MA%3D%3D" // <-- apni wedding image ka path
                      alt="Wedding Couple"
                      className="w-full h-[650px] rounded-3xl border-4 border-primary  object-cover"
                    />
                  </div>
                </div>

                    
              </motion.div>

             

              {/* Decorative Dots Pattern */}
              
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoupleDanceInfo;
