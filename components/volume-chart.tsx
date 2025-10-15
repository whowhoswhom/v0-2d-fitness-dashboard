"use client"

import { nameToMuscle } from "@/lib/muscle-map"

export function VolumeChart() {
  // Get unique muscle groups from the 18 individual muscles
  const muscleGroups = Array.from(new Set(Object.values(nameToMuscle).map((m) => m.group)))

  // Mock data - in real app, this would come from user's training history
  const weeklyVolume: Record<string, number> = {
    Chest: 18,
    Quads: 24,
    Core: 15,
    Shoulders: 16,
    Arms: 12,
    Glutes: 20,
    Hamstrings: 18,
    Calves: 10,
  }

  const maxVolume = Math.max(...Object.values(weeklyVolume))

  return (
    <div className="space-y-4">
      {muscleGroups.map((group) => {
        const volume = weeklyVolume[group] || 0
        const percentage = (volume / maxVolume) * 100

        return (
          <div key={group} className="flex items-center gap-4">
            <div className="w-24 text-sm font-medium text-white">{group}</div>
            <div className="flex-1">
              <div className="h-8 w-full overflow-hidden rounded-lg bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
            <div className="w-12 text-right text-sm font-semibold text-white">{volume}</div>
          </div>
        )
      })}
    </div>
  )
}
