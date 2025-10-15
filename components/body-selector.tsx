"use client"

import { useState } from "react"
import Model from "react-body-highlighter"
import { useMuscleStore } from "@/lib/store"

export function BodySelector() {
  const [view, setView] = useState<"front" | "back">("front")
  const { setSelectedMuscle } = useMuscleStore()

  const handleMuscleClick = (muscleName: string) => {
    const muscleMap: Record<string, string> = {
      chest: "Chest",
      trapezius: "Shoulders",
      "front-deltoids": "Shoulders",
      "back-deltoids": "Shoulders",
      biceps: "Arms",
      triceps: "Arms",
      forearm: "Arms",
      abs: "Core",
      obliques: "Core",
      gluteal: "Glutes",
      quadriceps: "Quads",
      hamstring: "Hamstrings",
      adductor: "Hamstrings",
      calves: "Calves",
      "upper-back": "Shoulders",
      "lower-back": "Core",
    }

    const group = muscleMap[muscleName]
    if (group) {
      setSelectedMuscle(group as any)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setView("front")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            view === "front" ? "bg-red-600 text-white" : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
          }`}
        >
          FRONT VIEW
        </button>
        <button
          onClick={() => setView("back")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            view === "back" ? "bg-red-600 text-white" : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
          }`}
        >
          BACK VIEW
        </button>
      </div>

      {/* Body Model */}
      <div className="relative">
        {view === "front" ? (
          <Model
            type="anterior"
            onClick={(params: any) => handleMuscleClick(params.muscle)}
            highlightedColors={["#e53935", "#d32f2f"]}
            style={{ width: "350px", height: "auto", cursor: "pointer" }}
          />
        ) : (
          <Model
            type="posterior"
            onClick={(params: any) => handleMuscleClick(params.muscle)}
            highlightedColors={["#e53935", "#d32f2f"]}
            style={{ width: "350px", height: "auto", cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  )
}
