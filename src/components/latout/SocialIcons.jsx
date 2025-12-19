import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function SocialIcons() {
  const icons = [
    { Icon: Instagram },
    { Icon: Facebook },
    { Icon: Youtube },
  ];

  return (
    <div className="flex items-center gap-4">
      {icons.map(({ Icon }, index) => (
        <motion.a
          key={index}
          href="#"
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-black"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: icons.length * 0.4 - 0.6,
            delay: index * 0.4, // 🔥 one by one bounce
          }}
          whileHover={{ scale: 1.15 }}
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
}
