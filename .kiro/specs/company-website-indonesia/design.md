# Dokumen Design

## Overview

Website company profile single-page application (SPA) yang dibangun dengan Vite + React + TailwindCSS + Framer Motion. Website ini menampilkan informasi perusahaan secara komprehensif dengan user experience yang smooth melalui animasi dan responsive design. Semua konten menggunakan Bahasa Indonesia dan terintegrasi dengan WhatsApp untuk komunikasi langsung.

## Architecture

### Tech Stack
- **Build Tool**: Vite 5.x - Fast development server dan optimized production build
- **UI Library**: React 18.x - Component-based architecture dengan hooks
- **Styling**: TailwindCSS 3.x - Utility-first CSS framework
- **Animation**: Framer Motion 11.x - Production-ready animation library
- **Form Handling**: React Hook Form - Performant form validation
- **Routing**: React Router DOM (optional) - Untuk smooth scroll navigation

### Project Structure
```
company-website-indonesia/
├── public/
│   └── images/           # Static images dan assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutUs.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── LayananKami.jsx
│   │   ├── QuotationForm.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── utils/           # Helper functions
│   │   └── whatsapp.js  # WhatsApp integration logic
│   ├── data/            # Static content data
│   │   └── content.js   # Website content dalam Bahasa Indonesia
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles dan Tailwind imports
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Components and Interfaces

### 1. Header Component

**Purpose**: Navigation bar yang sticky dengan smooth scroll ke sections

**Props**: None (menggunakan internal state untuk mobile menu)

**Features**:
- Logo perusahaan di kiri
- Navigation links ke sections (About, Layanan, Quotation, Kontak)
- Hamburger menu untuk mobile
- Sticky positioning dengan backdrop blur effect
- Active state untuk current section

**Styling**:
- Background: `bg-white/90 backdrop-blur-md`
- Shadow: `shadow-md` saat scroll
- Height: `h-16` atau `h-20`
- Z-index: `z-50`

**Animation**:
- Slide down on mount: `initial={{ y: -100 }} animate={{ y: 0 }}`
- Mobile menu: slide in from right

### 2. Hero Component

**Purpose**: Section pembuka dengan two-column layout dan background image

**Props**: 
```javascript
{
  title: string,
  subtitle: string,
  ctaText: string,
  ctaLink: string,
  heroImage: string,
  backgroundImage: string
}
```

**Layout**:
- Container: `min-h-screen` dengan background image overlay
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-8`
- Left column: Headline, subtitle, CTA button
- Right column: Hero image atau illustration

**Styling**:
- Background: Image dengan dark overlay (`bg-black/50`)
- Text: White dengan shadow untuk readability
- CTA Button: Primary color dengan hover effect

**Animation**:
- Text: Fade in from left dengan stagger
- Image: Fade in from right
- CTA: Scale on hover

### 3. AboutUs Component

**Purpose**: Menampilkan informasi tentang perusahaan

**Props**:
```javascript
{
  title: string,
  description: string,
  image?: string,
  stats?: Array<{label: string, value: string}>
}
```

