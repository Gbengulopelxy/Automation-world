# EchoWorks AI Landing Page

A modern, fully-responsive Next.js landing page built with Tailwind CSS and shadcn/ui components.

## Features

- **Video Hero Section** - Autoplay background video with accessible fallback
- **Services Showcase** - Five key AI service offerings
- **Case Studies Portfolio** - Real client success stories with modal details
- **Testimonials Carousel** - Client testimonials with auto-rotation
- **Pricing Section** - Three-tier pricing with expandable details
- **Contact Form** - Lead capture with validation and toast notifications
- **Schedule CTA** - Calendar booking integration
- **Responsive Footer** - Social links, newsletter, and legal pages

## Installation

### Prerequisites

- **Node.js 18+** (required for Next.js 14)
- **npm**, **yarn**, or **pnpm** package manager

### Step 1: Install Dependencies

Install all project dependencies including Next.js, React, Tailwind CSS, and shadcn/ui components:

```bash
npm install
# or
yarn install
# or
pnpm install
```

This will install:
- **Next.js 14** (React framework with App Router)
- **React 18** (UI library)
- **Tailwind CSS** (utility-first CSS framework)
- **shadcn/ui** components (Button, Card, Input, Dialog, Toast, etc.)
- **Radix UI** primitives (accessible component primitives)
- **Lucide React** (icon library)
- **TypeScript** (type safety)

### Step 2: Set Up shadcn/ui (if not already configured)

If you need to add more shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

### Step 3: Configure Environment (if needed)

Create a `.env.local` file for environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://echoworks.ai
```

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Video and Poster Image

### Video Setup

1. **Place your MP4 video file** in the `public/videos/` directory:
   ```
   public/
     videos/
       Robot.mp4  # Your video file
   ```

2. **Update the video path** in `app/(root)/page.tsx`:
   ```tsx
   <VideoHero
     src="/videos/Robot.mp4"  // Update this to match your filename
     // ...
   />
   ```

3. **Video Requirements:**
   - **Format**: MP4 (H.264 codec recommended for best browser compatibility)
   - **Aspect Ratio**: 16:9 recommended for optimal display
   - **Resolution**: 1920x1080 (Full HD) or higher
   - **File Size**: Under 10MB recommended for fast loading
   - **Duration**: 30-60 seconds recommended for hero videos
   - **Codec**: H.264 for maximum browser support
   - **Content**: Ensure no critical information in center area (reserved for text overlay)

### Poster Image Setup

1. **Place your poster image** in the `public/images/` directory:
   ```
   public/
     images/
       hero-poster.png  # Your poster image (or .jpg)
   ```

2. **Update the poster path** in `app/(root)/page.tsx`:
   ```tsx
   <VideoHero
     poster="/images/hero-poster.png"  // Update this to match your filename
     // ...
   />
   ```

3. **Poster Image Requirements:**
   - **Format**: JPG or PNG
   - **Resolution**: 1920x1080 (should match video aspect ratio)
   - **File Size**: Under 500KB recommended
   - **Dimensions**: Same aspect ratio as video (16:9) for consistency
   - **Content**: Representative frame from your video or branded image
   - **Recommended sizes:**
     - **Standard**: 1920x1080px (Full HD)
     - **Retina**: 3840x2160px (4K) for high-DPI displays
     - **Mobile optimized**: 1280x720px as fallback

### Open Graph Image Setup

1. **Place your OG image** in the `public/images/` directory:
   ```
   public/
     images/
       og-image.jpg  # Open Graph image for social sharing
   ```

2. **OG Image Requirements:**
   - **Resolution**: 1200x630px (Facebook/LinkedIn standard)
   - **File Size**: Under 1MB
   - **Format**: JPG or PNG
   - **Aspect Ratio**: 1.91:1 (1200x630)

### Quick Video Optimization Commands

```bash
# Extract poster frame from video
ffmpeg -i Robot.mp4 -ss 00:00:01 -vframes 1 -q:v 2 hero-poster.jpg

# Compress video (reduce file size)
ffmpeg -i Robot.mp4 -vcodec h264 -acodec mp2 -crf 23 -preset medium Robot-compressed.mp4

