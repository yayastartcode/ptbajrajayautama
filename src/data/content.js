// Website content dalam Bahasa Indonesia
import serviceDetailsData from "./serviceDetails.json";

export const siteContent = {
  company: {
    name: "PT Bajra Jaya Konstruksi",
    tagline: "Layanan Perizinan Terpercaya, Tersedia di Seluruh Indonesia",
    whatsappNumber: "6285888695439", // Format: 628xxxxxxxxxx (tanpa +)
  },

  hero: {
    title: "Partner Konsultan Bisnis dan Perizinan Terbaik di Indonesia",
    subtitle: "Partner Konsultan Bisnis dan Perizinan Terbaik di Indonesia.",
    ctaText: "Konsultasi Gratis",
    ctaLink: "#quotation",
    heroImage: "/images/hr2.png",
    backgroundImage: "/images/herobg.jpg",
  },

  about: {
    title: "Tentang Kami",
    description:
      "PT Bajra Jaya Konstruksi dibentuk oleh tim profesional yang berpengalaman dan berdedikasi untuk membantu para pelaku usaha melewati setiap tahap proses perizinan agar lebih efisien dan tanpa stres. Dengan pengalaman kami lebih dari 10 tahun, dan kami selalu update tentang aturan dan persyaratan hukum, PT Bajra Jaya Konstruksi juga siap mendukung Anda dalam bidang konstruksi bangunan dan kami bisa diandalkan.",
    image: "/images/csa.jpg",
    stats: [
      { label: "Tahun Pengalaman", value: "10+" },
      { label: "Klien Puas", value: "500+" },
      { label: "Project Selesai", value: "1000+" },
      { label: "Tim Profesional", value: "50+" },
    ],
  },

  whyChooseUs: {
    title: "Mengapa Memilih Kami",
    reasons: [
      {
        icon: "⚡",
        title: "Cepat & Efisien",
        description:
          "Kami menyelesaikan setiap project tepat waktu dengan proses yang efisien dan terstruktur, memastikan bisnis Anda tidak terganggu.",
      },
      {
        icon: "💎",
        title: "Kualitas Terjamin",
        description:
          "Standar kualitas tinggi di setiap project dengan testing menyeluruh dan quality assurance yang ketat untuk hasil terbaik.",
      },
      {
        icon: "🤝",
        title: "Tim Profesional",
        description:
          "Tim berpengalaman dan bersertifikat yang siap memberikan solusi terbaik sesuai kebutuhan bisnis Anda dengan pendekatan personal.",
      },
      {
        icon: "💰",
        title: "Harga Kompetitif",
        description:
          "Solusi berkualitas dengan harga yang kompetitif dan transparan. Tidak ada biaya tersembunyi, semua jelas dari awal.",
      },
      {
        icon: "🔒",
        title: "Keamanan Terjamin",
        description:
          "Keamanan data dan sistem Anda adalah prioritas utama kami dengan implementasi best practices security di setiap project.",
      },
      {
        icon: "📞",
        title: "Support 24/7",
        description:
          "Dukungan teknis yang responsif dan siap membantu Anda kapan saja untuk memastikan sistem berjalan lancar.",
      },
    ],
  },

  services: {
    title: "Layanan Kami",
    divisions: [
      {
        name: "Divisi Perijinan",
        items: [
          "Legalitas Perusahaan (Akte Pendirian dan Perubahan)",
          "Sertifikat Badan Usaha (SBUJK)",
          "SKK Konstruksi",
          "SERKOM ESDM",
          "Audit Akuntan Publik",
          "Penyewaan Alat SIMPK PUPR",
          "ISO 37001 : 2016 SMAP",
          "NIB, PKKPR dan Sertifikat Standar",
          "TKDN",
          "SNI",
          "SKUP MIGAS",
          "IUJP",
          "AMDAL",
          "PENGAWAS OPERASIONAL PERTAMBANGAN (POP)",
          "LKPM (Laporan Kegiatan)",
          "SMK3 KEMNAKER",
          "AHLI K3 KEMNAKER",
        ],
      },
      {
        name: "Divisi Konstruksi",
        items: [
          "Cut and Fill",
          "Jasa Galian Telekomunikasi, Jaringan Gas, PDAM dan PLN",
          "Konstruksi Gedung",
          "Konstruksi Sipil",
        ],
      },
    ],
  },

  // Service details now loaded from separate JSON file for easier editing
  serviceDetails: serviceDetailsData,

  quotation: {
    title: "Request Quotation",
    subtitle:
      "Isi form di bawah untuk mendapatkan penawaran harga dan konsultasi gratis dari tim kami",
    serviceOptions: [
      "Pengembangan Website",
      "Aplikasi Mobile",
      "Sistem Enterprise",
      "Cloud Solutions",
      "UI/UX Design",
      "Maintenance & Support",
      "Konsultasi IT",
      "Lainnya",
    ],
  },

  cta: {
    title: "Butuh bantuan??",
    description: "Diskusikan kebutuhan Anda dengan tim kami sekarang.",
    buttonText: "Hubungi Sekarang",
    buttonLink: "#quotation",
  },

  footer: {
    companyName: "PT Bajra Jaya Konstruksi",
    tagline: "Partner Konsultan Bisnis dan Perizinan Terbaik di Indonesia",
    address:
      "Metland Cileungsi Blok CE 2 No 7 RT 01/08 Ds Cipenio Kec Cileungsi, Indonesia",
    phone: "+62 8588 - 869 - 5439",
    email: "bajrajaya20@gmail.com",
    quickLinks: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Layanan", href: "#services" },
      { label: "Mengapa Kami", href: "#why-choose-us" },
      { label: "Kontak", href: "#quotation" },
    ],
    socialMedia: [
      {
        platform: "facebook",
        url: "https://facebook.com/solusidigital",
        icon: "📘",
      },
      {
        platform: "instagram",
        url: "https://instagram.com/solusidigital",
        icon: "📷",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/company/solusidigital",
        icon: "💼",
      },
      {
        platform: "twitter",
        url: "https://twitter.com/solusidigital",
        icon: "🐦",
      },
    ],
    copyright: "© 2024 PT Bajra Jaya Konstruksi. Hak Cipta Dilindungi.",
  },
};
