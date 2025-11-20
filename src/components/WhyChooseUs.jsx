import { motion } from 'framer-motion';

const WhyChooseUs = ({ title, reasons }) => {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Custom content for Why Choose Us
  const customReasons = [
    {
      icon: "🏛️",
      title: "Legal & Resmi",
      description: "Kami mengutamakan legalitas dan jaminan bahwa perizinan diterbitkan resmi dari instansi yang berwenang."
    },
    {
      icon: "📋",
      title: "Berpengalaman",
      description: "Kami telah membantu 100+ perusahaan dalam perizinan mereka, sehingga menghindari risiko kegagalan dan biaya tak terduga."
    },
    {
      icon: "✅",
      title: "Efisiensi & Waktu",
      description: "Kami memastikan setiap proses perizinan dilakukan dengan cepat dan efisien."
    },
    {
      icon: "🛡️",
      title: "Terupdate",
      description: "Kami terus memantau perkembangan regulasi dan peraturan yang mungkin mempengaruhi bisnis Anda. Dengan informasi terkini, kami dapat memberikan saran yang tepat waktu dan relevan."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 text-white relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/ttd.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-yellow-400 text-sm lg:text-base italic mb-3 font-light">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Partner Konsultan Bisnis dan Perizinan<br />Terbaik di Indonesia
          </h2>
        </motion.div>

        {/* Cards Grid - 4 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {customReasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="text-center"
            >
              {/* Icon */}
              <div className="text-5xl lg:text-6xl mb-4 text-yellow-400">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
