import { NavigationWrapper } from "@/components/navigation-wrapper"
import { ProgressHeatMap } from "@/components/progress-heat-map"
import { VolumeChart } from "@/components/volume-chart"
import { StatCard } from "@/components/stat-card"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <NavigationWrapper />

      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Progress</h1>
          <p className="mt-2 text-white/60">Track your training volume and muscle development</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Heat Map */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-xl font-semibold text-white">Training Heat Map</h2>
            <p className="mb-6 text-sm text-white/60">Muscles glow based on recent training volume</p>
            <ProgressHeatMap />
          </div>

          {/* Volume Chart */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-xl font-semibold text-white">Weekly Volume</h2>
            <p className="mb-6 text-sm text-white/60">Total sets per muscle group this week</p>
            <VolumeChart />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <StatCard label="Total Workouts" value="24" change="+12%" positive />
          <StatCard label="Total Volume" value="1,248" subtitle="sets" change="+8%" positive />
          <StatCard label="Avg. Intensity" value="78%" change="-2%" positive={false} />
        </div>
      </div>
    </div>
  )
}
