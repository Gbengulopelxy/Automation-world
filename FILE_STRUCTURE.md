# File Structure

## Project Directory Structure

```
echoworks-ai-landing/
├── app/
│   ├── (root)/
│   │   └── page.tsx              # Main landing page (Client Component)
│   ├── globals.css               # Global styles with Tailwind directives
│   └── layout.tsx                # Root layout with metadata (Server Component)
│
├── components/
│   ├── ui/                       # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   └── textarea.tsx
│   │
│   ├── VideoHero.tsx             # Hero section with video background
│   ├── HeroContent.tsx           # Hero headline, subheadline, CTAs
│   ├── Services.tsx              # Services section (5 service cards)
│   ├── CaseStudies.tsx           # Case studies/portfolio section (6 cards)
│   ├── Testimonials.tsx          # Testimonials carousel (5 testimonials)
│   ├── Pricing.tsx               # Pricing section (3 tiers with expandable details)
│   ├── ContactForm.tsx           # Contact form + calendar booking CTA
│   └── Footer.tsx                # Footer with social links, newsletter, legal
│
├── lib/
│   └── utils.ts                  # Utility functions (cn helper for Tailwind)
│
├── public/
│   ├── videos/
│   │   └── hero-video.mp4        # Place your MP4 video here
│   └── images/
│       ├── hero-poster.jpg       # Place your poster image here
│       ├── og-image.jpg          # Open Graph image for social sharing (1200x630)
│       └── twitter-image.jpg     # Twitter card image
│
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore file
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project README with setup instructions
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Page Structure (app/(root)/page.tsx)

The main landing page renders sections in this order:

1. **Hero Section** (`VideoHero` + `HeroContent`)
   - Full-screen video background
   - h1 heading in HeroContent
   - Primary CTA: "Get a free consult"
   - Secondary CTA: "View pricing"

2. **Services Section** (`Services`)
   - h2 heading: "Our Services"
   - Responsive grid: 1 col mobile → 2 cols tablet → 3 cols desktop
   - 5 service cards with icons

3. **Case Studies Section** (`CaseStudies`)
   - h2 heading: "Case Studies"
   - Responsive grid: 1 col mobile → 2 cols tablet → 3 cols desktop
   - 6 case study cards with "View case study" CTAs

4. **Testimonials Section** (`Testimonials`)
   - h2 heading: "What Our Clients Say"
   - Auto-rotating carousel (5 seconds)
   - Manual navigation buttons and dots
   - 5 client testimonials

5. **Pricing Section** (`Pricing`)
   - h2 heading: "Pricing"
   - Responsive grid: 1 col mobile → 3 cols desktop
   - 3 pricing tiers (Starter, Professional, Enterprise)
   - Expandable details with "View Pricing Details" button

6. **Contact Form Section** (`ContactForm`)
   - h2 heading: "Get In Touch"
   - Responsive layout: stacked mobile → side-by-side desktop
   - Contact form: name, email, company, budget, message
   - Calendar booking CTA card

7. **Footer** (`Footer`)
   - Company info, social links, newsletter signup
   - Quick links, legal pages (Privacy, Terms, Cookies)
   - Copyright information

## Semantic Headings

- **h1**: Used once in `HeroContent.tsx` for the main headline
- **h2**: Used in each section component for section titles:
  - Services: "Our Services"
  - Case Studies: "Case Studies"
  - Testimonials: "What Our Clients Say"
  - Pricing: "Pricing"
  - Contact: "Get In Touch"

## Responsive Breakpoints

Uses Tailwind CSS default breakpoints:
- **sm**: 640px (small tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)
- **2xl**: 1536px (extra large desktops)

## Component Dependencies

All section components:
- Use `shadcn/ui` components (`Card`, `Button`, `Input`, etc.)
- Include static sample data arrays defined inside each component
- Are client components (`"use client"` directive)
- Use Tailwind CSS for styling
- Follow accessible patterns (aria-labels, semantic HTML)

## Metadata

Metadata is exported from `app/layout.tsx` (Server Component), not from the page:
- Title, description, keywords
- Open Graph tags (OG image placeholder)
- Twitter Card tags
- Robots directives
- Canonical URL

## Video and Image Setup

See comments in `app/(root)/page.tsx` for detailed instructions on:
1. Placing the MP4 video file in `public/videos/`
2. Placing the poster image in `public/images/`
3. Updating Open Graph images for social sharing

