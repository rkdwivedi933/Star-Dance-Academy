import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { useEffect, useState } from "react";

export default function AnimatedImageCards() {
  const [x, setX] = useState(0);

  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1710064057043-d301e344e348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlwJTIwaG9wfGVufDB8fDB8fHww",
      rotate: 6,
      title: "Hip Hop",
    },
    {
      src: "https://images.unsplash.com/photo-1589363348124-582889525c57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rotate: -10,
      title: "Bollywood",
    },
    {
      src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGVtcG9yYXJ5JTIwZGFuY2V8ZW58MHx8MHx8fDA%3D",
      rotate: 6,
      title: "Contemporary",
    },
    {
      src: "https://images.unsplash.com/photo-1653155775998-3e3d764337a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      rotate: -10,
      title: "Locking",
    },
    {
      src: "https://images.unsplash.com/photo-1648154164366-d067faecdc51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rotate: 6,
      title: "Popping",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1680301434373-01ed1edd6f33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rotate: -10,
      title: "House",
    },
  ];

  // ✅ PURE AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => {
        if (prev <= -images.length * 340) {
          return 0;
        }
        return prev - 1.2; // speed
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col py-20 items-center bg-gray-100 gap-14">
      {/* Heading */}
      <div className="text-center px-6">
        <div className="w-20 h-1 mx-auto mb-5 rounded-full bg-linear-to-r from-primary to-secondary" />

        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5
                        bg-linear-to-br from-primary/10 to-secondary/10 border-primary">
          <Images size={18} className="text-primary" />
          <span className="text-sm font-semibold text-zinc-800">
            Styles
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-3 text-zinc-900">
          Dance <span className="text-primary">Styles</span>
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Capturing moments of grace, energy, and celebration
        </p>
      </div>

      {/* AUTO SLIDER */}
      <div className="w-full max-w-7xl  px-6">
        <motion.div
          style={{ x }}
          className="flex gap-12"
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="relative group min-w-[300px] "
            >
             

              <motion.div
                className="relative bg-white rounded-full overflow-hidden "
                style={{ rotate: img.rotate }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative aspect-3/4 overflow-hidden">
                  <motion.img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 p-6 ml-17">
                    <h3 className="text-white text-2xl font-bold">
                      {img.title}
                    </h3>
                    <div className="w-12 h-1 mt-2 rounded-full bg-linear-to-r from-primary to-secondary" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
