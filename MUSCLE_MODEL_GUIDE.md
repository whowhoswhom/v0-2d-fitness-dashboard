# 3D Muscle Model Setup Guide

This guide explains how to create or modify a 3D muscle model for GymBuddy.

## Required Mesh Names

Your GLB file must contain meshes with these exact names for click detection to work:

### Upper Body
- `Pecs_L` - Left pectoralis
- `Pecs_R` - Right pectoralis
- `Deltoid_Ant_L` - Left anterior deltoid
- `Deltoid_Ant_R` - Right anterior deltoid
- `Biceps_L` - Left biceps
- `Biceps_R` - Right biceps

### Core
- `Abs_Rectus` - Rectus abdominis (six-pack)
- `Obliques_L` - Left obliques
- `Obliques_R` - Right obliques

### Lower Body
- `Quads_RectusFem_L` - Left rectus femoris
- `Quads_RectusFem_R` - Right rectus femoris
- `Quads_VastusLat_L` - Left vastus lateralis
- `Quads_VastusLat_R` - Right vastus lateralis
- `Hamstrings_L` - Left hamstrings
- `Hamstrings_R` - Right hamstrings
- `Glute_L` - Left glute
- `Glute_R` - Right glute
- `Calf_L` - Left calf
- `Calf_R` - Right calf

## Blender Export Checklist

1. **Separate Meshes**: Each muscle must be a separate mesh object
2. **Naming**: Use exact names from the list above
3. **Scale**: Export at 1.0 unit scale (meters)
4. **Orientation**: Y-up axis
5. **Materials**: Can be shared; will be overridden at runtime
6. **Pivot Points**: Center pivots for each mesh

### Export Settings

\`\`\`
Format: glTF Binary (.glb)
Include: Selected Objects (or all muscle meshes)
Transform:
  - Scale: 1.0
  - Y Up
Geometry:
  - Apply Modifiers: Yes
  - UVs: Yes
  - Normals: Yes
  - Tangents: No
  - Vertex Colors: No
Compression:
  - Draco Compression: Optional (smaller file size)
\`\`\`

## Renaming Existing Models

If you have an anatomy model with different names:

1. Open in Blender
2. Select each muscle mesh in the Outliner
3. Rename to match the required names
4. Export as GLB

## Testing Your Model

1. Place `muscle_male.glb` in `public/models/`
2. Run the dev server: `npm run dev`
3. Open browser console to check for errors
4. Click on muscles to verify hit detection
5. Check that highlighting works correctly

## Troubleshooting

**Muscles not clickable?**
- Verify mesh names match exactly (case-sensitive)
- Check that meshes are separate objects, not combined
- Ensure meshes have proper geometry (not empty)

**Highlighting looks wrong?**
- Check that materials are MeshStandardMaterial compatible
- Verify normals are correct (recalculate in Blender if needed)
- Ensure scale is appropriate (model should be ~1.8 units tall)

**Performance issues?**
- Reduce polygon count (aim for <50k total triangles)
- Enable Draco compression
- Use KTX2 textures if using texture maps
- Simplify non-muscle geometry

## Adding New Muscles

To add muscles not in the current system:

1. Add mesh to GLB with descriptive name (e.g., `Triceps_L`)
2. Update `lib/muscle-map.ts`:
   \`\`\`typescript
   export type MuscleId = 
     | 'pecs_l' 
     | 'triceps_l' // Add new ID
     // ... existing IDs
   
   export const nameToMuscle: Record<string, MuscleMeta> = {
     'Triceps_L': {
       id: 'triceps_l',
       label: 'Triceps (Left)',
       group: 'Arms',
       exercises: ['Close-Grip Bench', 'Overhead Extension', 'Dips'],
       howToPerform: '...',
       whyItMatters: '...',
       whenToTrain: '...',
     },
     // ... existing muscles
   }
   \`\`\`

## Resources

- [Blender GLB Export](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html)
- [Three.js GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- [React Three Fiber useGLTF](https://docs.pmnd.rs/react-three-fiber/api/hooks#usegltf)
