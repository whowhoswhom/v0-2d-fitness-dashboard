# GYMBUDDY - Interactive Fitness Dashboard

A Tesla-inspired fitness dashboard with clickable 2D muscle anatomy visualization, real-time exercise data from ExerciseDB, and workout tracking.

## ✨ Features

- **Interactive Muscle Selector**: Click any muscle group to view detailed information
- **Front & Back Views**: Toggle between anterior and posterior anatomical perspectives
- **Real-Time Exercise Data**: Powered by ExerciseDB API with 1,500+ exercises
- **Exercise Library**: Animated GIFs, instructions, and equipment requirements
- **Progress Tracking**: Heat maps and volume charts for training visualization
- **Workout Programs**: Curated training programs with difficulty levels
- **Dark Tesla-Style UI**: Minimalist design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Muscle Visualization**: react-body-highlighter (2D SVG)
- **Exercise API**: ExerciseDB via RapidAPI
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety

## 🚀 Getting Started

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the app.

### ExerciseDB API Setup

1. Get your RapidAPI key from [ExerciseDB on RapidAPI](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
2. Add to your environment variables:

\`\`\`bash
# In Vercel dashboard or .env.local
RAPIDAPI_KEY=your_key_here
\`\`\`

3. The app will automatically fetch real exercise data with GIFs and instructions

## 📁 Project Structure

\`\`\`
gymbuddy/
├── app/
│   ├── page.tsx              # Dashboard with muscle selector
│   ├── progress/page.tsx     # Progress tracking page
│   ├── programs/page.tsx     # Workout programs page
│   ├── api/exercises/        # ExerciseDB API routes
│   └── layout.tsx            # Root layout
├── components/
│   ├── body-selector.tsx     # 2D muscle anatomy selector
│   ├── muscle-panel.tsx      # Slide-in info panel
│   ├── navigation.tsx        # Top navigation bar
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── store.ts              # Zustand state management
│   ├── muscle-map.ts         # Muscle metadata & mapping
│   └── api/                  # ExerciseDB API client
└── public/
    └── placeholder.svg       # Image placeholders
\`\`\`

## 🎯 Muscle Mapping System

The app uses a comprehensive mapping system to connect muscle groups to exercises:

\`\`\`typescript
// lib/muscle-map.ts
export const nameToMuscle: Record<string, MuscleMeta> = {
  'Pecs_L': {
    id: 'pecs_l',
    label: 'Pectoralis (Left)',
    group: 'Chest',
    exercises: ['Bench Press', 'Incline DB Press', 'Cable Fly'],
    // ... more metadata
  },
  // ... 18 muscle groups total
}
\`\`\`

## 🎨 Color System

- **Background**: `#0b0b0b` (near black)
- **Cards**: `#111111` (dark gray)
- **Text**: `#f5f5f5` (off-white)
- **Primary**: `#e53935` (crimson red)
- **Accent**: `#00e5ff` (electric cyan)
- **Border**: `#2a2a2a` (subtle gray)

## 🚀 Deployment

Deploy to Vercel with one click:

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

Or connect your GitHub repository to Vercel for automatic deployments.

Don't forget to add your `RAPIDAPI_KEY` environment variable in the Vercel dashboard.

## ⚡ Performance

- **SVG-Based**: Lightweight 2D muscle diagrams load instantly
- **API Caching**: 24-hour cache for ExerciseDB responses
- **Lazy Loading**: Components load with Suspense boundaries
- **Optimized Images**: Exercise GIFs loaded on-demand

## 📝 License

MIT
