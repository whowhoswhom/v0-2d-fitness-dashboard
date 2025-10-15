"use client"
import { Suspense } from "react"
import { Navigation } from "./navigation"

export function NavigationWrapper() {
  return (
    <Suspense
      fallback={
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/5 bg-black/40 px-6 py-4 backdrop-blur-xl">
          <div className="text-2xl font-bold tracking-tight text-white">GYMBUDDY</div>
          <div className="flex items-center gap-8">
            <div className="h-5 w-20 animate-pulse rounded bg-white/10" />
            <div className="h-5 w-20 animate-pulse rounded bg-white/10" />
            <div className="h-5 w-20 animate-pulse rounded bg-white/10" />
          </div>
          <div className="h-9 w-9 animate-pulse rounded-full bg-white/10" />
        </nav>
      }
    >
      <Navigation />
    </Suspense>
  )
}
