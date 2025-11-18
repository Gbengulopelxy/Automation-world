# Complete File List

## Generated Files for Next.js Landing Page

This document lists all files that should be copied to your Next.js repository.

---

## Complete File Tree

```
echoworks-ai-landing/
├── .env.example                          # Environment variables template
├── .eslintrc.json                        # ESLint configuration
├── .gitignore                            # Git ignore file
├── ACCESSIBILITY.md                      # Accessibility documentation
├── DEPLOYMENT.md                         # Deployment and setup guide
├── FILE_LIST.md                          # This file - complete file list
├── FILE_STRUCTURE.md                     # Project structure documentation
├── LANDING_PAGE_COPY.md                  # All textual copy for landing page
├── README.md                             # Main project README
├── next.config.js                        # Next.js configuration
├── package.json                          # Dependencies and scripts
├── postcss.config.js                     # PostCSS configuration
├── tailwind.config.ts                    # Tailwind CSS configuration
├── tsconfig.json                         # TypeScript configuration
│
├── app/
│   ├── (root)/
│   │   └── page.tsx                      # Main landing page
│   ├── api/
│   │   └── lead/
│   │       └── route.ts                  # Serverless API endpoint
│   ├── globals.css                       # Global styles and Tailwind directives
│   └── layout.tsx                        # Root layout with metadata
│
├── components/
│   ├── ui/                               # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   │
│   ├── CaseStudies.tsx                   # Case studies section with modal
│   ├── ContactForm.tsx                   # Contact form with validation
│   ├── Footer.tsx                        # Footer component
│   ├── HeroContent.tsx                   # Hero headline, subheadline, CTAs
│   ├── Pricing.tsx                       # Pricing tiers with expandable modal
│   ├── ScheduleCTA.tsx                   # Calendar booking CTA
│   ├── Services.tsx                      # Services showcase
│   ├── StructuredData.tsx                # JSON-LD structured data
│   ├── Testimonials.tsx                  # Testimonials carousel
│   └── VideoHero.tsx                     # Hero section with video background
│
├── lib/
│   └── utils.ts                          # Utility functions (cn helper)
│
└── public/
    ├── images/
    │   ├── .gitkeep                      # Keep directory in git
    │   ├── hero-poster.png               # Video poster image (replace with yours)
    │   └── og-image.jpg                  # Open Graph image (add your own)
    └── videos/
        ├── .gitkeep                      # Keep directory in git
        └── Robot.mp4                     # Hero video (replace with yours)
```

---

## Files by Category

### Configuration Files (Root)
- `.env.example` - Environment variables template
- `.eslintrc.json` - ESLint configuration
- `.gitignore` - Git ignore patterns
- `next.config.js` - Next.js configuration
- `package.json` - Dependencies and npm scripts
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

### Documentation Files
- `README.md` - Main project README with installation instructions
- `DEPLOYMENT.md` - Deployment guide with commands
- `ACCESSIBILITY.md` - Accessibility documentation
- `FILE_STRUCTURE.md` - Project structure documentation
- `LANDING_PAGE_COPY.md` - All textual copy content
- `FILE_LIST.md` - This file

### App Router Files
- `app/(root)/page.tsx` - Main landing page component
- `app/layout.tsx` - Root layout with metadata and structured data
- `app/globals.css` - Global CSS and Tailwind directives
- `app/api/lead/route.ts` - Serverless API endpoint for form submissions

