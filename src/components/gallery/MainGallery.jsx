import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';

import { ZoomIn, Images , X, ChevronLeft, ChevronRight } from 'lucide-react';

const MainGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1635164055506-0b7d67505d64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwcGxlJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D',
      category: 'Venues',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&q=90',
      category: 'Florals',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=90',
      category: 'Details',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=90',
      category: 'Ceremony',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1600&q=90',
      category: 'Cake',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=90',
      category: 'Bouquet',
      span: 'md:col-span-2 md:row-span-1'
    }
  ];

  /* ===================== NEW: LIGHTBOX STATE ===================== */
  const [lightboxIndex, setLightboxIndex] = React.useState(null);
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const nextImage = () => setLightboxIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  React.useEffect(() => {
    if (lightboxIndex !== null) {
      const onKey = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      };
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = '';
      };
    }
  }, [lightboxIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const GalleryGrid = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [hoveredId, setHoveredId] = React.useState(null);

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px] shrink "
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className={`${image.span} relative overflow-hidden rounded-2xl group cursor-pointer `}
            style={{ boxShadow: '0 8px 32px rgba(246, 70, 108, 0.08)', border: '1px solid rgba(246, 70, 108, 0.12)' }}
            onHoverStart={() => setHoveredId(image.id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.url}
              alt={image.category}
              className="w-full h-full  object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
              loading="lazy"
            />

            {/* Glass overlay */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backdropFilter: 'blur(2px)' }}
            />

            {/* Content overlay */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={false}
              animate={hoveredId === image.id ? { opacity: 1 } : { opacity: 0 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={hoveredId === image.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                  <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>{image.category}</span>
                </div>

                <div className="flex gap-3 justify-center">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all">
                    <ZoomIn className="w-5 h-5" style={{ color: 'var(--color-elegantDark)' }} />
                  </motion.button>
                 
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative py-10 md:py-10 lg:py-32 px-4 md:px-8 lg:px-16 overflow-hidden bg-elegantLight">
     

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-16 md:mb-20">
         
      
  <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg border mb-5"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(246, 70, 108, 0.1), rgba(242, 139, 0, 0.1))',
                  borderColor: 'var(--color-primary)'
                }}
              >
                <Images size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Gallery
                </span>
              </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"><span>Our</span> <span className='text-primary'>Gallery</span></h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Explore moments of love, joy, and celebration captured in stunning detail</p>
        </motion.div>

        <GalleryGrid />
      </div>

      {/* ===================== NEW: LIGHTBOX UI ===================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.img
              key={galleryImages[lightboxIndex].url}
              src={galleryImages[lightboxIndex].url}
              alt="Preview"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[92vw] max-h-[78vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Controls */}
            <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-6 right-6 p-3 rounded-full bg-primary hover:bg-secondary transition">
              <X className="w-6 h-6 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-6 p-3 rounded-full bg-primary hover:bg-secondary transition">
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-6 p-3 rounded-full bg-primary hover:bg-secondary transition">
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MainGallery;