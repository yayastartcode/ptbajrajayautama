# How to Add Content for Each Layanan

## ⚠️ IMPORTANT UPDATE

**Content is now stored in a JSON file for easier editing!**

👉 **See the new guide:** `HOW_TO_ADD_CONTENT.md`

---

## Structure

All service content is now stored in `/src/data/serviceDetails.json` (JSON file, much easier to edit!)

The content uses an **Accordion Q&A Format** - each service has questions and answers that expand/collapse when clicked.

### Why We Changed to JSON:
- ✅ Apostrophes (`'`) and quotes (`"`) won't break your code
- ✅ Long text with multiple lines is safe
- ✅ Much easier to edit - just copy/paste text
- ✅ Fewer syntax errors

## Adding New Service Content

### Step 1: Find the Service Slug
The slug is the URL-friendly version of the service name. For example:
- "Legalitas Perusahaan (Akte Pendirian dan Perubahan)" → `legalitas-perusahaan-akte-pendirian-dan-perubahan`
- "SKK Konstruksi" → `skk-konstruksi`
- "Cut and Fill" → `cut-and-fill`

### Step 2: Add to serviceDetails in content.js

```javascript
serviceDetails: {
  "service-slug-here": {
    title: "Full Service Name",
    description: "Brief overview of the service",
    image: "/images/services/your-image.jpg", // Optional
    faqs: [
      {
        question: "Question 1?",
        answer: "Answer 1. You can use \n to create line breaks.",
      },
      {
        question: "Question 2?",
        answer: "Answer 2",
      },
    ],
  },
}
```

## Example Template

Copy this template for each new service:

```javascript
"your-service-slug": {
  title: "Nama Layanan",
  description: "Deskripsi singkat tentang layanan ini dalam 1-2 kalimat.",
  image: "/images/services/nama-layanan.jpg", // Optional - add if you have image
  faqs: [
    {
      question: "Apa itu [Nama Layanan]?",
      answer: "Penjelasan tentang apa itu layanan ini dan untuk apa digunakan.",
    },
    {
      question: "Mengapa [Nama Layanan] Penting?",
      answer: "Manfaat dan pentingnya layanan:\n- Poin 1\n- Poin 2\n- Poin 3",
    },
    {
      question: "Persyaratan Dokumen yang Dibutuhkan?",
      answer: "Daftar dokumen:\n- Dokumen 1\n- Dokumen 2\n- Dokumen 3",
    },
    {
      question: "Berapa Lama Proses Pengurusan?",
      answer: "Estimasi waktu: X-Y hari kerja, tergantung kelengkapan dokumen.",
    },
    {
      question: "Berapa Biaya Jasa Konsultasi?",
      answer: "Biaya disesuaikan dengan kebutuhan. Hubungi kami untuk konsultasi gratis dan penawaran harga.",
    },
  ],
},
```

## Tips for Writing FAQs

1. **Use common questions**: Think about what clients usually ask
2. **Line breaks**: Use `\n` for bullet points or lists in answers
3. **Keep it clear**: Use simple, easy-to-understand language
4. **5-8 questions**: Aim for 5-8 questions per service
5. **Common question patterns**:
   - Apa itu [Service]?
   - Mengapa [Service] penting?
   - Persyaratan dokumen?
   - Berapa lama prosesnya?
   - Bagaimana jika ada masalah?
   - Berapa biaya jasanya?

## All Optional Fields

Only `title` is required. You can omit other fields:

```javascript
"simple-service": {
  title: "Nama Layanan",
  description: "Deskripsi singkat",
  // No faqs or image - will show placeholder
},
```

## Current Services That Need Content

### Divisi Perijinan:
1. ✅ legalitas-perusahaan-akte-pendirian-dan-perubahan (DONE - Example)
2. ✅ sertifikat-badan-usaha-sbujk (DONE - Example)
3. skk-konstruksi
4. serkom-esdm
5. audit-akuntan-publik
6. penyewaan-alat-simpk-pupr
7. iso-37001--2016-smap
8. nib-pkkpr-dan-sertifikat-standar
9. tkdn
10. sni
11. skup-migas
12. iujp
13. amdal
14. pengawas-operasional-pertambangan-pop
15. lkpm-laporan-kegiatan
16. smk3-kemnaker
17. ahli-k3-kemnaker

### Divisi Konstruksi:
1. cut-and-fill
2. jasa-galian-telekomunikasi-jaringan-gas-pdam-dan-pln
3. konstruksi-gedung
4. konstruksi-sipil

## Quick Start

1. Open `/src/data/content.js`
2. Find the `serviceDetails` object (line ~110)
3. Add your service using the template above
4. Use the service slug that matches the URL format
5. Save and the content will automatically appear on the service detail page!

## Example: How to Add a New Service

```javascript
// In content.js, inside serviceDetails object:

"skk-konstruksi": {
  title: "SKK Konstruksi",
  description: "Sertifikat Kompetensi Kerja (SKK) Konstruksi untuk tenaga kerja konstruksi sesuai bidang dan kualifikasi.",
  faqs: [
    {
      question: "Apa itu SKK Konstruksi?",
      answer: "SKK Konstruksi adalah Sertifikat Kompetensi Kerja yang diberikan kepada tenaga kerja konstruksi yang telah memenuhi standar kompetensi di bidangnya.",
    },
    {
      question: "Siapa yang Membutuhkan SKK?",
      answer: "Pekerja konstruksi seperti:\n- Tukang bangunan\n- Operator alat berat\n- Mandor\n- Dan tenaga konstruksi lainnya",
    },
    // Add more FAQs...
  ],
},
```

That's it! The page will automatically format it with accordion UI.
