# 7day Website

A modern, minimalist single-page website for 7day - an MVP development agency.

## Features

- **Single-page design** with smooth scroll navigation
- **Dark/Light mode** with localStorage persistence
- **Multi-language support** (English & Russian)
- **Responsive design** - Mobile-first approach
- **Animated sections** with Framer Motion
- **Contact form** with validation

## Sections

1. **Hero** - Gradient blobs background with CTA
2. **Trust** - Animated stats counters
3. **Services** - 4 service cards (MVP, Web, Mobile, AI)
4. **Process** - 4-step timeline
5. **Portfolio** - Project showcase
6. **Pricing** - 3 pricing tiers
7. **FAQ** - Accordion component
8. **Contact** - Form with validation
9. **Footer** - Links and social

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- next-themes
- Heroicons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Trust.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
└── lib/
    ├── translations.ts
    └── utils.ts
```

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Content**: Edit `src/lib/translations.ts`
- **Components**: Modify files in `src/components/`

