# Deployment Guide

## Quick Start

### 1. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 2. Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your actual values
# See Environment Variables section below for details
```

### 3. Add Your Assets

- Place your MP4 video in `public/videos/Robot.mp4` (or update path in `app/(root)/page.tsx`)
- Place your poster image in `public/images/hero-poster.png` (or update path)
- Place Open Graph image in `public/images/og-image.jpg` (1200x630px)

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

## Environment Variables

### Required Variables

None - the app works out of the box with defaults.

### Optional Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your site's canonical URL | `https://echoworks.ai` | No |
| `NEXT_PUBLIC_CALENDAR_URL` | Calendar booking link (Calendly, etc.) | None (uses modal) | No |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | API endpoint for form submissions | `/api/lead` | No |
| `SMTP_SERVER` | SMTP server for email notifications | None | No (for production) |
| `SMTP_PORT` | SMTP port | `587` | No |
| `SMTP_USER` | SMTP username | None | No |
| `SMTP_PASSWORD` | SMTP password | None | No |
| `NOTIFICATION_EMAIL` | Email to receive form submissions | None | No |
| `DATABASE_URL` | Database connection string | None | No (for production) |

### Using Environment Variables

In components:
```tsx
const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL || 'https://calendly.com/echoworks-ai/consultation'
```

In API routes (server-side only):
```tsx
const smtpServer = process.env.SMTP_SERVER
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Use these for client-side code. Server-only variables (without prefix) are only available in API routes and server components.

## Deployment Platforms

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

```bash
# Or use Vercel CLI
vercel
```

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build` or `pnpm build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t echoworks-landing .
docker run -p 3000:3000 echoworks-landing
```

## Production Checklist

- [ ] Set up environment variables in `.env.local` or platform dashboard
- [ ] Replace video file with your actual MP4
- [ ] Replace poster image with your actual image
- [ ] Add Open Graph image (`public/images/og-image.jpg`)
- [ ] Update metadata in `app/layout.tsx` with your actual URLs
- [ ] Update JSON-LD structured data in `components/StructuredData.tsx`
- [ ] Configure calendar booking URL (if using external link)
- [ ] Set up database/email integration in API route (if needed)
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Verify accessibility features
- [ ] Run production build locally: `pnpm build && pnpm start`
- [ ] Check all links work correctly
- [ ] Verify SEO meta tags

## Build Commands

```bash
# Development
pnpm dev          # Start dev server on http://localhost:3000
npm run dev       # Alternative
yarn dev          # Alternative

# Production Build
pnpm build        # Build optimized production bundle
npm run build     # Alternative
yarn build        # Alternative

# Start Production Server
pnpm start        # Start production server (requires build first)
npm start         # Alternative
yarn start        # Alternative

# Linting
pnpm lint         # Run ESLint
npm run lint      # Alternative
yarn lint         # Alternative

# Type Checking
pnpm tsc          # Run TypeScript compiler (no emit)
npm run tsc       # Alternative (if script exists)
```

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
pnpm build
```

### Missing dependencies
```bash
# Reinstall dependencies
rm -rf node_modules
pnpm install
```

### TypeScript errors
```bash
# Check TypeScript config
pnpm tsc --noEmit
```

