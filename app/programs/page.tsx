import { NavigationWrapper } from "@/components/navigation-wrapper"
import { ProgramCard } from "@/components/program-card"
import { Plus } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <NavigationWrapper />

      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Programs</h1>
            <p className="mt-2 text-white/60">Choose a program or create your own</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-white/90">
            <Plus className="h-5 w-5" />
            Create Program
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProgramCard
            title="Push Pull Legs"
            description="Classic 6-day split focusing on compound movements"
            frequency="6 days/week"
            duration="12 weeks"
            difficulty="Intermediate"
            muscleGroups={["Chest", "Back", "Legs", "Shoulders", "Arms"]}
          />

          <ProgramCard
            title="Upper Lower"
            description="4-day split alternating upper and lower body"
            frequency="4 days/week"
            duration="8 weeks"
            difficulty="Beginner"
            muscleGroups={["Full Body"]}
          />

          <ProgramCard
            title="Hypertrophy Focus"
            description="High volume program for maximum muscle growth"
            frequency="5 days/week"
            duration="16 weeks"
            difficulty="Advanced"
            muscleGroups={["Chest", "Back", "Legs", "Shoulders", "Arms"]}
          />

          <ProgramCard
            title="Strength Builder"
            description="Low rep, high intensity for building raw strength"
            frequency="4 days/week"
            duration="12 weeks"
            difficulty="Intermediate"
            muscleGroups={["Chest", "Back", "Legs"]}
          />

          <ProgramCard
            title="Body Recomp"
            description="Balanced program for losing fat and building muscle"
            frequency="5 days/week"
            duration="12 weeks"
            difficulty="Intermediate"
            muscleGroups={["Full Body"]}
          />

          <ProgramCard
            title="Home Workout"
            description="Minimal equipment program for training at home"
            frequency="4 days/week"
            duration="8 weeks"
            difficulty="Beginner"
            muscleGroups={["Full Body"]}
          />
        </div>
      </div>
    </div>
  )
}
