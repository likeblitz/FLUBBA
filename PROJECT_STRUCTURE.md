# FLUBBA Meme Coin Project Structure

## Root Configuration Files

### `package.json`
- **Purpose**: Defines project dependencies, scripts, and metadata
- **Key Dependencies**: React, TypeScript, Tailwind CSS, Supabase, Lucide React
- **Scripts**: `dev` (development server), `build` (production build), `preview` (preview build)

### `vite.config.ts`
- **Purpose**: Vite bundler configuration
- **Features**: React plugin setup, build optimizations

### `tailwind.config.js`
- **Purpose**: Tailwind CSS configuration
- **Custom Features**: Sunday Burger font family setup, custom font utilities

### `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`
- **Purpose**: TypeScript compiler configuration
- **Features**: Strict type checking, modern ES features, React JSX support

### `postcss.config.js`
- **Purpose**: PostCSS configuration for Tailwind CSS processing

### `eslint.config.js`
- **Purpose**: Code linting rules and standards

## HTML Entry Point

### `index.html`
- **Purpose**: Main HTML template
- **Features**: Meta tags, title, root div for React app

## Source Code Directory (`src/`)

### `src/main.tsx`
- **Purpose**: React application entry point
- **Features**: Renders App component into DOM, StrictMode wrapper

### `src/App.tsx` ⭐ **MAIN COMPONENT**
- **Purpose**: Main landing page component
- **Features**: 
  - Hero section with FLUBBA character
  - Navigation with logo and buy button
  - Animated background elements
  - Falling cash animation
  - Responsive design (mobile/desktop)
  - Sunday Burger font implementation
- **Styling**: Purple gradient background, floating elements, bounce animations

### `src/index.css` ⭐ **MAIN STYLES**
- **Purpose**: Global styles and custom CSS
- **Features**:
  - Tailwind CSS imports
  - Sunday Burger font declaration (@font-face)
  - Custom animations (bounce, falling cash)
  - Text stroke utilities for borders
  - Responsive design utilities
  - Animation delay classes

### `src/vite-env.d.ts`
- **Purpose**: TypeScript environment declarations for Vite

## Assets Directory (`src/assets/`)

### `src/assets/Sunday Burger.ttf`
- **Purpose**: Custom font file for unique typography
- **Usage**: Loaded via @font-face in index.css

### `src/assets/h.png`
- **Purpose**: FLUBBA character image
- **Usage**: Main hero image with bounce animation

### `src/assets/buynow-Dzsg7cPa.png`
- **Purpose**: Additional buy button asset (currently unused)

## Key Styling Elements to Modify

### Button Styles (in `src/App.tsx`)
```jsx
// Desktop Buy Button
className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-lg px-8 py-3 rounded-full border-4 border-black"

// Mobile Buy Button  
className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black text-sm px-4 py-2 rounded-full border-2 border-black"
```

### Text Stroke Classes (in `src/index.css`)
```css
.text-stroke { -webkit-text-stroke: 1px black; }
.text-stroke-thick { -webkit-text-stroke: 2px black; }
```

### Font Classes (in `tailwind.config.js`)
```javascript
fontFamily: {
  'sunday': ['Sunday Burger', 'sans-serif'],
  'sans': ['Sunday Burger', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}
```

## Quick Modification Guide

1. **Change Button Colors**: Edit `src/App.tsx` - modify `from-yellow-400 to-yellow-500` classes
2. **Modify Animations**: Edit `src/index.css` - adjust keyframes and animation properties
3. **Update Typography**: Edit `src/App.tsx` - change font classes and text content
4. **Adjust Layout**: Edit `src/App.tsx` - modify Tailwind spacing and positioning classes
5. **Add New Fonts**: Add font files to `src/assets/` and declare in `src/index.css`

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run code linting