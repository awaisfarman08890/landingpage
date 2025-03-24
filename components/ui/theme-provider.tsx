"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  React.useEffect(() => {
    setTheme("dark") // Set default theme to dark
  }, [])

  return (
    <NextThemesProvider {...props}>
      <div>
        <button 
          onClick={toggleTheme} 
          className="fixed top-4 right-4 p-2 bg-neutral-900 text-white rounded">
          Toggle Theme
        </button>
        {children}
      </div>
    </NextThemesProvider>
  )
}
