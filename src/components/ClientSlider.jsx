import { motion } from 'framer-motion';

const ClientSlider = () => {
  // Array of client logos
  const clientLogos = [
    '/images/clients/bajra1.png',
    '/images/clients/bajra2.png',
    '/images/clients/bajra3.png',
    '/images/clients/bajra4.png',
    '/images/clients/bajra5.png',
    '/images/clients/bajra6.png',
    '/images/clients/bajra7.png',
    '/images/clients/bajra8.png',
    '/images/clients/bajra9.png',
    '/images/clients/bajra10.png',
    '/images/clients/bajra11.png',
    '/images/clients/bajra12.png',
    '/images/clients/bajra13.png',
    '/images/clients/bajra14.png',
    '/images/clients/bajra15.png',
    '/images/clients/bajra16.png',
  ];

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Klien Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dipercaya oleh berbagai perusahaan terkemuka di Indonesia
          </p>
        </motion.div>

        {/* Infinite Slider Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Slider Track */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 lg:gap-16"
              animate={{
                x: [0, -100 * clientLogos.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 w-32 h-24 lg:w-40 lg:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 w-32 h-24 lg:w-40 lg:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats or Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-lg">
            <span className="font-bold text-2xl" style={{ color: '#D4AF37' }}>
              100+
            </span>{' '}
            <span className="text-gray-700">Proyek Berhasil Diselesaikan</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSlider;
