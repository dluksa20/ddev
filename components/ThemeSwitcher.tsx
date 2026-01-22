"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Button from "./Button"

const themes = [
  { id: "midnight-eclipse", label: "Midnight Eclipse" },
  { id: "sunset-horizon", label: "Sunset Horizon" },
  { id: "forest-breeze", label: "Forest Breeze" },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="grid grid-cols-2 gap-2">
      {themes.map((t, index) => (
        <Button
          buttonText='h'
          key={t.id}
          onClick={() => setTheme(t.id)}
          variant={theme === t.id ? "primary" : "outline"}
          className={index === 0 ? "col-span-2" : ""}
        >
          {t.label}
        </Button>
      ))}
    </div>
  )
}