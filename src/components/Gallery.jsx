import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  // Array of gallery images
  const images = [
    '/images/img/bjgl1.jpeg',
    '/images/img/bjgl2.jpeg',
    '/images/img/bjgl3.jpeg',
    '/images/img/bjgl4.jpeg',
    '/images/img/bjgl5.jpeg',
    '/images/img/bjgl6.jpeg',
    '/images/img/bjgl7.jpeg',
    '/images/img/bjgl8.jpeg',
    '/images/img/bjgl9.jpeg',
    '/images/img/bjgl10.jpeg',
    '/images/img/bjgl11.jpeg',
  ];

  const video = '/images/bjvideo.mp4';

  const openLightbox = (media, type) => {
    setSelectedMedia(media);
    setSelectedType(type);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setSelectedType(null);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Galeri Proyek Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dokumentasi proyek-proyek yang telah kami kerjakan dengan
            profesional dan berkualitas
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Video Item - Takes 2 columns on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg group cursor-pointer aspect-video"
            onClick={() => openLightbox(video, 'video')}
          >
            <video
              src={video}
              className="w-full h-full object-cover"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8"
                  style={{ color: '#D4AF37' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white font-semibold text-lg">Video Proyek</p>
            </div>
          </motion.div>

          {/* Image Items */}
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer aspect-square"
              onClick={() => openLightbox(image, 'image')}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    style={{ color: '#D4AF37' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <svg
                className="w-6 h-6 text-white"
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

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-7xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedType === 'image' ? (
                <img
                  src={selectedMedia}
                  alt="Gallery preview"
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <video
                  src={selectedMedia}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-lg"
                />
              )}
            </motion.div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              Klik di luar untuk menutup
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
