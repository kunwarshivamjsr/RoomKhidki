"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Navbar() {

  const [user, setUser] = useState<any>(null)
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
    setMounted(true)
  }, [])

  const logout = () => {
    localStorage.removeItem("user")
    window.location.href = "/login"
  }

  if (!mounted) return null

  return (


    <header className="w-full bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          RoomKhidki
        </Link>

        <nav className="flex gap-6 items-center relative">

          {/* Dashboard */}
          {user && (
            <Link href="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
              Dashboard
            </Link>
          )}

          {/* CUSTOMER NAV */}
          {user?.role === "customer" && (
            <>
              <Link href="/find-rooms" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
                Find Rooms
              </Link>

              <Link href="/find-roommate" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
                Find Roommate
              </Link>
            </>
          )}

          {/* OWNER NAV */}
          {user?.role === "owner" && (
            <>
              <Link href="/my-rooms" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
                View Your Rooms
              </Link>

              <Link href="/list-property" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
                List New Room
              </Link>
            </>
          )}

          {/* Dark Mode */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border px-3 py-1 rounded-lg text-sm dark:text-white"
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          {/* Profile */}
          <div className="relative">

            <div
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2">

                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Profile
                </Link>

                <Link
                  href="/saved"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Saved
                </Link>

                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        </nav>

      </div>

    </header>


  )

}
