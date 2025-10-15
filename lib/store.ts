import { create } from "zustand"

export type MuscleId =
  | "pecs_l"
  | "pecs_r"
  | "deltoid_ant_l"
  | "deltoid_ant_r"
  | "biceps_l"
  | "biceps_r"
  | "quads_rf_l"
  | "quads_rf_r"
  | "quads_vl_l"
  | "quads_vl_r"
  | "hamstrings_l"
  | "hamstrings_r"
  | "glute_l"
  | "glute_r"
  | "calf_l"
  | "calf_r"
  | "abs_rectus"
  | "obliques_l"
  | "obliques_r"

interface MuscleStore {
  selectedMuscle: MuscleId | string | null
  setSelectedMuscle: (muscle: MuscleId | string | null) => void
  hoveredMuscle: MuscleId | null
  setHoveredMuscle: (muscle: MuscleId | null) => void
}

export const useMuscleStore = create<MuscleStore>((set) => ({
  selectedMuscle: null,
  setSelectedMuscle: (muscle) => {
    console.log("[v0] Store updating selectedMuscle to:", muscle)
    set({ selectedMuscle: muscle })
  },
  hoveredMuscle: null,
  setHoveredMuscle: (muscle) => set({ hoveredMuscle: muscle }),
}))
