"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Navbar() {

  const [user, setUser] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (

    <header className="w-full bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          RoomKhidki
        </Link>

        <nav className="flex gap-6 items-center">

          <Link href="/find-rooms" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Rooms
          </Link>

          <Link href="/find-roommate" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            Roommates
          </Link>

          <Link href="/saved" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
            ❤️ Saved
          </Link>

          {user && (
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              Dashboard
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border px-3 py-1 rounded-lg text-sm dark:text-white"
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          {/* Profile */}
          <div className="w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-700"></div>

        </nav>

      </div>

    </header>

  )

}