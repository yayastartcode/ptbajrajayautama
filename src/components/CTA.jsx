import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CTA = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section 
      id="cta" 
      className="relative py-16 lg:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: 'url(/images/herobg.jpg)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      <motion.div 
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 mb-8 lg:mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        {/* CTA Button with pulse animation */}
        <motion.a
          href={buttonLink}
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 10px 25px rgba(255, 255, 255, 0.3)",
              "0 10px 35px rgba(255, 255, 255, 0.5)",
              "0 10px 25px rgba(255, 255, 255, 0.3)"
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
};

CTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired
};

export default CTA;
