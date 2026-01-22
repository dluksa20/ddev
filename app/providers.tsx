"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme=""
      enableSystem={false}
      themes={[
        "midnight-eclipse",
        "sunset-horizon",
        "forest-breeze",
      ]}
    >
      {children}
    </ThemeProvider>
  )
}
