import { motion } from "framer-motion";
import { siteContent } from "../data/content";

const Hero = () => {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:min-h-[60vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen lg:h-[65vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-white py-20"
          >
            <p className="text-yellow-400 text-lg mb-4">
              {siteContent.company.tagline}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {hero.title}
            </h1>

            <motion.a
              href={hero.ctaLink}
              className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-4 rounded-md transition-all w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {hero.ctaText}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end justify-center lg:justify-end"
          >
            <img
              src={hero.heroImage}
              alt="Hero"
              className="max-w-full h-auto max-h-[80vh] object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
