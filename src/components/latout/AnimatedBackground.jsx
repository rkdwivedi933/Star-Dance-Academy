import { motion } from "framer-motion";
import { Music, Guitar } from "lucide-react";

export default function AnimatedBackground() {
  const items = [
    // TOP
    { Icon: Music, className: "top-10 left-10 text-primary" },
    { Icon: Guitar, className: "top-10 right-10 text-secondary" },

    // MIDDLE
    {
      Icon: Music,
      className: "left-12 top-1/2 -translate-y-1/2 text-secondary",
    },
    {
      Icon: Guitar,
      className: "right-12 top-1/2 -translate-y-1/2 text-primary",
    },

    // BOTTOM
    { Icon: Music, className: "bottom-10 left-10 text-primary" },
    { Icon: Guitar, className: "bottom-10 right-10 text-secondary" },

    // EXTRA SOFT
    { Icon: Music, className: "top-1/3 right-1/3 text-primary" },
    { Icon: Guitar, className: "bottom-1/3 left-1/3 text-secondary" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.className}`}
          initial={{ opacity: 0.4 }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: 6 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: "drop-shadow(0 0 12px currentColor)",
          }}
        >
          <item.Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
}
