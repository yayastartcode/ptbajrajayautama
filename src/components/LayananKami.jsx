import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

const LayananKami = ({ title, divisions, whatsappNumber }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const createSlug = (service) => {
    return service
      .toLowerCase()
      .replace(/[():,]/g, '') // Remove colons, parentheses, and commas
      .replace(/\s+/g, '-')    // Replace spaces with hyphens
      .replace(/-+/g, '-')     // Replace multiple hyphens with single hyphen
      .trim();
  };

  const createWhatsAppLink = (service) => {
    const message = `Halo, saya ingin bertanya tentang layanan ${service}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const truncateText = (text, maxWords = 50) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  const getServiceExcerpt = (service) => {
    const slug = createSlug(service);
    const serviceDetail = siteContent.serviceDetails?.[slug];
    return serviceDetail?.description || '';
  };

  return (
    <section id="services" className="py-16 lg:py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
      backgroundImage: `
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 35px,
          rgba(255,255,255,.5) 35px,
          rgba(255,255,255,.5) 70px
        )
      `
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold italic mb-2" style={{ color: '#D4AF37' }}>
            {title}
          </h2>
        </motion.div>

        {divisions.map((division, divIndex) => (
          <div key={divIndex} className="mb-16 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl lg:text-3xl font-semibold text-gray-800 text-center mb-8"
            >
              {division.name}
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {division.items.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {service}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
                    {truncateText(getServiceExcerpt(service), 50)}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/layanan/${createSlug(service)}`}
                      className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      Lihat Detail
                    </Link>
                    <a
                      href={createWhatsAppLink(service)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LayananKami;
