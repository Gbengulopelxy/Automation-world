# Installation Guide - Complete Setup

## Quick Start (3 Commands)

```bash
# 1. Install dependencies
pnpm install

# 2. Copy environment variables (optional)
cp .env.example .env.local

# 3. Run development server
pnpm dev
```

That's it! Open [http://localhost:3000](http://localhost:3000)

---

## Complete File Structure

```
echoworks-ai-landing/
│
├── 📄 Configuration Files (Root)
│   ├── .env.example              # Environment variables template
│   ├── .eslintrc.json            # ESLint configuration
│   ├── .gitignore                # Git ignore file
│   ├── next.config.js            # Next.js configuration
│   ├── package.json              # Dependencies and scripts
│   ├── postcss.config.js         # PostCSS configuration
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   └── tsconfig.json             # TypeScript configuration
│
├── 📁 app/                       # Next.js App Router
│   ├── (root)/
│   │   └── page.tsx              # Main landing page
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # API endpoint: POST /api/lead
│   ├── globals.css               # Global styles + Tailwind
│   └── layout.tsx                # Root layout + metadata
│
├── 📁 components/                # React Components
│   ├── ui/                       # shadcn/ui base components
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
│   ├── CaseStudies.tsx           # Case studies section
│   ├── ContactForm.tsx           # Contact form
│   ├── Footer.tsx                # Footer component
│   ├── HeroContent.tsx           # Hero headlines/CTAs
│   ├── Pricing.tsx               # Pricing tiers
│   ├── ScheduleCTA.tsx           # Calendar booking
│   ├── Services.tsx              # Services showcase
│   ├── StructuredData.tsx        # JSON-LD SEO
│   ├── Testimonials.tsx          # Testimonials carousel
│   └── VideoHero.tsx             # Video hero background
│
├── 📁 lib/                       # Utilities
│   └── utils.ts                  # Helper functions (cn)
│
└── 📁 public/                    # Static Assets
    ├── images/
    │   ├── .gitkeep
    │   ├── hero-poster.png       # Your poster image
    │   └── og-image.jpg          # OG image (1200x630px)
    └── videos/
        ├── .gitkeep
        └── Robot.mp4             # Your video file
```

**Total: 44 files**

---

## All Commands

### Installation

```bash
# Install dependencies (choose one)
pnpm install        # Recommended - fastest
npm install         # Alternative
yarn install        # Alternative
```

### Development

```bash
# Start dev server
pnpm dev            # http://localhost:3000
npm run dev         # Alternative
yarn dev            # Alternative

# Custom port
pnpm dev -- -p 3001
```

### Production Build

```bash
# Build optimized production bundle
pnpm build
npm run build
yarn build

# Start production server (after build)
pnpm start
npm start
yarn start

# Build and start in one command
pnpm build && pnpm start
```

### Code Quality

```bash
# Run ESLint
pnpm lint
npm run lint
yarn lint

# Type check (no emit)
pnpm tsc --noEmit
npx tsc --noEmit
```

### Cleanup

```bash
# Remove build cache
rm -rf .next

# Remove dependencies
rm -rf node_modules

# Full cleanup
rm -rf .next node_modules
pnpm install
```

---

## Environment Variables

### Setup

```bash
# Copy example file
cp .env.example .env.local

# Edit with your values
nano .env.local     # or use your preferred editor
```

### Variables Reference

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your site's canonical URL | `https://echoworks.ai` | No |
| `NEXT_PUBLIC_CALENDAR_URL` | Calendar booking link (Calendly, etc.) | None (uses modal) | No |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | API endpoint for form | `/api/lead` | No |
| `SMTP_SERVER` | Email server (production) | None | No |
| `SMTP_PORT` | Email port | `587` | No |
| `SMTP_USER` | Email username | None | No |
| `SMTP_PASSWORD` | Email password | None | No |
| `NOTIFICATION_EMAIL` | Email to receive submissions | None | No |
| `DATABASE_URL` | Database connection | None | No |

### Example .env.local

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://echoworks.ai

# Calendar Booking
NEXT_PUBLIC_CALENDAR_URL=https://calendly.com/echoworks-ai/consultation

# API Configuration (optional - defaults to /api/lead)
NEXT_PUBLIC_LEAD_ENDPOINT=/api/lead
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Use for client-side code. Variables without prefix are server-only (API routes only).

---

## File Checklist

### Required Files (38 files)

**Configuration (8 files):**
- [x] `.env.example`
- [x] `.eslintrc.json`
- [x] `.gitignore`
- [x] `next.config.js`
- [x] `package.json`
- [x] `postcss.config.js`
- [x] `tailwind.config.ts`
- [x] `tsconfig.json`

