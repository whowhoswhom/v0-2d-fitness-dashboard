export function StatCard({
  label,
  value,
  subtitle,
  change,
  positive,
}: {
  label: string
  value: string
  subtitle?: string
  change: string
  positive: boolean
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
      <p className="text-sm text-white/60">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-3xl font-bold text-white">{value}</p>
        {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
      </div>
      <p className={`mt-2 text-sm font-medium ${positive ? "text-green-400" : "text-red-400"}`}>
        {change} from last month
      </p>
    </div>
  )
}