**Layout**:
- Container: `py-16 lg:py-24`
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-12`
- Optional stats section dengan grid 2x2 atau 3x1

**Styling**:
- Background: `bg-gray-50` atau `bg-white`
- Typography: Heading `text-3xl lg:text-4xl`, body `text-lg`

**Animation**:
- Scroll-triggered fade in
- Stats counter animation (jika ada)

### 4. WhyChooseUs Component

**Purpose**: Menampilkan keunggulan perusahaan dalam card format

**Props**:
```javascript
{
  title: string,
  reasons: Array<{
    icon: string,
    title: string,
    description: string
  }>
}
```

**Layout**:
- Container: `py-16 lg:py-24`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Card untuk setiap reason

**Card Design**:
- Padding: `p-6`
- Border: `border border-gray-200` atau shadow
- Hover: Lift effect dengan shadow increase
- Icon: Large size di atas, centered

**Animation**:
- Cards: Stagger fade in on scroll
- Hover: Scale up slightly (1.05)

### 5. LayananKami Component

**Purpose**: Showcase layanan yang ditawarkan

**Props**:
```javascript
{
  title: string,
  services: Array<{
    icon: string,
    name: string,
    description: string,
    image?: string
  }>
}
```

**Layout**:
- Container: `py-16 lg:py-24`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Card-based layout dengan image optional

**Card Design**:
- Image di atas (jika ada): `aspect-video`
- Content: Icon, title, description
- Hover: Border color change atau shadow

**Animation**:
- Scroll-triggered stagger animation
- Image: Zoom on hover

### 6. QuotationForm Component

**Purpose**: Form untuk request quotation yang terintegrasi dengan WhatsApp

**Props**:
```javascript
{
  whatsappNumber: string, // Format: 628123456789
  title: string,
  subtitle?: string
}
```

**Form Fields**:
1. Nama Lengkap (required, text)
2. Email (required, email validation)
3. Nomor Telepon (required, phone validation)
4. Layanan yang Diminati (select/dropdown)
5. Pesan/Deskripsi Kebutuhan (textarea, required)

**Validation**:
- Required fields check
- Email format validation
- Phone number format (Indonesia)
- Minimum message length

**WhatsApp Integration**:
```javascript
// Format pesan WhatsApp
const message = `
Halo, saya ingin request quotation:

Nama: ${nama}
Email: ${email}
Telepon: ${telepon}
Layanan: ${layanan}

Pesan:
${pesan}
`;

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappUrl, '_blank');
```

**Styling**:
- Container: `max-w-2xl mx-auto`
- Inputs: TailwindCSS form styling
- Button: Primary color, full width on mobile
- Error messages: Red text below fields

**Animation**:
- Form: Fade in on scroll
- Submit button: Loading state dengan spinner
- Success: Checkmark animation

### 7. CTA Component

**Purpose**: Call-to-action section untuk mendorong konversi

**Props**:
```javascript
{
  title: string,
  description: string,
  buttonText: string,
  buttonLink: string
}
```

**Layout**:
- Full width section dengan centered content
- Background: Gradient atau solid color
- Text: Centered, white color

**Styling**:
- Background: `bg-gradient-to-r from-blue-600 to-blue-800`
- Padding: `py-16 lg:py-20`
- Button: White background dengan primary text color

**Animation**:
- Fade in on scroll
- Button: Pulse animation untuk menarik perhatian

### 8. Footer Component

**Purpose**: Footer dengan informasi kontak dan navigasi

**Props**:
```javascript
{
  companyName: string,
  address: string,
  phone: string,
  email: string,
  socialMedia?: Array<{platform: string, url: string}>
}
```

**Layout**:
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Column 1: Company info dan alamat
- Column 2: Quick links
- Column 3: Contact info dan social media
- Bottom: Copyright bar

**Styling**:
- Background: `bg-gray-900` dengan white text
- Links: Hover underline effect
- Social icons: Hover color change

## Data Models

### Content Data Structure

```javascript
// src/data/content.js
export const siteContent = {
  company: {
    name: "Nama Perusahaan",
    tagline: "Tagline Perusahaan",
    whatsappNumber: "628123456789"
  },
  
  hero: {
    title: "Judul Hero Section",
    subtitle: "Subtitle yang menjelaskan value proposition",
    ctaText: "Hubungi Kami",
    ctaLink: "#quotation",
    heroImage: "/images/hero.jpg",
    backgroundImage: "/images/hero-bg.jpg"
  },
  
  about: {
    title: "Tentang Kami",
    description: "Deskripsi lengkap tentang perusahaan...",
    image: "/images/about.jpg",
    stats: [
      { label: "Tahun Pengalaman", value: "10+" },
      { label: "Klien Puas", value: "500+" },
      { label: "Project Selesai", value: "1000+" }
    ]
  },
  
  whyChooseUs: {
    title: "Mengapa Memilih Kami",
    reasons: [
      {
        icon: "⚡",
        title: "Cepat & Efisien",
        description: "Kami menyelesaikan project tepat waktu"
      },
      {
        icon: "💎",
        title: "Kualitas Terjamin",
        description: "Standar kualitas tinggi di setiap project"
      },
      {
        icon: "🤝",
        title: "Profesional",
        description: "Tim berpengalaman dan profesional"
      }
    ]
  },
  
  services: {
    title: "Layanan Kami",
    items: [
      {
        icon: "🎨",
        name: "Layanan 1",
        description: "Deskripsi layanan 1",
        image: "/images/service1.jpg"
      },
      {
        icon: "💻",
        name: "Layanan 2",
        description: "Deskripsi layanan 2",
        image: "/images/service2.jpg"
      },
      {
        icon: "📱",
        name: "Layanan 3",
        description: "Deskripsi layanan 3",
        image: "/images/service3.jpg"
      }
    ]
  },
  
  quotation: {
    title: "Request Quotation",
    subtitle: "Isi form di bawah untuk mendapatkan penawaran harga"
  },
  
  cta: {
    title: "Siap Memulai Project Anda?",
    description: "Hubungi kami sekarang untuk konsultasi gratis",
    buttonText: "Hubungi Sekarang",
    buttonLink: "#quotation"
  },
  
  footer: {
    companyName: "Nama Perusahaan",
    address: "Alamat lengkap perusahaan",
    phone: "+62 812-3456-7890",
    email: "info@perusahaan.com",
    socialMedia: [
      { platform: "facebook", url: "https://facebook.com/..." },
      { platform: "instagram", url: "https://instagram.com/..." },
      { platform: "linkedin", url: "https://linkedin.com/..." }
    ]
  }
};
```

## Error Handling

### Form Validation Errors

**Scenarios**:
1. Empty required fields
2. Invalid email format
3. Invalid phone number format
4. Message too short

**Handling**:
- Display inline error messages below each field
- Prevent form submission until all validations pass
- Use red color (`text-red-600`) untuk error messages
- Scroll to first error field

**Error Messages** (Bahasa Indonesia):
```javascript
const errorMessages = {
  required: "Field ini wajib diisi",
  email: "Format email tidak valid",
  phone: "Format nomor telepon tidak valid",
  minLength: "Pesan minimal 10 karakter"
};
```

### WhatsApp Integration Errors

**Scenarios**:
1. Popup blocker mencegah WhatsApp window
2. WhatsApp tidak terinstall di device

**Handling**:
- Show fallback message dengan link manual
- Provide alternative contact methods
- Log error untuk debugging

### Network/Loading States

**Scenarios**:
1. Slow image loading
2. Form submission processing

**Handling**:
- Skeleton loaders untuk images
- Loading spinner pada submit button
- Disable button saat processing

## Testing Strategy

### Component Testing
- Test setiap component dapat render tanpa error
- Test props passing dan default values
- Test responsive behavior di berbagai breakpoints

### Form Testing
- Test validation logic untuk semua fields
- Test WhatsApp URL generation dengan berbagai input
- Test error message display
- Test form reset setelah submission

### Integration Testing
- Test smooth scroll navigation dari header
- Test form submission flow end-to-end
- Test responsive layout di mobile, tablet, desktop

### Visual Testing
- Test animasi berjalan smooth
- Test hover states pada interactive elements
- Test color contrast untuk accessibility
- Test di berbagai browsers (Chrome, Firefox, Safari)

### Performance Testing
- Lighthouse score minimal 90 untuk Performance
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

## Responsive Design Breakpoints

### TailwindCSS Breakpoints
- `sm`: 640px - Small tablets
- `md`: 768px - Tablets
- `lg`: 1024px - Laptops
- `xl`: 1280px - Desktops
- `2xl`: 1536px - Large desktops

### Layout Adjustments

**Mobile (< 768px)**:
- Single column layout untuk semua sections
- Hamburger menu untuk navigation
- Stack hero columns vertically
- Full-width cards
- Larger touch targets (min 44x44px)

**Tablet (768px - 1024px)**:
- 2-column grid untuk cards
- Expanded navigation menu
- Hero tetap 2 columns

**Desktop (> 1024px)**:
- 3-column grid untuk cards
- Full navigation bar
- Larger spacing dan padding
- Hover effects lebih prominent

## Animation Specifications

### Framer Motion Variants

**Fade In**:
```javascript
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