### Components
**UI Components (shadcn/ui):**
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/dialog.tsx`
- `components/ui/input.tsx`
- `components/ui/label.tsx`
- `components/ui/select.tsx`
- `components/ui/textarea.tsx`
- `components/ui/toast.tsx`
- `components/ui/toaster.tsx`
- `components/ui/use-toast.ts`

**Feature Components:**
- `components/VideoHero.tsx` - Video hero with accessibility
- `components/HeroContent.tsx` - Hero content (headlines, CTAs)
- `components/Services.tsx` - Services showcase
- `components/CaseStudies.tsx` - Case studies with modal
- `components/Testimonials.tsx` - Testimonials carousel
- `components/Pricing.tsx` - Pricing tiers
- `components/ContactForm.tsx` - Contact form
- `components/ScheduleCTA.tsx` - Calendar booking CTA
- `components/Footer.tsx` - Footer
- `components/StructuredData.tsx` - JSON-LD structured data

### Utilities
- `lib/utils.ts` - Utility functions (cn helper for Tailwind)

### Public Assets
- `public/videos/Robot.mp4` - Hero video (replace with your own)
- `public/images/hero-poster.png` - Poster image (replace with your own)
- `public/images/og-image.jpg` - Open Graph image (add your own, 1200x630px)

---

## Installation Checklist

Copy these files to your Next.js repository in this order:

### Step 1: Configuration Files
- [ ] `.env.example`
- [ ] `.eslintrc.json`
- [ ] `.gitignore`
- [ ] `next.config.js`
- [ ] `package.json`
- [ ] `postcss.config.js`
- [ ] `tailwind.config.ts`
- [ ] `tsconfig.json`

### Step 2: App Router Files
- [ ] `app/globals.css`
- [ ] `app/layout.tsx`
- [ ] `app/(root)/page.tsx`
- [ ] `app/api/lead/route.ts`

### Step 3: Utility Files
- [ ] `lib/utils.ts`

### Step 4: UI Components
- [ ] `components/ui/button.tsx`
- [ ] `components/ui/card.tsx`
- [ ] `components/ui/dialog.tsx`
- [ ] `components/ui/input.tsx`
- [ ] `components/ui/label.tsx`
- [ ] `components/ui/select.tsx`
- [ ] `components/ui/textarea.tsx`
- [ ] `components/ui/toast.tsx`
- [ ] `components/ui/toaster.tsx`
- [ ] `components/ui/use-toast.ts`

### Step 5: Feature Components
- [ ] `components/VideoHero.tsx`
- [ ] `components/HeroContent.tsx`
- [ ] `components/Services.tsx`
- [ ] `components/CaseStudies.tsx`
- [ ] `components/Testimonials.tsx`
- [ ] `components/Pricing.tsx`
- [ ] `components/ContactForm.tsx`
- [ ] `components/ScheduleCTA.tsx`
- [ ] `components/Footer.tsx`
- [ ] `components/StructuredData.tsx`

### Step 6: Documentation (Optional but Recommended)
- [ ] `README.md`
- [ ] `DEPLOYMENT.md`
- [ ] `ACCESSIBILITY.md`
- [ ] `LANDING_PAGE_COPY.md`

### Step 7: Public Assets
- [ ] Create `public/videos/` directory
- [ ] Add your MP4 video file
- [ ] Create `public/images/` directory
- [ ] Add your poster image
- [ ] Add Open Graph image (1200x630px)

---

## Quick Copy Commands

### If copying from another directory:

```bash
# Copy all configuration files
cp .env.example .eslintrc.json .gitignore next.config.js package.json postcss.config.js tailwind.config.ts tsconfig.json /path/to/your/repo/

# Copy app directory
cp -r app /path/to/your/repo/

# Copy components directory
cp -r components /path/to/your/repo/

# Copy lib directory
cp -r lib /path/to/your/repo/

# Copy public directory structure (create directories)
mkdir -p /path/to/your/repo/public/{videos,images}
```

---

## File Count Summary

- **Configuration files**: 8
- **Documentation files**: 6
- **App Router files**: 4
- **UI components**: 9
- **Feature components**: 10
- **Utility files**: 1
- **Total source files**: 38
- **Public assets**: 2 (video + poster, add OG image separately)

---

## Dependencies Summary

All dependencies are listed in `package.json`. Key dependencies:

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library (installed via copy, not npm)
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **TypeScript** - Type safety

Run `pnpm install` (or `npm install`) to install all dependencies.

