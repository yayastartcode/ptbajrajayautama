import { motion } from "framer-motion";

const Footer = ({ footerData }) => {
  const {
    companyName,
    tagline,
    address,
    phone,
    email,
    quickLinks,
    socialMedia,
    copyright,
  } = footerData;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-xl font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400 text-sm mb-4">{tagline}</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>{address}</span>
              </p>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white text-xl font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white text-xl font-bold mb-4">Hubungi Kami</h3>
            <div className="space-y-3 text-sm mb-6">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {phone}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {email}
                </a>
              </p>
            </div>

            {/* Social Media Links */}
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            {copyright.replace("2024", currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
