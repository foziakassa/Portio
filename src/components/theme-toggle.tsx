// "use client"

// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
// import { Button } from "@/components/ui/button"

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//       className="h-9 w-9"
//     >
//       <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setIsDark(saved === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`transition-all duration-300 hover:scale-110 ${
        isDark
          ? "border-white/20 text-white bg-black/30 hover:bg-white/10"
          : "border-gray-300 text-gray-700 bg-white/30 hover:bg-gray-100"
      }`}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

export function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setIsDark(saved === "dark")
    }

    const handleStorageChange = () => {
      const saved = localStorage.getItem("theme")
      if (saved) {
        setIsDark(saved === "dark")
      }
    }

    window.addEventListener("storage", handleStorageChange)

    // Listen for custom theme change events
    const handleThemeChange = () => {
      const saved = localStorage.getItem("theme")
      if (saved) {
        setIsDark(saved === "dark")
      }
    }

    window.addEventListener("themeChange", handleThemeChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("themeChange", handleThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
    window.dispatchEvent(new Event("themeChange"))
  }

  return { isDark, toggleTheme }
}

