"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch on initial load
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Return a placeholder of the exact same size to prevent layout shift
    return <div className="fixed top-6 right-6 z-50 w-10 h-10" />
  }

  return (
    // This fixed positioning pins it to the top right of the viewport
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-md bg-background/90 backdrop-blur-md"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}