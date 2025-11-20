import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const QuotationForm = ({ title, subtitle, whatsappNumber }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  // Format pesan untuk WhatsApp
  const formatQuotationMessage = (formData) => {
    const { nama, email, telepon, pesan } = formData;
    
    const message = `Halo, saya ingin request quotation:

*Nama:* ${nama}
*Email:* ${email}
*Telepon:* ${telepon}

*Pesan/Kebutuhan:*
${pesan}

Terima kasih!`;

    return message;
  };

  // Kirim ke WhatsApp
  const sendToWhatsApp = (number, formData) => {
    try {
      const message = formatQuotationMessage(formData);
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${number}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      return true;
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      return false;
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Kirim ke WhatsApp
      const success = sendToWhatsApp(whatsappNumber, data);
      
      if (success) {
        setSubmitSuccess(true);
        // Reset form setelah 2 detik
        setTimeout(() => {
          reset();
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="quotation" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
        >
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={formVariants}
            className="space-y-6"
          >
            {/* Nama Lengkap */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nama"
                {...register('nama', {
                  required: 'Nama lengkap wajib diisi',
                  minLength: {
                    value: 3,
                    message: 'Nama minimal 3 karakter'
                  }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.nama ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Masukkan nama lengkap Anda"
              />
              {errors.nama && (
                <p className="mt-1 text-sm text-red-600">{errors.nama.message}</p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format email tidak valid'
                  }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="nama@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </motion.div>

            {/* Nomor Telepon */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telepon"
                {...register('telepon', {
                  required: 'Nomor telepon wajib diisi',
                  pattern: {
                    value: /^(\+62|62|0)[0-9]{9,12}$/,
                    message: 'Format nomor telepon tidak valid (contoh: 081234567890)'
                  }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.telepon ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="081234567890"
              />
              {errors.telepon && (
                <p className="mt-1 text-sm text-red-600">{errors.telepon.message}</p>
              )}
            </motion.div>

            {/* Pesan/Deskripsi Kebutuhan */}
            <motion.div variants={fieldVariants}>
              <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                Pesan/Deskripsi Kebutuhan <span className="text-red-500">*</span>
              </label>
              <textarea
                id="pesan"
                rows="5"
                {...register('pesan', {
                  required: 'Pesan wajib diisi',
                  minLength: {
                    value: 10,
                    message: 'Pesan minimal 10 karakter'
                  }
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                  errors.pesan ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ceritakan kebutuhan Anda secara detail..."
              />
              {errors.pesan && (
                <p className="mt-1 text-sm text-red-600">{errors.pesan.message}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fieldVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                whileHover={{ scale: isSubmitting || submitSuccess ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || submitSuccess ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  submitSuccess
                    ? 'bg-green-500 hover:bg-green-600'
                    : isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {submitSuccess ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Berhasil! Membuka WhatsApp...
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Mengirim...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Kirim via WhatsApp
                  </span>
                )}
              </motion.button>
            </motion.div>

            {/* Info Text */}
            <motion.p variants={fieldVariants} className="text-sm text-gray-500 text-center">
              Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan dengan tim kami.
            </motion.p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotationForm;
