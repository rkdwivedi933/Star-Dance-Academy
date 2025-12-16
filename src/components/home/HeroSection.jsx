
import { motion } from "framer-motion";
import {  Sparkles } from "lucide-react";
import vedio1 from "../../assets/herosection/vedio2.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const decorativeCircleFloat = {
    y: [0, -15, 0],
    x: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
const navigate = useNavigate();
const handleEnroll = () =>{
  navigate('/enroll-now')
}

  return (
  
    <section
  className="relative w-full min-h-screen flex items-center overflow-hidden "
  style={{
    backgroundImage: `
      linear-gradient(
        135deg,
        rgba(246, 70, 108, 0.85),
        rgba(242, 139, 0, 0.85)
      ),
      url("https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        
        style={{ background: "var(--color-elegantLight)" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "var(--color-elegantLight)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN (ORDER FIRST ON MOBILE) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white space-y-6 lg:space-y-8 z-10 order-1 lg:order-0"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Welcome to Star Dance</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-2xl"
            >
              Dance Your Way <br /> to Greatness{" "}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl"
            >
              Discover the art of movement at Star Dance Academy. From classical
              ballet to contemporary styles, unlock your potential with expert
              instructors and a passionate community.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                        onClick={handleEnroll}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 rounded-full font-semibold text-white shadow-xl cursor-pointer"
                          style={{
                            background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`
                          }}
                        >
                          Enroll Now
                        </motion.button>

              
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-white/80">Expert Trainers</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-white/80">Dance Styles</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (ORDER SECOND ON MOBILE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative z-10 order-2 lg:order-0"
          >
            <motion.div animate={floatingAnimation} className="relative">
              {/* Glass Card Container */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl p-2">
                <div className="rounded-2xl overflow-hidden">
                  <video
                    src={vedio1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover overflow-hidden"
                  />
                </div>
              </div>

              <motion.div
                animate={decorativeCircleFloat}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl opacity-60"
                style={{ background: "var(--color-elegantLight)" }}
              />

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-50"
                style={{ background: "var(--color-secondary)" }}
              />

              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute top-1/2 -right-12 w-20 h-20 border-4 border-white/20 rounded-full"
              />

              <motion.div
                animate={{
                  rotate: [0, -360],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute bottom-1/4 -left-8 w-16 h-16 border-4 border-white/30 rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 120"
    className="w-full h-auto block -mb-px"
    preserveAspectRatio="none"
  >
    <path
      d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      fill="var(--color-elegantLight)"
    />
  </svg>
</div>

    </section>
  );
};

export default HeroSection;
