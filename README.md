# Enhanced Button

An interactive showcase of an enhanced `Button` component built on top of [shadcn/ui](https://ui.shadcn.com/), featuring extra variants, visual effects, sizes, and a loading state — all demonstrated with live examples and copyable code snippets.

> Based on the original project by **Jakob Hoeg**: [github.com/jakobhoeg/enhanced-button](https://github.com/jakobhoeg/enhanced-button)

---

## Features

### Variants
The component supports all standard shadcn/ui variants:

| Variant | Description |
|---|---|
| `default` | Primary filled button |
| `destructive` | Red/danger button |
| `outline` | Bordered button with transparent background |
| `secondary` | Muted secondary button |
| `ghost` | No background, subtle hover |
| `link` | Styled as a hyperlink |

### Effects
New visual effects added on top of the original component:

| Effect | Description |
|---|---|
| `ringHover` | Adds a ring outline on hover |
| `shine` | Continuous animated shine sweep |
| `shineHover` | Shine sweep on hover |
| `gooeyRight` | Gooey blob enters from the right on hover |
| `gooeyLeft` | Gooey blob enters from the left on hover |
| `underline` | Underline shrinks away on hover (use with `variant="link"`) |
| `hoverUnderline` | Underline grows in on hover (use with `variant="link"`) |
| `rainbow` | Animated rainbow gradient border |
| `expandIcon` | Icon slides in/out on hover (requires `icon` + `iconPlacement`) |

### Sizes

| Size | Description |
|---|---|
| `xs` | Extra small |
| `sm` | Small |
| `default` | Default |
| `lg` | Large |
| `icon-xs` | Square icon button, extra small |
| `icon-sm` | Square icon button, small |
| `icon` | Square icon button, default |
| `icon-lg` | Square icon button, large |

### Loading State
Pass the `loading` prop to any button to display a spinner and disable interaction:

```tsx
<Button loading>Saving...</Button>
```

---

## Usage

```tsx
import { Button } from '@/components/ui/button';

// Basic
<Button>Click me</Button>

// Variant
<Button variant="destructive">Delete</Button>

// Effect
<Button effect="shine">Shine</Button>

// Effect with icon
import { ArrowRight } from 'lucide-react';

<Button effect="expandIcon" icon={ArrowRight} iconPlacement="right">
  Continue
</Button>

// Size
<Button size="lg">Large</Button>

// Loading
<Button loading>Saving...</Button>
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) or another package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joao-carmassi/enhanced-button
cd enhanced-button
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
- [Shiki](https://shiki.style/) — syntax highlighting for code blocks

---

## Credits

Original concept and component by [Jakob Hoeg](https://github.com/jakobhoeg):  
[github.com/jakobhoeg/enhanced-button](https://github.com/jakobhoeg/enhanced-button)
