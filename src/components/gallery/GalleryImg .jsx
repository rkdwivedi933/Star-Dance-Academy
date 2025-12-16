import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, Heart, Share2, Film, X } from 'lucide-react';

/* ================= LIGHTBOX ================= */
const VideoLightbox = ({ video, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.85 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white "
          >
            <X />
          </button>

          <video
            src={video}
            autoPlay
            loop
            muted
            controls
            playsInline
            className="w-full rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ================ GALLERY ITEM ================= */
const GalleryImage = ({ image, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.div
        
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setOpen(true)}
        className={`${image.span} relative overflow-hidden rounded-2xl cursor-pointer`}
        style={{
          boxShadow: isHovered
            ? '0 20px 60px rgba(242,139,0,.3)'
            : '0 8px 32px rgba(246,70,108,.08)',
          border: isHovered
            ? '2px solid rgba(242,139,0,.6)'
            : '1px solid rgba(246,70,108,.12)',
        }}
      >
        {/* VIDEO */}
        <motion.div
          className="relative w-full h-full overflow-hidden"
          animate={{ scale: isHovered ? 1.15 : 1 }}
        >
          <video
            src={image.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Center Actions */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="flex gap-3">
            <button className="p-3 bg-white rounded-full">
              <ZoomIn />
            </button>
           
          </div>
        </motion.div>
      </motion.div>

      {open && <VideoLightbox video={image.url} onClose={() => setOpen(false)} />}
    </>
  );
};

/* ================= MAIN PAGE ================= */
const GalleryImg = () => {
 const galleryImages = [
  {
    id: 1,
    url: "https://www.pexels.com/download/video/7975413.mp4",
    category: "Dance Academy",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 2,
    url: "https://www.pexels.com/download/video/6332464.mp4",
    category: "Wedding Couple",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    url: "https://www.pexels.com/download/video/8955363.mp4",
    category: "Zumba",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    url: "https://www.pexels.com/download/video/8503574.mp4",
    category: "Dance Show",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 5,
    url: "https://www.pexels.com/download/video/3873059.mp4",
    category: "Stage Performance",
    span: "md:col-span-2 md:row-span-1"
  }
];


const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-10 px-4 bg-elegantLight">
      <div >
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
                <Film size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-elegantDark)' }}>
                  Album
                </span>
              </motion.div>


          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"><span>Our</span> <span className='text-primary'>Album</span></h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Explore moments of love, joy, and celebration captured in stunning detail</p>
        </motion.div>

        
      </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <GalleryImage key={image.id} image={image} index={index} />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryImg;
