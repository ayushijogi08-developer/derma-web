# Derma Care Skin, Hair & Laser Clinic — Marketing Website

A production-quality, responsive marketing website for **Derma Care Skin, Hair & Laser Clinic** (Dr. Shruti Kale Dabholkar, Akola). Designed with an editorial, boutique healthcare aesthetic adhering strictly to a calm, clinical-luxe palette (warm ivory, soft sand, deep forest green, and champagne brass).

---

## 🌟 Key Features

- **Single Content Source of Truth (`src/siteContent.js`)**:
  - All clinic details (name, doctor, degrees, phone numbers, WhatsApp, consultation hours, services, testimonials, and FAQs) live in one file.
  - Placeholders are clearly tagged with `[PLACEHOLDER]` for fast customization.
- **Strict Brand Design System (`src/theme.css`)**:
  - Palette: Warm Ivory (`#FAF7F2`), Soft Sand (`#F1EBE1`), Deep Forest Green (`#1F3A33`), Muted Brass (`#B08D57`), and Warm Charcoal (`#2A2A28`).
  - Zero purple, violet, indigo, blue, pink, or magenta used anywhere.
- **Editorial Healthcare Layout**:
  - Asymmetric hero with arched image slot and floating schedule card showing today's status dynamically.
  - Social proof row displaying the verified **5.0★ rating from 145 Google reviews**.
  - Categorized treatments (Skin, Hair, Laser) with expandable clinical protocols.
  - Numbered principles (`01` to `04`) and transparent 4-stage visit roadmap.
  - Interactive appointment request form with client-side validation and WhatsApp deep link fallback.
  - Google Maps listing embed with direct coordinates (`20.7144, 77.0145`).
- **Mobile First & Responsive (360px to 1920px)**:
  - Slide-in navigation drawer for mobile.
  - Sticky bottom mobile action bar: **Call**, **WhatsApp**, **Directions**, and **Book Now**.
- **Performance & SEO**:
  - JSON-LD `MedicalClinic` and `LocalBusiness` schema.
  - Semantic HTML5 structure and WCAG AA contrast.
  - Viewport scroll-reveal animations that replay upon re-entering the screen.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` (or the port Vite indicates) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory.

---

## ✏️ How to Replace Content & Photos

### Replacing Clinic Details
Open [`src/siteContent.js`](./src/siteContent.js):
- **Phone & WhatsApp**: Replace `+91 XXXXX XXXXX` and the clean numbers (`phoneClean`, `whatsappClean`).
- **Doctor Credentials**: Replace `qualifications: "MBBS, DDVL [PLACEHOLDER]"` and registration details.
- **Testimonials**: Update the `testimonials` array with real patient reviews from Google.
- **Timings**: Adjust the `hours` array if clinic schedule changes.

### Replacing Images
The application uses the reusable `<ImageSlot>` component:
1. Place your real clinic photos into `public/images/`.
2. Pass the image path as the `src` prop to `<ImageSlot src="/images/your-photo.jpg" alt="..." />` in [`src/components/Hero.jsx`](./src/components/Hero.jsx) or [`src/components/Doctor.jsx`](./src/components/Doctor.jsx).

---

## ☁️ Deploying to Vercel

### Option A: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Via GitHub & Vercel Dashboard
1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com/dashboard), click **"Add New Project"** and import the repository.
3. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
