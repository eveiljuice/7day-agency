# Design Code System

> **TL;DR**
> Modern, high-contrast aesthetics with a bold Red (#DC2626) & Amber (#F59E0B) color scheme.
> Focus on rounded corners (`rounded-xl`+), smooth Framer Motion interactions, and subtle glow effects.
> Dark mode first mentality, using neutral grays for depth.

## 1. Core Design Tokens

### Colors
**Primary (Brand Red)**
- `bg-primary`: #DC2626 (Main actions, highlights)
- `bg-primary-hover`: #B91C1C
- `bg-primary-light`: #EF4444

**Accent (Energy Amber)**
- `bg-accent`: #F59E0B (Gradients, secondary highlights)
- `bg-accent-hover`: #D97706

**Neutrals (Backgrounds & Text)**
- Background: `bg-neutral-50` (Light) / `bg-neutral-900` (Dark)
- Text Main: `text-secondary` (#171717) / `text-neutral-50` (Dark mode)
- Text Muted: `text-neutral-500` / `text-neutral-400`

**Gradients**
- Flash Gradient: `bg-gradient-to-br from-primary to-accent`

### Typography
- **Font Family**: Inter (`var(--font-inter)`), system-ui, sans-serif.
- **Headings**: Bold weights, tight tracking.
  - `text-3xl` to `text-5xl` (Responsive).
- **Body**: Readable, `text-base` or `text-lg` for intro text.

### Shapes & Effects
- **Border Radius**:
  - Buttons/Inputs: `rounded-xl` (12px)
  - Cards: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- **Shadows**:
  - `shadow-glow-red`: Red glow for primary elements.
  - `shadow-card`: Subtle depth.
  - `shadow-card-hover`: Elevated depth on interaction.

---

## 2. Component Patterns

### Buttons (`<Button />`)
- **Base**: `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all`
- **Primary**: `bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25`
- **Interaction**: Use `framer-motion`:
  ```jsx
  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} ... />
  ```

### Cards (`<Card />`)
- **Container**: `bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden`
- **Hover**: `hover:-translate-y-2 hover:shadow-xl transition-all duration-300`

### Inputs
- **Style**: `w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl`
- **Focus**: `focus:ring-2 focus:ring-primary/50 focus:border-primary`

---

## 3. Layout & Spacing

- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-20 sm:py-24 lg:py-32`
- **Grid System**: Use CSS Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-8`.

---

## 4. Animation Guidelines (Framer Motion)

- **Page Transitions**: Fade in + Slide up.
- **Micro-interactions**: Scale up slightly on hover, scale down on tap.
- **Scroll Animations**: Elements fade in and slide up as they enter the viewport.
- **Blobs**: Use background gradient blobs with `blur-3xl` for ambient lighting.

---

## 5. Implementation Instructions for LLMs

When generating code for this project:

1.  **Framework**: Use Next.js (App Router) + TypeScript + Tailwind CSS.
2.  **Styling**: Prefer Tailwind utility classes over custom CSS.
3.  **Icons**: Use `lucide-react`.
4.  **Structure**:
    -   Wrap main content in `<section className="section-padding">`.
    -   Use `container-max` for width constraints.
5.  **Interactive Elements**: ALWAYS wrap clickable elements (buttons, cards) in `motion.div` or `motion.button` for tactile feel.
6.  **Dark Mode**: Always include `dark:` variants for background, text, and border colors.
7.  **Gradients**: Use the "Flash Gradient" (Red to Amber) for text highlights (`bg-clip-text text-transparent`) or primary buttons.

---

*Use this file as the source of truth for all UI generation.*
