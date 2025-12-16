import { motion } from "framer-motion";

const float1 = {
  y: [0, -25, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const float2 = {
  y: [0, 20, 0],
  x: [0, -15, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const rotate1 = {
  rotate: [0, 360],
  transition: {
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  },
};

const rotate2 = {
  rotate: [0, -360],
  transition: {
    duration: 14,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function FloatingHeroImage() {
  return (
    <motion.div animate={float1} className="relative w-fit mx-auto">

      {/* MAIN IMAGE CARD */}
      <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl p-2">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/assets/hero/hero.jpg"
            alt="Dance class"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* FLOATING IMAGE 1 – top right */}
      <motion.img
        animate={float1}
        src="/assets/hero/shape1.png"
        className="absolute -top-10 -right-12 w-24 opacity-80"
      />

      {/* FLOATING IMAGE 2 – bottom left */}
      <motion.img
        animate={float2}
        src="/assets/hero/shape2.png"
        className="absolute -bottom-14 -left-14 w-32 opacity-60"
      />

      {/* ROTATING DECOR IMAGE 1 – subtle ring */}
      <motion.img
        animate={rotate1}
        src="/assets/hero/ring1.png"
        className="absolute top-1/2 -right-16 w-20 opacity-50"
      />

      {/* ROTATING DECOR IMAGE 2 – square */}
      <motion.img
        animate={rotate2}
        src="/assets/hero/square.png"
        className="absolute bottom-1/3 -left-10 w-16 opacity-60"
      />

    </motion.div>
  );
}
