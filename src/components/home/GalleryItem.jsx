import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Images } from "lucide-react";

// Lightbox Component
const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-6xl max-h-[90vh] md:max-h[40vh] mb-32"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-black/50 backdrop-blur-sm">
            {image.category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Gallery Images Data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1597368457044-fd0c441b3038?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFuY2UlMjB2ZWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Dance performance with vibrant energy",
    category: "Dance",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559189583-52ecf18461f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhbmNlJTIwdmVkaW98ZW58MHx8MHx8fDA%3D",
    alt: "Energetic Zumba fitness class",
    category: "Zumba",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1709059480517-a2bba843bda5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFuY2UlMjB2ZWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Beautiful wedding celebration moments",
    category: "Wedding",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556720095-a20f6b895f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhbmNlJTIwdmVkaW98ZW58MHx8MHx8fDA%3D",
    alt: "Contemporary dance choreography",
    category: "Dance",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1757748594542-f80a2239dbbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFuY2UlMjB2ZWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "High-energy Zumba workout session",
    category: "Zumba",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1757748594542-f80a2239dbbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFuY2UlMjB2ZWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Elegant wedding dance performance",
    category: "Wedding",
  },
];

// Gallery Item Component
const GalleryItem = ({ image, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(image)}
      style={{
        border: isHovered
          ? "2px solid var(--color-primary)"
          : "2px solid transparent",
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ scale: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <span
                className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                {image.category}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// Main Gallery Preview Component
const GalleryPreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const handleExploreGallery = () => {
    navigate("/gallery");
  };
  return (
    <div
      className="w-full px-4 py-12"
      style={{ background: "var(--color-elegantLight)" }}
    >
      {/* Section Heading */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-1 mx-auto mb-5 rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
          }}
        />
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
          <Images size={18} style={{ color: "var(--color-primary)" }} />
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-elegantDark)" }}
          >
            Gallery
          </span>
        </motion.div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          style={{ color: "var(--color-elegantDark)" }}
        >
          Gallery <span className="text-primary">Highlights</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Capturing moments of grace, energy, and celebration
        </p>
      </div>

      {/* Desktop Masonry Layout */}
      <div
        className="hidden  lg:grid lg:grid-cols-4 lg:grid-rows-2  gap-4 max-w-7xl mx-auto"
        style={{ height: "400px" }}
      >
        <GalleryItem
          image={galleryImages[0]}
          onClick={setSelectedImage}
          className="col-span-1 row-span-2"
        />
        <GalleryItem
          image={galleryImages[1]}
          onClick={setSelectedImage}
          className="col-span-1 row-span-1"
        />
        <GalleryItem
          image={galleryImages[2]}
          onClick={setSelectedImage}
          className="col-span-1 row-span-1"
        />
        <GalleryItem
          image={galleryImages[3]}
          onClick={setSelectedImage}
          className="col-span-1 row-span-2"
        />
        <GalleryItem
          image={galleryImages[4]}
          onClick={setSelectedImage}
          className="col-span-2 row-span-1"
        />
      </div>

      {/* Tablet Layout - 3 columns */}
     <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 max-w-5xl mx-auto auto-rows-fr">
  {galleryImages.map((image) => (
    <GalleryItem
      key={image.id}
      image={image}
      onClick={setSelectedImage}
      className="w-full h-full aspect-4/2"
    />
  ))}
</div>


 {/* Mobile Layout - single column */}
<div className="grid md:hidden grid-cols-1 gap-3 max-w-2xl mx-auto">
  {galleryImages.map((image) => (
    <GalleryItem
      key={image.id}
      image={image}
      onClick={setSelectedImage}
      className="h-[220px] sm:h-[260px]"
    />
  ))}
</div>



      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <motion.button
          onClick={handleExploreGallery}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full font-semibold text-white shadow-xl cursor-pointer"
          style={{
            background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
          }}
        >
          Explore All Programs
        </motion.button>
      </motion.div>
    </div>
  );
};

export default GalleryPreview;
