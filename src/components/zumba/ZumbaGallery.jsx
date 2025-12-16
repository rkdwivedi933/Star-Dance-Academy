import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Image, X, ZoomIn } from 'lucide-react';

export default function ZumbaGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'https://plus.unsplash.com/premium_photo-1681492501033-38a4b2887a8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8enVtYmF8ZW58MHx8MHx8fDA%3D', alt: 'Zumba Dance Session 1', tall: true },
    { id: 2, src: 'https://media.istockphoto.com/id/950806258/photo/fitness-group.webp?a=1&b=1&s=612x612&w=0&k=20&c=M19ioQJHHpRRSkBJgpperXEe3kmkjHsp2s0U9js_svU=', alt: 'Zumba Dance Session 2', tall: false },
    { id: 3, src: 'https://media.istockphoto.com/id/1098211914/photo/people-training-at-dance-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=CZ7hExuQhaEPx0uNi2hLyhdHta60-ktw5rtHu5Ig0rQ=', alt: 'Zumba Dance Session 3', tall: false },
    { id: 4, src: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8enVtYmF8ZW58MHx8MHx8fDA%3D', alt: 'Zumba Dance Session 4', tall: true },
    { id: 5, src: 'https://plus.unsplash.com/premium_photo-1663054933667-fb307cea9aab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8enVtYmF8ZW58MHx8MHx8fDA%3D', alt: 'Zumba Dance Session 5', tall: false},
        { id: 6, src: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVtYmF8ZW58MHx8MHx8fDA%3D', alt: 'Zumba Dance Session 4', tall: false },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="w-full min-h-full px-4 py-10 bg-linear-to-br bg-elegantLight">
     

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center">
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
    <Image size={18} style={{ color: 'var(--color-primary)' }} />
    <span
      className="text-sm font-semibold"
      style={{ color: 'var(--color-elegantDark)' }}
    >
      Moments
    </span>
  </motion.div>
</div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Zumba <span className='text-primary'>Moments</span> 
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}></div>
          <p className="mt-4 text-gray-600 text-lg">Capturing the energy and joy of our dance sessions</p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg ${
                image.tall ? 'row-span-2' : ''
              } ${image.wide ? 'col-span-2 md:col-span-3 lg:col-span-4' : ''}`}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover ${
                    image.tall ? 'h-107 md:h-[550px] ' : image.wide ? 'h-64 md:h-70' : 'h-51 md:h-68 '
                  }`}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/e74c3c/white?text=Zumba+${image.id}`;
                  }}
                />

                {/* Dark Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Zoom Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-full p-3 shadow-xl">
                    <ZoomIn className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                </motion.div>

                
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 p-3 bg-primary rounded-full shadow-xl hover:bg-secondary  transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-2xl md:mb-60 lg:mb-20 max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-xl shadow-2xl"
                onError={(e) => {
                  e.target.src = `https://placehold.co/800x600/e74c3c/white?text=Zumba+${selectedImage.id}`;
                }}
              />

              {/* Image Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black to-transparent rounded-b-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-2"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      Zumba
                    </span>
                    <p className="text-white text-lg font-semibold">{selectedImage.alt}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}