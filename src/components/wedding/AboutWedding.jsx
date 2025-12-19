import React from "react";
import { motion } from "framer-motion";

const AboutWedding = () => {
  const fadeLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="py-20 md:py-20 px-4 md:px-8 bg-elegantLight">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div {...fadeLeft} className="order-2 md:order-1">
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 rounded-2xl opacity-20  transition-opacity duration-500 group-hover:opacity-30"></div>

              {/* Main image container */}
              <div className="relative rounded-xl overflow-hidden border-2 border-primary ">
                <img
                  src="https://images.unsplash.com/photo-1723816003393-ca6be8892dce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHdlZGRpbmclMjBjZWxlYnJhdGlvbiUyMGluZGlhfGVufDB8fDB8fHww   "
                  alt="Zumba Class in Action"
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating accent shape */}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div {...fadeRight} className="order-1 md:order-2">
            <div
              className="border-l-4 pl-6 md:pl-8"
              style={{ borderColor: "var(--color-primary)" }}
            >
              {/* Title with decorative element */}
              <div className="mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 mb-4 rounded-full"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                ></motion.div>

                <h2
                  className="text-2xl md:text-2xl lg:text-4xl font-bold mb-2"
                  style={{ color: "var(--color-elegantDark)" }}
                >
                  Personalized Couple Dance Training
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="h-0.5 w-32 mt-3 origin-left"
                  style={{
                    background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
                  }}
                ></motion.div>
              </div>

              {/* Content paragraphs */}
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base md:text-base font-semibold text-gray-700 leading-relaxed"
                >
                  Transform your special moments with expert choreography
                  designed exclusively for you. From intimate first dances to
                  grand sangeet performances, we create magic that lasts a
                  lifetime. Romantic Routines Beautifully crafted choreography
                  that celebrates your unique love story with grace and emotion.
                  Reception Ready Create memorable moments with elegant first
                  dance choreography for your wedding reception. Pre-Wedding
                  Shoots Picture-perfect dance sequences that bring magic to
                  your pre-wedding photography and videos.
                </motion.p>

                
              </div>

              {/* Highlight stats or features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--color-primary)" }}
              >
                <div className="flex  gap-6 md:gap-8">
                  <div>
                    <p
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      500+
                    </p>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Calories Burned
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      15M+
                    </p>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Global Participants
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-2xl md:text-3xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      100%
                    </p>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Fun Guaranteed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutWedding;
