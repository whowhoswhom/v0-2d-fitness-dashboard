import { NavigationWrapper } from "@/components/navigation-wrapper"
import { MusclePanel } from "@/components/muscle-panel"
import { BodySelector } from "@/components/body-selector"

export default function DashboardPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0b0b0b]">
      <NavigationWrapper />

      <BodySelector />

      <MusclePanel />
    </div>
  )
}