# Convert to WebM (optional, for better compression)
ffmpeg -i Robot.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus Robot.webm
```

## Accessibility Features

### Video Hero Accessibility

The `VideoHero` component includes comprehensive accessibility features:

#### 1. **Prefers-Reduced-Motion Support**
- Automatically detects `prefers-reduced-motion: reduce` user preference
- Falls back to static poster image instead of autoplay video
- Respects user's motion sensitivity preferences
- Prevents potential vestibular disorders triggers

#### 2. **Text Contrast**
- Semi-transparent gradient overlay (`from-black/60 via-black/40 to-black/60`) ensures WCAG AA contrast compliance
- Text uses white color with drop shadows for enhanced readability
- Overlay opacity can be adjusted if needed for better contrast

#### 3. **Screen Reader Support**
- `aria-label` attribute on video element
- Descriptive `title` prop for video context
- `aria-hidden="true"` on decorative overlay elements
- Screen reader-only fallback text for unsupported browsers

#### 4. **Low Bandwidth Fallbacks**
- Detects data saver mode (`navigator.connection.saveData`)
- Detects slow connections (2g, slow-2g)
- Automatically falls back to poster image
- Pauses video to save user's data

#### 5. **Mobile Compatibility**
- `playsInline` attribute for iOS Safari compatibility
- Responsive poster image fallback
- Touch-friendly interaction

### Accessibility Best Practices

- All interactive elements have proper ARIA labels
- Form inputs have associated labels
- Error messages are announced to screen readers
- Keyboard navigation supported throughout
- Focus indicators visible and clear

## Project Structure

```
.
├── app/
│   ├── (root)/
│   │   └── page.tsx          # Main landing page
│   ├── api/
│   │   └── lead/
│   │       └── route.ts      # Serverless API endpoint
│   ├── globals.css           # Global styles and Tailwind directives
│   └── layout.tsx            # Root layout with metadata & JSON-LD
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   ├── VideoHero.tsx         # Hero section with video background
│   ├── HeroContent.tsx       # Hero headline, subheadline, CTAs
│   ├── Services.tsx          # Services showcase
│   ├── CaseStudies.tsx       # Portfolio section with modal
│   ├── Testimonials.tsx      # Testimonials carousel
│   ├── Pricing.tsx           # Pricing tiers with expandable modal
│   ├── ContactForm.tsx       # Contact form with validation
│   ├── ScheduleCTA.tsx       # Calendar booking CTA
│   └── Footer.tsx            # Footer component
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
├── public/
│   ├── videos/
│   │   └── Robot.mp4         # Hero video (replace with your video)
│   └── images/
│       ├── hero-poster.png   # Poster image (replace with your image)
│       └── og-image.jpg      # Open Graph image for social sharing
├── package.json
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## SEO Configuration

### Meta Tags

SEO metadata is configured in `app/layout.tsx` using Next.js Metadata API:

- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Robots directives
- Canonical URL
- Structured data (JSON-LD)

### Open Graph Images

Place your OG images in `public/images/`:
- `og-image.jpg` - 1200x630px for Facebook/LinkedIn
- `twitter-image.jpg` - 1200x675px for Twitter (optional)

## Customization

### Changing the Company Name

1. Update `app/layout.tsx` metadata
2. Search and replace "EchoWorks AI" across component files
3. Update JSON-LD structured data in layout

### Updating Content

All content (headlines, descriptions, testimonials, etc.) is defined in the respective component files. Simply edit the text directly in each component.

### Styling

The project uses Tailwind CSS with shadcn/ui theme. Customize:
- Colors: `tailwind.config.ts` and CSS variables in `app/globals.css`
- Components: Edit individual component files in `components/`

## Building for Production

```bash
npm run build
npm start
```

For deployment on Vercel, Netlify, or other platforms, follow their Next.js deployment guides.

## API Endpoint

The contact form posts to `/api/lead/route.ts` - a serverless Next.js API route. Currently logs submissions server-side. To implement in production:

- Add database storage (PostgreSQL, MongoDB, etc.)
- Integrate with CRM (Salesforce, HubSpot, etc.)
- Send email notifications
- Add rate limiting and spam protection

## License

MIT
