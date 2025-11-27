# How to Add Service Content - EASY WAY

## ✅ NEW: Now Using JSON File (Much Easier!)

All service content is now in **`/src/data/serviceDetails.json`** - a separate JSON file that's much safer and easier to edit than JavaScript.

---

## Why JSON is Better

✅ **Apostrophes & quotes are safe** - No need to escape `'` or `"` characters  
✅ **Long text is safe** - Multi-line answers won't break the code  
✅ **Less errors** - JSON is more forgiving than JavaScript  
✅ **Easier to edit** - Just copy/paste text without worrying about syntax  

---

## How to Add New Service Content

### Step 1: Open the JSON file
Open `/src/data/serviceDetails.json`

### Step 2: Copy this template

```json
"service-slug-here": {
  "title": "Service Name",
  "description": "Brief overview of the service",
  "image": "/images/services/image.jpg",
  "faqs": [
    {
      "question": "Your question here?",
      "answer": "Your answer here. Use \n for line breaks.\nLike this!"
    }
  ]
}
```

### Step 3: Add comma before your new service

**IMPORTANT:** Add a comma (`,`) after the previous service's closing brace `}` before adding your new service.

---

## Full Example

```json
{
  "existing-service": {
    "title": "Existing Service",
    "description": "Description here",
    "faqs": []
  },    ← ADD COMMA HERE
  "skk-konstruksi": {
    "title": "SKK Konstruksi",
    "description": "Sertifikat Kompetensi Kerja (SKK) Konstruksi untuk tenaga kerja konstruksi.",
    "image": "/images/services/skk.jpg",
    "faqs": [
      {
        "question": "Apa itu SKK Konstruksi?",
        "answer": "SKK Konstruksi adalah Sertifikat Kompetensi Kerja yang diberikan kepada tenaga kerja konstruksi yang telah memenuhi standar kompetensi di bidangnya."
      },
      {
        "question": "Siapa yang Membutuhkan SKK?",
        "answer": "Pekerja konstruksi seperti:\n- Tukang bangunan\n- Operator alat berat\n- Mandor\n- Dan tenaga konstruksi lainnya"
      },
      {
        "question": "Berapa Lama Prosesnya?",
        "answer": "Proses pengurusan SKK memakan waktu 10-14 hari kerja, tergantung jadwal ujian kompetensi."
      }
    ]
  }
}
```

---

## Tips for Writing Content

### ✅ DO:
- Use `\n` for line breaks in answers
- Write naturally - apostrophes like "don't", "it's" are safe
- Use long paragraphs - they won't break the code
- Copy/paste from Word or Google Docs directly

### ❌ DON'T:
- Forget the comma between services
- Use double backslash `\\n` (just use `\n`)
- Worry about special characters - JSON handles them!

---

## Line Breaks Example

```json
{
  "question": "What documents are needed?",
  "answer": "Required documents:\n- KTP and NPWP\n- Company certificate\n- Domicile letter\n\nNote: All documents must be original."
}
```

This will display as:
```
Required documents:
- KTP and NPWP
- Company certificate
- Domicile letter

Note: All documents must be original.
```

---

## Common Mistakes & Solutions

### ❌ Missing Comma
```json
{
  "service-1": { }
  "service-2": { }    ← ERROR: Missing comma
}
```

### ✅ Correct
```json
{
  "service-1": { },    ← Comma here
  "service-2": { }
}
```

### ❌ Extra Comma at End
```json
{
  "service-1": { },
  "service-2": { },    ← ERROR: Extra comma before closing
}
```

### ✅ Correct
```json
{
  "service-1": { },
  "service-2": { }     ← No comma on last item
}
```

---

## Validate Your JSON

If you're not sure if your JSON is correct, use this tool:
**https://jsonlint.com/**

Just copy/paste your entire JSON file and click "Validate JSON"

---

## Service Slugs Reference

### Divisi Perijinan:
1. `legalitas-perusahaan-akte-pendirian-dan-perubahan` ✅
2. `sertifikat-badan-usaha-sbujk` ✅
3. `skk-konstruksi`
4. `serkom-esdm`
5. `audit-akuntan-publik`
6. `penyewaan-alat-simpk-pupr`
7. `iso-37001--2016-smap`
8. `nib-pkkpr-dan-sertifikat-standar`
9. `tkdn`
10. `sni`
11. `skup-migas`
12. `iujp`
13. `amdal`
14. `pengawas-operasional-pertambangan-pop`
15. `lkpm-laporan-kegiatan`
16. `smk3-kemnaker`
17. `ahli-k3-kemnaker`

### Divisi Konstruksi:
1. `cut-and-fill`
2. `jasa-galian-telekomunikasi-jaringan-gas-pdam-dan-pln`
3. `konstruksi-gedung`
4. `konstruksi-sipil`

---

## Quick Start Checklist

1. ✅ Open `/src/data/serviceDetails.json`
2. ✅ Find the right spot to add your service
3. ✅ Copy the template
4. ✅ Replace the slug, title, description
5. ✅ Add your Q&A pairs
6. ✅ Check commas (between services)
7. ✅ Save the file
8. ✅ Test: `npm run dev`

---

## Need Help?

- **File location:** `/src/data/serviceDetails.json`
- **Validate JSON:** https://jsonlint.com/
- **Template:** See "Full Example" above
