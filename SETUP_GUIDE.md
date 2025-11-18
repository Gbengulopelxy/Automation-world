# Setup Guide - Complete Instructions

## Quick Start Commands

### 1. Install Dependencies

```bash
# Using pnpm (recommended - faster)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 2. Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your values (see Environment Variables section below)
```

**Minimal Setup** (works out of the box):
- No environment variables required initially
- Defaults are set in code

**Production Setup** (recommended):
- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_CALENDAR_URL` - Calendar booking link (optional)
- `NEXT_PUBLIC_LEAD_ENDPOINT` - API endpoint (defaults to `/api/lead`)

### 3. Add Your Assets

```bash
# Place your MP4 video here:
public/videos/Robot.mp4

# Place your poster image here:
public/images/hero-poster.png

# Place Open Graph image here (1200x630px):
public/images/og-image.jpg
```

Or update paths in `app/(root)/page.tsx` if using different filenames.

### 4. Run Development Server

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
# Using pnpm
pnpm build
pnpm start

# Or using npm
npm run build
npm start

# Or using yarn
yarn build
yarn start
```

---

## Complete File Tree

```
echoworks-ai-landing/
├── .env.example                          # Environment variables template
├── .eslintrc.json                        # ESLint configuration
├── .gitignore                            # Git ignore file
├── ACCESSIBILITY.md                      # Accessibility documentation
├── DEPLOYMENT.md                         # Deployment guide
├── FILE_LIST.md                          # Complete file list
├── FILE_STRUCTURE.md                     # Project structure docs
├── LANDING_PAGE_COPY.md                  # All textual copy
├── README.md                             # Main README
├── SETUP_GUIDE.md                        # This file
├── next.config.js                        # Next.js configuration
├── package.json                          # Dependencies
├── postcss.config.js                     # PostCSS config
├── tailwind.config.ts                    # Tailwind CSS config
├── tsconfig.json                         # TypeScript config
│
├── app/
│   ├── (root)/
│   │   └── page.tsx                      # Main landing page
│   ├── api/
│   │   └── lead/
│   │       └── route.ts                  # API endpoint
│   ├── globals.css                       # Global styles
│   └── layout.tsx                        # Root layout
│
├── components/
│   ├── ui/                               # shadcn/ui components
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
│   ├── CaseStudies.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── HeroContent.tsx
│   ├── Pricing.tsx
│   ├── ScheduleCTA.tsx
│   ├── Services.tsx
│   ├── StructuredData.tsx
│   ├── Testimonials.tsx
│   └── VideoHero.tsx
│
├── lib/
│   └── utils.ts                          # Utility functions
│
└── public/
    ├── images/
    │   ├── .gitkeep
    │   ├── hero-poster.png               # Your poster image
    │   └── og-image.jpg                  # Your OG image (add this)
    └── videos/
        ├── .gitkeep
        └── Robot.mp4                     # Your video file
```

---

## Environment Variables Reference

### Required Variables

**None** - The application works out of the box with sensible defaults.

### Optional Variables

Create `.env.local` (copy from `.env.example`):

#### Basic Configuration

```bash
# Your site's canonical URL (for SEO and social sharing)
NEXT_PUBLIC_SITE_URL=https://echoworks.ai
```

#### Calendar Booking

```bash
# External calendar link (Calendly, etc.)
# If not set, ScheduleCTA component will show modal instead
NEXT_PUBLIC_CALENDAR_URL=https://calendly.com/echoworks-ai/consultation
```

#### API Configuration

```bash
# Custom API endpoint for form submissions (defaults to /api/lead)
NEXT_PUBLIC_LEAD_ENDPOINT=/api/lead
```

#### Email Notifications (Production)

```bash
# SMTP configuration for sending email notifications
SMTP_SERVER=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
NOTIFICATION_EMAIL=sales@echoworks.ai
```

#### Database (Production)

```bash
# PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/echoworks

# Or MongoDB
MONGODB_URI=mongodb://localhost:27017/echoworks
```

#### CRM Integration (Production)

```bash
# HubSpot
HUBSPOT_API_KEY=your-hubspot-api-key

# Salesforce
SALESFORCE_CLIENT_ID=your-salesforce-client-id
SALESFORCE_CLIENT_SECRET=your-salesforce-client-secret
```

### Using Environment Variables

**In Client Components:**
```tsx
// Must be prefixed with NEXT_PUBLIC_
const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL || 'default-url'
```

**In Server Components / API Routes:**
```tsx
// No NEXT_PUBLIC_ prefix needed
const smtpServer = process.env.SMTP_SERVER
```

---

## All Commands Reference

### Development

```bash
# Start development server (default port 3000)
pnpm dev
npm run dev
yarn dev

# Start on custom port
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

# Run TypeScript type checking
pnpm tsc --noEmit
npx tsc --noEmit
```

### Cleanup

```bash
# Remove build cache
rm -rf .next

# Remove dependencies and reinstall
rm -rf node_modules
pnpm install

# Remove all generated files
rm -rf .next node_modules
```

---

## Copying Files to Your Repository

### Method 1: Manual Copy

1. Copy all files maintaining directory structure
2. Ensure `package.json` is copied
3. Run `pnpm install` in your repository

### Method 2: Using Git

```bash
# Add this repository as a remote
git remote add source /path/to/source/repo

# Merge files
git pull source main --allow-unrelated-histories

# Resolve conflicts if any
```

### Method 3: File List

See `FILE_LIST.md` for complete file checklist.

---

## Verification Checklist

After copying files, verify:

- [ ] All files copied successfully
- [ ] `package.json` exists with all dependencies
- [ ] `.env.example` exists (copy to `.env.local` if needed)
- [ ] Run `pnpm install` successfully
- [ ] Run `pnpm dev` - server starts without errors
- [ ] Visit http://localhost:3000 - page loads
- [ ] Video and poster image paths match your files
- [ ] All components render correctly
- [ ] Contact form submits successfully
- [ ] No console errors in browser

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### Module Not Found Errors

```bash
# Reinstall dependencies
rm -rf node_modules
pnpm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
pnpm build
```

### TypeScript Errors

```bash
# Type check
pnpm tsc --noEmit

# Check tsconfig.json exists and is valid
```

### Video/Image Not Loading

1. Check file paths in `app/(root)/page.tsx`
2. Verify files exist in `public/` directory
3. Check file names match exactly (case-sensitive)
4. Ensure file extensions match

---

## Next Steps After Setup

1. **Update Content**: Edit copy in components or see `LANDING_PAGE_COPY.md`
2. **Add Your Assets**: Replace video, poster, and OG image
3. **Configure SEO**: Update metadata in `app/layout.tsx`
4. **Set Up Calendar**: Add `NEXT_PUBLIC_CALENDAR_URL` in `.env.local`
5. **Test Forms**: Verify contact form submission works
6. **Deploy**: Follow `DEPLOYMENT.md` for production deployment

---

## Support

- See `README.md` for detailed documentation
- See `ACCESSIBILITY.md` for accessibility features
- See `DEPLOYMENT.md` for deployment guides
- See `LANDING_PAGE_COPY.md` for all textual content

---

## File Count Summary

- **Total files**: 44
- **Configuration**: 8 files
- **Source code**: 28 files
- **Documentation**: 6 files
- **Public assets**: 2 files (add OG image separately)

