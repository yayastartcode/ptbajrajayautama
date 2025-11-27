# 📚 Content Management - START HERE

## ✅ Content is Now in JSON Format (Much Easier!)

Your service content has been moved to a **JSON file** which is much safer and easier to edit than JavaScript.

---

## 📁 File Location

**Edit this file to add/update content:**
```
/src/data/serviceDetails.json
```

---

## 📖 Documentation Files

1. **`HOW_TO_ADD_CONTENT.md`** ⭐ **START HERE**
   - Complete step-by-step guide
   - Templates and examples
   - Common mistakes and solutions

2. **`JSON_BENEFITS.md`**
   - Why JSON is better
   - Before/after examples
   - Common scenarios

3. **`CONTENT_SUMMARY.md`**
   - Technical overview
   - File structure
   - Features and benefits

4. **`LAYANAN_CONTENT_TEMPLATE.md`**
   - Old guide (updated with JSON info)

---

## ⚡ Quick Start

### To Add New Service Content:

1. **Open:** `/src/data/serviceDetails.json`

2. **Copy this template:**
   ```json
   "service-slug": {
     "title": "Service Name",
     "description": "Brief description",
     "faqs": [
       {
         "question": "Your question?",
         "answer": "Your answer. Use \\n for line breaks."
       }
     ]
   }
   ```

3. **Add comma** after previous service's closing brace `}`

4. **Paste and edit** your content

5. **Save** - Done!

---

## 🎯 Why JSON is Better

| Problem | JavaScript | JSON |
|---------|-----------|------|
| Apostrophes (don't, it's) | ❌ Breaks | ✅ Works |
| Long text | ❌ Complex | ✅ Easy |
| Line breaks | ❌ Error-prone | ✅ Use `\n` |
| Quotes in text | ❌ Difficult | ✅ Simple |

**Example:**
```json
{
  "answer": "It's easy! Don't worry about errors.\nJust type naturally."
}
```

---

## 🔍 Validate Your JSON

Before saving, validate your JSON at:
**https://jsonlint.com/**

Just copy/paste your entire JSON file and click "Validate"

---

## 📋 Service List

### Divisi Perijinan (17 services):
- ✅ `legalitas-perusahaan-akte-pendirian-dan-perubahan`
- ✅ `sertifikat-badan-usaha-sbujk`
- `skk-konstruksi`
- `serkom-esdm`
- `audit-akuntan-publik`
- And 12 more...

### Divisi Konstruksi (4 services):
- `cut-and-fill`
- `jasa-galian-telekomunikasi-jaringan-gas-pdam-dan-pln`
- `konstruksi-gedung`
- `konstruksi-sipil`

See complete list in `HOW_TO_ADD_CONTENT.md`

---

## 🚀 Test Your Changes

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

---

## 💡 Need Help?

1. Read `HOW_TO_ADD_CONTENT.md` for detailed guide
2. See `JSON_BENEFITS.md` for examples
3. Use https://jsonlint.com/ to validate
4. Check existing examples in `serviceDetails.json`

---

## ✨ What You Can Do Now

✅ Write text with apostrophes freely  
✅ Use quotes in your content  
✅ Add long paragraphs without errors  
✅ Copy/paste from Word or Google Docs  
✅ Less worrying about syntax errors  

---

**Ready to add content? Open `HOW_TO_ADD_CONTENT.md` now!**
