import type { MuscleId } from "./store"

export type MuscleMeta = {
  id: MuscleId
  label: string
  group: "Chest" | "Shoulders" | "Arms" | "Core" | "Glutes" | "Quads" | "Hamstrings" | "Calves"
  exercises: string[]
  howToPerform: string
  whyItMatters: string
  whenToTrain: string
}

// Map GLB mesh names to muscle metadata
export const nameToMuscle: Record<string, MuscleMeta> = {
  Pecs_L: {
    id: "pecs_l",
    label: "Pectoralis (Left)",
    group: "Chest",
    exercises: ["Bench Press", "Incline DB Press", "Cable Fly"],
    howToPerform: "Engage your chest muscles by bringing your arms together in a hugging motion.",
    whyItMatters: "Building your pecs enhances upper body strength and aesthetics.",
    whenToTrain: "Train 2-3 times per week with at least one rest day in between.",
  },
  Pecs_R: {
    id: "pecs_r",
    label: "Pectoralis (Right)",
    group: "Chest",
    exercises: ["Bench Press", "Incline DB Press", "Cable Fly"],
    howToPerform: "Engage your chest muscles by bringing your arms together in a hugging motion.",
    whyItMatters: "Building your pecs enhances upper body strength and aesthetics.",
    whenToTrain: "Train 2-3 times per week with at least one rest day in between.",
  },
  Deltoid_Ant_L: {
    id: "deltoid_ant_l",
    label: "Anterior Deltoid (Left)",
    group: "Shoulders",
    exercises: ["Overhead Press", "Front Raise", "Arnold Press"],
    howToPerform: "Press weight overhead while keeping core tight and avoiding excessive arch.",
    whyItMatters: "Strong shoulders improve pressing strength and shoulder stability.",
    whenToTrain: "Train 2-3 times per week, allowing 48 hours between sessions.",
  },
  Deltoid_Ant_R: {
    id: "deltoid_ant_r",
    label: "Anterior Deltoid (Right)",
    group: "Shoulders",
    exercises: ["Overhead Press", "Front Raise", "Arnold Press"],
    howToPerform: "Press weight overhead while keeping core tight and avoiding excessive arch.",
    whyItMatters: "Strong shoulders improve pressing strength and shoulder stability.",
    whenToTrain: "Train 2-3 times per week, allowing 48 hours between sessions.",
  },
  Biceps_L: {
    id: "biceps_l",
    label: "Biceps (Left)",
    group: "Arms",
    exercises: ["Barbell Curl", "Hammer Curl", "Preacher Curl"],
    howToPerform: "Curl weight toward shoulders while keeping elbows stationary.",
    whyItMatters: "Biceps are key for pulling movements and arm aesthetics.",
    whenToTrain: "Train 2-3 times per week with moderate to high volume.",
  },
  Biceps_R: {
    id: "biceps_r",
    label: "Biceps (Right)",
    group: "Arms",
    exercises: ["Barbell Curl", "Hammer Curl", "Preacher Curl"],
    howToPerform: "Curl weight toward shoulders while keeping elbows stationary.",
    whyItMatters: "Biceps are key for pulling movements and arm aesthetics.",
    whenToTrain: "Train 2-3 times per week with moderate to high volume.",
  },
  Quads_RectusFem_L: {
    id: "quads_rf_l",
    label: "Rectus Femoris (Left)",
    group: "Quads",
    exercises: ["Back Squat", "Leg Press", "Split Squat"],
    howToPerform: "Extend your knees against resistance while maintaining proper alignment.",
    whyItMatters: "Strengthening your quads improves lower body power and performance.",
    whenToTrain: "Train 2-3 times per week with moderate to high intensity.",
  },
  Quads_RectusFem_R: {
    id: "quads_rf_r",
    label: "Rectus Femoris (Right)",
    group: "Quads",
    exercises: ["Back Squat", "Leg Press", "Split Squat"],
    howToPerform: "Extend your knees against resistance while maintaining proper alignment.",
    whyItMatters: "Strengthening your quads improves lower body power and performance.",
    whenToTrain: "Train 2-3 times per week with moderate to high intensity.",
  },
  Quads_VastusLat_L: {
    id: "quads_vl_l",
    label: "Vastus Lateralis (Left)",
    group: "Quads",
    exercises: ["Leg Extension", "Front Squat", "Lunge"],
    howToPerform: "Focus on full range of motion during knee extension movements.",
    whyItMatters: "The vastus lateralis is crucial for knee stability and power.",
    whenToTrain: "Train 2-3 times per week with progressive overload.",
  },
  Quads_VastusLat_R: {
    id: "quads_vl_r",
    label: "Vastus Lateralis (Right)",
    group: "Quads",
    exercises: ["Leg Extension", "Front Squat", "Lunge"],
    howToPerform: "Focus on full range of motion during knee extension movements.",
    whyItMatters: "The vastus lateralis is crucial for knee stability and power.",
    whenToTrain: "Train 2-3 times per week with progressive overload.",
  },
  Hamstrings_L: {
    id: "hamstrings_l",
    label: "Hamstrings (Left)",
    group: "Hamstrings",
    exercises: ["Romanian Deadlift", "Nordic Curl", "Leg Curl"],
    howToPerform: "Hinge at hips while maintaining neutral spine and feeling stretch in hamstrings.",
    whyItMatters: "Strong hamstrings prevent injury and improve athletic performance.",
    whenToTrain: "Train 2-3 times per week with emphasis on eccentric control.",
  },
  Hamstrings_R: {
    id: "hamstrings_r",
    label: "Hamstrings (Right)",
    group: "Hamstrings",
    exercises: ["Romanian Deadlift", "Nordic Curl", "Leg Curl"],
    howToPerform: "Hinge at hips while maintaining neutral spine and feeling stretch in hamstrings.",
    whyItMatters: "Strong hamstrings prevent injury and improve athletic performance.",
    whenToTrain: "Train 2-3 times per week with emphasis on eccentric control.",
  },
  Glute_L: {
    id: "glute_l",
    label: "Glute (Left)",
    group: "Glutes",
    exercises: ["Hip Thrust", "Bulgarian Split Squat", "Sumo Deadlift"],
    howToPerform: "Drive through heels and squeeze glutes at top of movement.",
    whyItMatters: "Glutes are the powerhouse for lower body strength and speed.",
    whenToTrain: "Train 2-4 times per week with high volume and intensity.",
  },
  Glute_R: {
    id: "glute_r",
    label: "Glute (Right)",
    group: "Glutes",
    exercises: ["Hip Thrust", "Bulgarian Split Squat", "Sumo Deadlift"],
    howToPerform: "Drive through heels and squeeze glutes at top of movement.",
    whyItMatters: "Glutes are the powerhouse for lower body strength and speed.",
    whenToTrain: "Train 2-4 times per week with high volume and intensity.",
  },
  Calf_L: {
    id: "calf_l",
    label: "Calf (Left)",
    group: "Calves",
    exercises: ["Standing Calf Raise", "Seated Calf Raise", "Jump Rope"],
    howToPerform: "Rise onto toes with controlled motion, full stretch at bottom.",
    whyItMatters: "Calves are essential for running, jumping, and ankle stability.",
    whenToTrain: "Train 3-4 times per week with high reps and frequency.",
  },
  Calf_R: {
    id: "calf_r",
    label: "Calf (Right)",
    group: "Calves",
    exercises: ["Standing Calf Raise", "Seated Calf Raise", "Jump Rope"],
    howToPerform: "Rise onto toes with controlled motion, full stretch at bottom.",
    whyItMatters: "Calves are essential for running, jumping, and ankle stability.",
    whenToTrain: "Train 3-4 times per week with high reps and frequency.",
  },
  Abs_Rectus: {
    id: "abs_rectus",
    label: "Rectus Abdominis",
    group: "Core",
    exercises: ["Hanging Leg Raise", "Ab Wheel", "Cable Crunch"],
    howToPerform: "Flex spine while maintaining tension throughout the movement.",
    whyItMatters: "Core strength is fundamental for all compound movements and stability.",
    whenToTrain: "Train 3-4 times per week with varied rep ranges.",
  },
  Obliques_L: {
    id: "obliques_l",
    label: "Obliques (Left)",
    group: "Core",
    exercises: ["Pallof Press", "Side Plank", "Russian Twist"],
    howToPerform: "Resist rotation while maintaining rigid torso position.",
    whyItMatters: "Obliques provide rotational strength and spinal stability.",
    whenToTrain: "Train 3-4 times per week with anti-rotation focus.",
  },
  Obliques_R: {
    id: "obliques_r",
    label: "Obliques (Right)",
    group: "Core",
    exercises: ["Pallof Press", "Side Plank", "Russian Twist"],
    howToPerform: "Resist rotation while maintaining rigid torso position.",
    whyItMatters: "Obliques provide rotational strength and spinal stability.",
    whenToTrain: "Train 3-4 times per week with anti-rotation focus.",
  },
}

// Helper to get muscle metadata by ID
export function getMuscleById(id: MuscleId): MuscleMeta | undefined {
  return Object.values(nameToMuscle).find((m) => m.id === id)
}

// Helper to get muscle by group name
export function getMuscleByGroup(groupName: string): MuscleMeta | undefined {
  return Object.values(nameToMuscle).find((m) => m.group === groupName)
}
