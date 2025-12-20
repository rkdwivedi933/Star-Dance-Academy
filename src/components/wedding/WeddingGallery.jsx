import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, X } from "lucide-react";

export default function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1550784718-990c6de52adf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      alt: "Sangeet celebration",

      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      alt: "Wedding ceremony",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      alt: "Couple's first dance",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1519175182139-86e3bc09d7fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      alt: "Wedding decor",

      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
      alt: "Bride and groom portrait",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
      alt: "Group dance performance",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <div
      className="min-h-full py-20 p-4 bg-gray-100"
   
    >
      

      <div className="max-w-7xl mx-auto">
        {/* Elegant Heading */}
        <div className="text-center mb-16">
          <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="w-20 h-1 mx-auto mb-4 rounded-full"
                      style={{ 
                        background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`
                      }}
                    />
          <div className="flex justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))",
                borderColor: "var(--color-primary)",
              }}
            >
              <Image size={18} style={{ color: "var(--color-primary)" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-elegantDark)" }}
              >
                Gallery
              </span>
            </motion.div>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-4 inline-block"
            style={{ color: "var(--color-elegantDark)" }}
          >
            Wedding <span className="text-primary">Gallery</span>
          </h1>
          
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Capturing magical moments and unforgettable celebrations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.span}`}
              style={{
                boxShadow:
                  "0 0 20px rgba(246, 70, 108, 0.2), 0 0 30px rgba(242, 139, 0, 0.15)",
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white z-10"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[90vh] relative"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="rounded-xl max-h-[90vh] w-auto max-w-full object-contain"
              />
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
