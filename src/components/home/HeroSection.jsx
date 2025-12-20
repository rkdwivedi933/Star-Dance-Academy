import React, { useState, useEffect } from "react";
import { Play, ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import CountUP from "../latout/CountUP";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ZigZagText1 from "../latout/ZigZagText1";
const images = [
  "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1920&q=90",
  "https://images.unsplash.com/photo-1575140011062-adeaec7c6d95?w=1920&q=90",
  "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1920&q=90",
  "https://images.unsplash.com/photo-1597368457044-fd0c441b3038?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
];

const DanceAcademyHero = () => {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const handleEnrollButton = () => {
    navigate("enroll-now");
  };
  return (
    <div
      className="
    relative
    min-h-full sm:min-h-full
    text-white
    overflow-hidden
    bg-black

    px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
    py-1   sm:py-12 md:py-16 lg:py-2
  "
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`
        absolute inset-0
        bg-center bg-no-repeat mb-20 lg:mb-0
        transition-opacity duration-1000
        ${index === current ? "opacity-100" : "opacity-0"}

        bg-contain sm:bg-cover 
      `}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}

        <div className="absolute inset-0  bg-linear-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Decorative Elements */}

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-16 py-1"></nav>

      {/* Main Content */}
      <div className="relative z-10 px-4  lg:px-16  flex flex-col justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-7xl w-full ">
          <div className="max-w-2xl ">
            <div
              className="mb-6 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            ></div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              DANCE
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                ACADEMY
              </span>
            </h1>

            <p
              className="text-white text-lg md:text-xl mb-10 leading-relaxed max-w-xl opacity-0 animate-fadeInUp"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              From ballet to hip hop, modern to classical, we will help you
              become your inner artist.
            </p>

            <div
              className="flex flex-wrap  items-center gap-4 opacity-0  animate-fadeInUp"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=VIDEO_ID",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                onMouseEnter={() => setIsVideoHovered(true)}
                onMouseLeave={() => setIsVideoHovered(false)}
                className="group cursor-pointer flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-white rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Play
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                />

                {/*  ZigZag Text */}
                <span className="font-semibold overflow-hidden">
                  <ZigZagText1 text="Watch Video" />
                </span>
              </button>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer relative px-11 py-4 text-white rounded-full font-medium text-2xl shadow-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)`,
                }}
              >
                <span
                  onClick={handleEnrollButton}
                  className="relative z-10 flex items-center font-semibold text-base gap-2"
                >
                  <ZigZagText1 text="Enroll Now" />

                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>

                {/* Glow */}
                <motion.div
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        className="relative z-10 px-8 lg:px-16 pb-8  opacity-0  animate-fadeInUp"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-8 border-t border-gray-800 pt-8">
          <div className="flex items-center gap-12">
            <div>
              <div className="text-3xl font-bold text-primary">
                <CountUP end={500} />+
              </div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                <CountUP end={20} />+
              </div>
              <div className="text-sm text-gray-400">Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">
                <CountUP end={15} />+
              </div>
              <div className="text-sm text-gray-400">Dance Styles</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DanceAcademyHero;