**App Router (4 files):**
- [x] `app/globals.css`
- [x] `app/layout.tsx`
- [x] `app/(root)/page.tsx`
- [x] `app/api/lead/route.ts`

**Components (19 files):**
- [x] `components/ui/button.tsx`
- [x] `components/ui/card.tsx`
- [x] `components/ui/dialog.tsx`
- [x] `components/ui/input.tsx`
- [x] `components/ui/label.tsx`
- [x] `components/ui/select.tsx`
- [x] `components/ui/textarea.tsx`
- [x] `components/ui/toast.tsx`
- [x] `components/ui/toaster.tsx`
- [x] `components/ui/use-toast.ts`
- [x] `components/CaseStudies.tsx`
- [x] `components/ContactForm.tsx`
- [x] `components/Footer.tsx`
- [x] `components/HeroContent.tsx`
- [x] `components/Pricing.tsx`
- [x] `components/ScheduleCTA.tsx`
- [x] `components/Services.tsx`
- [x] `components/StructuredData.tsx`
- [x] `components/Testimonials.tsx`
- [x] `components/VideoHero.tsx`

**Utilities (1 file):**
- [x] `lib/utils.ts`

**Public Assets (2 files - add your own):**
- [ ] `public/videos/Robot.mp4` ← Replace with your video
- [ ] `public/images/hero-poster.png` ← Replace with your poster
- [ ] `public/images/og-image.jpg` ← Add your OG image (1200x630px)

**Documentation (6 files - optional):**
- [x] `README.md`
- [x] `DEPLOYMENT.md`
- [x] `SETUP_GUIDE.md`
- [x] `INSTALLATION.md` (this file)
- [x] `ACCESSIBILITY.md`
- [x] `LANDING_PAGE_COPY.md`

---

## Step-by-Step Installation

### Step 1: Copy Files

Copy all files maintaining the exact directory structure shown above.

### Step 2: Install Dependencies

```bash
pnpm install
```

This installs:
- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- Radix UI primitives
- Lucide React icons
- TypeScript

### Step 3: Configure Environment (Optional)

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### Step 4: Add Your Assets

```bash
# Place your MP4 video
cp /path/to/your/video.mp4 public/videos/Robot.mp4

# Place your poster image
cp /path/to/your/poster.png public/images/hero-poster.png

# Place your OG image (1200x630px)
cp /path/to/your/og-image.jpg public/images/og-image.jpg
```

Or update paths in `app/(root)/page.tsx` if using different filenames.

### Step 5: Run Development Server

```bash
pnpm dev
```

Visit http://localhost:3000

### Step 6: Build for Production

```bash
pnpm build
pnpm start
```

---

## Verification

After installation, verify:

```bash
# 1. Check dependencies installed
pnpm list --depth=0

# 2. Run type check
pnpm tsc --noEmit

# 3. Run linter
pnpm lint

# 4. Start dev server
pnpm dev

# 5. Visit http://localhost:3000
# - Page should load
# - Video should play (or show poster)
# - All sections visible
# - Contact form works
# - No console errors
```

---

## Troubleshooting

### "Module not found" errors

```bash
rm -rf node_modules
pnpm install
```

### Port 3000 already in use

```bash
# Kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### Build errors

```bash
rm -rf .next
pnpm build
```

### Video/image not loading

1. Check file paths in `app/(root)/page.tsx`
2. Verify files exist in `public/` directory
3. Check filenames match exactly (case-sensitive)

---

## Next Steps

1. ✅ Copy all files to your repository
2. ✅ Run `pnpm install`
3. ✅ Add your video and images
4. ✅ Update content in components or `LANDING_PAGE_COPY.md`
5. ✅ Configure environment variables (optional)
6. ✅ Test locally: `pnpm dev`
7. ✅ Build: `pnpm build`
8. ✅ Deploy (see `DEPLOYMENT.md`)

---

## Support Files

- **README.md** - Main project documentation
- **DEPLOYMENT.md** - Deployment guides for Vercel, Netlify, etc.
- **SETUP_GUIDE.md** - Detailed setup instructions
- **ACCESSIBILITY.md** - Accessibility documentation
- **LANDING_PAGE_COPY.md** - All textual content
- **FILE_LIST.md** - Complete file checklist

---

## Quick Reference

```bash
# Install
pnpm install

# Dev
pnpm dev

# Build
pnpm build && pnpm start

# Environment
cp .env.example .env.local
```

That's all you need! 🚀