**Stagger Children**:
```javascript
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

**Scroll Animation**:
- Use `whileInView` prop
- `viewport={{ once: true, amount: 0.3 }}`
- Trigger saat 30% element visible

**Hover Effects**:
- Scale: `whileHover={{ scale: 1.05 }}`
- Lift: `whileHover={{ y: -5 }}`
- Duration: 0.2s untuk responsiveness

## Styling Guidelines

### Color Palette (Customizable)
```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  secondary: {
    500: '#6b7280',
    600: '#4b5563',
  }
}
```

### Typography
- Heading Font: System font stack atau Google Fonts
- Body Font: System font stack
- Font Sizes: TailwindCSS default scale
- Line Height: `leading-relaxed` untuk body text

### Spacing
- Section padding: `py-16 lg:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 lg:p-8`
- Gap: `gap-8 lg:gap-12`

### Shadows
- Card: `shadow-md hover:shadow-lg`
- Header: `shadow-sm`
- Button: `shadow hover:shadow-md`

## Performance Optimizations

1. **Image Optimization**:
   - Use WebP format dengan fallback
   - Lazy loading untuk images below fold
   - Responsive images dengan srcset

2. **Code Splitting**:
   - Dynamic imports untuk heavy components
   - Lazy load Framer Motion animations

3. **CSS Optimization**:
   - PurgeCSS via TailwindCSS
   - Minimize unused styles

4. **Bundle Size**:
   - Tree shaking enabled
   - Minimize dependencies
   - Use production build

## Accessibility Considerations

1. **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
2. **Alt Text**: All images have descriptive alt text
3. **Keyboard Navigation**: All interactive elements accessible via keyboard
4. **Focus States**: Visible focus indicators
5. **Color Contrast**: WCAG AA compliance (4.5:1 untuk text)
6. **ARIA Labels**: For icon buttons dan complex interactions
7. **Form Labels**: Proper label associations
8. **Skip Links**: Skip to main content link

## Deployment Considerations

1. **Build Command**: `npm run build`
2. **Output**: `dist/` folder
3. **Environment Variables**: WhatsApp number, company info
4. **Hosting**: Static hosting (Vercel, Netlify, GitHub Pages)
5. **Domain**: Custom domain setup
6. **SSL**: HTTPS required
7. **Analytics**: Optional Google Analytics atau alternative
