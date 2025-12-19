import { motion } from "framer-motion";

const ZigZagText1 = ({ text }) => {
  return (
    <span className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -1, 0] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1, // 🔥 zig-zag
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default ZigZagText1;
