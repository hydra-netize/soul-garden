# Soul Garden

An interactive emotional website built as a personal gift. A mobile-first, single-page React application that tells a short interactive story in 8 tap-driven scenes.

## Features

- 8 immersive scenes with smooth transitions
- Framer Motion animations for butterflies, clouds, and UI effects
- Mobile-first design with touch optimizations
- Personalized Tamil/English (Tanglish) narrative
- Interactive elements including:
  - Typewriter text effects
  - Floating butterflies
  - Drifting clouds with staggered reveals
  - Clickable black hole that opens a personal message modal
  - Randomly positioned flower box
  - Final heartfelt closing message

## Tech Stack

- React 18+
- Vite (for fast development and building)
- Framer Motion (for animations)
- CSS3 (with CSS variables and animations)
- JavaScript ES6+

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shashin192/soul-garden.git

# Navigate to project directory
cd soul-garden

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  ├── App.jsx              # Main application state machine
  ├── index.css            # Global styles and variables
  ├── main.jsx             # Entry point
  │
  ├── components/          # React components
  │   ├── SceneOne.jsx     # Scene 1: Opening
  │   ├── SceneTwo.jsx     # Scene 2: Black Dot
  │   ├── SceneThree.jsx   # Scene 3: Black Screen
  │   ├── SceneFour.jsx    # Scene 4: Comfort Message
  │   ├── SceneFive.jsx    # Scene 5: Soul Garden
  │   ├── SceneSix.jsx     # Scene 6: Flower Box
  │   ├── SceneSeven.jsx   # Scene 7: Black Hole Modal
  │   ├── SceneEight.jsx   # Scene 8: Closing Message
  │   ├── Cloud.jsx        # Reusable cloud component
  │   ├── Butterfly.jsx    # Reusable butterfly component
  │   └── *.css            # Component-specific styles
  │
  └── content/
      └── text.js          # All copy text (verbatim from specification)
```

## Customization

All text content is located in `src/content/text.js` exactly as provided in the specification. To modify the narrative, edit the constants in this file.

## Design Notes

- Built to be primarily experienced on mobile devices
- All touch targets are ≥44px for comfortable interaction
- Scene transitions use fade and motion animations for smooth flow
- Includes optional reduced-motion considerations
- Black hole/persistent element appears from Scene 5 onward
- Modal (Scene 7) is accessible repeatedly from the black hole in Scene 6

## Deployment

This project is configured for easy deployment to Vercel, Netlify, or similar static hosting platforms. The build output is optimized for performance.

## License

Personal use - created as a gift.