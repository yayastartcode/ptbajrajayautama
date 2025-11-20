/**
 * WhatsApp Integration Utility
 * Fungsi untuk memformat dan mengirim pesan ke WhatsApp
 */

/**
 * Format pesan quotation untuk WhatsApp
 * @param {Object} formData - Data dari form quotation
 * @returns {string} Formatted message untuk WhatsApp
 */
export function formatQuotationMessage(formData) {
  const { nama, email, telepon, layanan, pesan } = formData;
  
  const message = `Halo, saya ingin request quotation:

*Nama:* ${nama}
*Email:* ${email}
*Telepon:* ${telepon}
*Layanan yang Diminati:* ${layanan}

*Pesan/Kebutuhan:*
${pesan}

Terima kasih!`;

  return message;
}

/**
 * Buka WhatsApp dengan pesan yang sudah terformat
 * @param {string} whatsappNumber - Nomor WhatsApp tujuan (format: 628xxxxxxxxxx)
 * @param {Object} formData - Data dari form quotation
 * @returns {boolean} True jika berhasil membuka WhatsApp, false jika gagal
 */
export function sendToWhatsApp(whatsappNumber, formData) {
  try {
    // Format pesan
    const message = formatQuotationMessage(formData);
    
    // Encode message untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    // Buat WhatsApp URL
    // Format: https://wa.me/628xxxxxxxxxx?text=encoded_message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab/window baru
    window.open(whatsappUrl, '_blank');
    
    return true;
  } catch (error) {
    console.error('Error opening WhatsApp:', error);
    return false;
  }
}

/**
 * Validasi format nomor WhatsApp
 * @param {string} number - Nomor WhatsApp untuk divalidasi
 * @returns {boolean} True jika format valid
 */
export function isValidWhatsAppNumber(number) {
  // Format yang valid: 628xxxxxxxxxx (dimulai dengan 62, minimal 10 digit setelah 62)
  const whatsappRegex = /^62\d{9,13}$/;
  return whatsappRegex.test(number);
}

/**
 * Format nomor telepon Indonesia ke format WhatsApp
 * @param {string} phoneNumber - Nomor telepon (berbagai format)
 * @returns {string} Nomor dalam format WhatsApp (628xxxxxxxxxx)
 */
export function formatPhoneToWhatsApp(phoneNumber) {
  // Hapus semua karakter non-digit
  let cleaned = phoneNumber.replace(/\D/g, '');
  
  // Jika dimulai dengan 0, ganti dengan 62
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.substring(1);
  }
  
  // Jika dimulai dengan 8, tambahkan 62 di depan
  if (cleaned.startsWith('8')) {
    cleaned = '62' + cleaned;
  }
  
  // Jika dimulai dengan +62, hapus +
  if (cleaned.startsWith('+62')) {
    cleaned = cleaned.substring(1);
  }
  
  return cleaned;
}

/**
 * Buat link WhatsApp langsung (untuk tombol CTA)
 * @param {string} whatsappNumber - Nomor WhatsApp tujuan
 * @param {string} defaultMessage - Pesan default (optional)
 * @returns {string} WhatsApp URL
 */
export function createWhatsAppLink(whatsappNumber, defaultMessage = '') {
  const encodedMessage = defaultMessage ? encodeURIComponent(defaultMessage) : '';
  return `https://wa.me/${whatsappNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}
