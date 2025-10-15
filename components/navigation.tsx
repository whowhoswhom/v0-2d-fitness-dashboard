"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/progress", label: "Progress" },
    { href: "/programs", label: "Programs" },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/5 bg-black/40 px-6 py-4 backdrop-blur-xl">
      <Link href="/" className="text-2xl font-bold tracking-tight text-white">
        GYMBUDDY
      </Link>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
        <User className="h-5 w-5 text-white" />
      </button>
    </nav>
  )
}
