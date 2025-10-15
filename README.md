# GymBuddy - 3D Interactive Fitness Dashboard

A Tesla-inspired fitness dashboard with an interactive 3D muscle anatomy model built with Next.js, React Three Fiber, and Zustand.

## Features

- **Interactive 3D Muscle Model**: Click on muscle groups to view detailed exercise information
- **Animated Highlighting**: Smooth emissive material transitions on hover and selection
- **Slide-in Panel**: Detailed muscle information with exercises, training tips, and performance guidance
- **Progress Tracking**: Heat maps and volume charts to visualize training intensity
- **Workout Programs**: Curated training programs with difficulty levels and target muscle groups
- **Dark Tesla-Style UI**: Minimalist design with smooth animations and electric accents

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **3D Graphics**: React Three Fiber + Drei
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety

## Getting Started

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Adding a Custom 3D Model (Optional)

The app currently uses simplified geometry as a fallback. For the full experience with anatomically accurate muscles:

1. **Prepare your GLB file** with named muscle submeshes:
   - `Pecs_L`, `Pecs_R`
   - `Deltoid_Ant_L`, `Deltoid_Ant_R`
   - `Biceps_L`, `Biceps_R`
   - `Quads_RectusFem_L`, `Quads_RectusFem_R`
   - `Quads_VastusLat_L`, `Quads_VastusLat_R`
   - `Hamstrings_L`, `Hamstrings_R`
   - `Glute_L`, `Glute_R`
   - `Calf_L`, `Calf_R`
   - `Abs_Rectus`
   - `Obliques_L`, `Obliques_R`

2. **Export settings** (Blender):
   - Format: GLB (Binary)
   - Scale: 1.0 (meters)
   - Y-up axis
   - One mesh per muscle (not combined)
   - Optional: DRACO compression + KTX2 textures

3. **Add to project**:
   \`\`\`bash
   # Create models directory
   mkdir -p public/models
   
   # Add your GLB file
   cp /path/to/muscle_male.glb public/models/
   \`\`\`

4. The app will automatically detect and use the GLB model on next reload.

## Project Structure

\`\`\`
gymbuddy/
├── app/
│   ├── page.tsx              # Dashboard with 3D scene
│   ├── progress/page.tsx     # Progress tracking page
│   ├── programs/page.tsx     # Workout programs page
│   └── layout.tsx            # Root layout
├── components/
│   ├── muscle-model.tsx      # GLB-based 3D muscle model
│   ├── fallback-muscle-model.tsx # Fallback geometry component
│   ├── body-canvas.tsx       # Canvas setup with lighting
│   ├── muscle-panel.tsx      # Slide-in info panel
│   ├── navigation.tsx        # Top navigation bar
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── store.ts              # Zustand state management
│   └── muscle-map.ts         # Muscle metadata & mapping (single source of truth)
└── public/
    └── models/               # 3D model assets (optional)
\`\`\`

## Muscle Mapping System

The app uses a sophisticated mapping system to connect GLB mesh names to muscle metadata:

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
  // ... more muscles
}
\`\`\`

## Color System

- **Background**: `#0b0b0b` (near black)
- **Cards**: `#111111` (dark gray)
- **Text**: `#f5f5f5` (off-white)
- **Primary**: `#e53935` (crimson red)
- **Accent**: `#00e5ff` (electric cyan)
- **Border**: `#2a2a2a` (subtle gray)

## Deployment

Deploy to Vercel with one click:

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

Or connect your GitHub repository to Vercel for automatic deployments.

## Performance

- **Adaptive DPR**: Automatically adjusts pixel ratio based on device performance
- **Lazy Loading**: 3D scene loads with Suspense boundaries
- **Optimized Materials**: Emissive highlighting with minimal overhead
- **Preloading**: GLB assets preloaded for instant interaction

## License

MIT
