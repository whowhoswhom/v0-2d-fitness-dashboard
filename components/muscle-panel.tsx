"use client"

import { X, Loader2 } from "lucide-react"
import { useMuscleStore } from "@/lib/store"
import { getMuscleById, nameToMuscle } from "@/lib/muscle-map"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import type { ExerciseDBExercise } from "@/lib/api/types"

export function MusclePanel() {
  const { selectedMuscle, setSelectedMuscle } = useMuscleStore()
  const [exercises, setExercises] = useState<ExerciseDBExercise[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const muscle = selectedMuscle
    ? Object.values(nameToMuscle).find((m) => m.group === selectedMuscle) || getMuscleById(selectedMuscle)
    : null

  useEffect(() => {
    if (!muscle) return

    const fetchExercises = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/exercises/${muscle.group}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch exercises: ${response.statusText}`)
        }

        const data = await response.json()
        setExercises(data.exercises || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load exercises")
        console.error("[v0] Error fetching exercises:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchExercises()
  }, [muscle])

  if (!selectedMuscle || !muscle) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute right-0 top-0 z-40 h-full w-full max-w-md border-l border-white/10 bg-[#111111] md:w-96"
      >
        <div className="flex h-full flex-col pt-16">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[#f5f5f5]">{muscle.label}</h2>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#f5f5f5]/40">{muscle.group}</p>
            </div>
            <button
              onClick={() => setSelectedMuscle(null)}
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5 text-[#f5f5f5]" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Primary Exercises section with API data */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f5f5f5]/60">
                  {loading
                    ? "Loading Exercises..."
                    : `Exercises${exercises.length > 0 ? ` (${exercises.slice(0, 8).length})` : ""}`}
                </h3>

                {/* Loading State */}
                {loading && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-[#f5f5f5]/40" />
                  </div>
                )}

                {/* Error State */}
                {error && !loading && <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-400">{error}</div>}

                {/* Success State - Exercise Cards */}
                {!loading && !error && exercises.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {exercises.slice(0, 8).map((exercise, index) => (
                      <div
                        key={exercise.id}
                        className="flex items-center gap-3 rounded-lg bg-zinc-800 p-3 transition-colors hover:bg-zinc-750"
                      >
                        {/* Exercise GIF */}
                        <img
                          src={exercise.gifUrl || "/placeholder.svg"}
                          alt={exercise.name}
                          className="h-16 w-16 rounded object-cover"
                          loading="lazy"
                        />

                        {/* Exercise Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#f5f5f5] capitalize truncate">{exercise.name}</p>
                          <p className="mt-1 text-xs text-[#f5f5f5]/60 capitalize">
                            {exercise.equipment} • {exercise.target}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Empty State */}
                {!loading && !error && exercises.length === 0 && (
                  <p className="py-4 text-center text-sm text-[#f5f5f5]/40">No exercises found for this muscle group</p>
                )}
              </div>

              {/* How to Perform */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f5f5f5]/60">
                  How to Perform
                </h3>
                <p className="leading-relaxed text-[#f5f5f5]/80">{muscle.howToPerform}</p>
              </div>

              {/* Why it Matters */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f5f5f5]/60">
                  Why it Matters
                </h3>
                <p className="leading-relaxed text-[#f5f5f5]/80">{muscle.whyItMatters}</p>
              </div>

              {/* When to Train */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f5f5f5]/60">When to Train</h3>
                <p className="leading-relaxed text-[#f5f5f5]/80">{muscle.whenToTrain}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
