"use client"

import { nameToMuscle } from "@/lib/muscle-map"

export function ProgressHeatMap() {
  // Mock data - in real app, this would come from user's training history
  const muscleVolume: Record<string, number> = {
    Chest: 85,
    Quads: 92,
    Core: 65,
    Shoulders: 78,
    Arms: 70,
    Glutes: 88,
    Hamstrings: 75,
    Calves: 60,
  }

  const getIntensityColor = (volume: number) => {
    if (volume >= 80) return "bg-red-500"
    if (volume >= 60) return "bg-orange-500"
    if (volume >= 40) return "bg-yellow-500"
    return "bg-blue-500"
  }

  const getIntensityLabel = (volume: number) => {
    if (volume >= 80) return "High"
    if (volume >= 60) return "Moderate"
    if (volume >= 40) return "Light"
    return "Low"
  }

  // Get unique muscle groups from the 18 individual muscles
  const muscleGroups = Array.from(new Set(Object.values(nameToMuscle).map((m) => m.group)))

  return (
    <div className="space-y-4">
      {muscleGroups.map((group) => {
        const volume = muscleVolume[group] || 0
        return (
          <div key={group} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">{group}</span>
              <span className="text-xs text-white/60">{getIntensityLabel(volume)}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full transition-all duration-500 ${getIntensityColor(volume)}`}
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
