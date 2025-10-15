import { Clock, Calendar, TrendingUp } from "lucide-react"

interface ProgramCardProps {
  title: string
  description: string
  frequency: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  muscleGroups: string[]
}

export function ProgramCard({ title, description, frequency, duration, difficulty, muscleGroups }: ProgramCardProps) {
  const difficultyColor = {
    Beginner: "text-green-400",
    Intermediate: "text-yellow-400",
    Advanced: "text-red-400",
  }

  return (
    <div className="group cursor-pointer rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-black/60">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Calendar className="h-4 w-4" />
          <span>{frequency}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="h-4 w-4" />
          <span className={difficultyColor[difficulty]}>{difficulty}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {muscleGroups.map((group) => (
          <span key={group} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
            {group}
          </span>
        ))}
      </div>

      <button className="mt-4 w-full rounded-lg bg-white/10 py-2 text-sm font-medium text-white transition-colors group-hover:bg-white/20">
        View Program
      </button>
    </div>
  )
}
