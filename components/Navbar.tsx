"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type User = {
  firstName: string
  lastName: string
  role: "tenant" | "landlord"
}

export default function Navbar() {

  const router = useRouter()
  const pathname = usePathname()

  const [user, setUser] = useState<User | null>(null)

  // Check login status when route changes
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")

      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        setUser(null)
      }

    } catch {
      setUser(null)
    }
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  const handleListProperty = () => {
    if (!user) {
      router.push("/login")
      return
    }

    if (user.role === "landlord") {
      router.push("/list-property")
    } else {
      alert("Only landlords can list properties.")
    }
  }

  const navItem = (path: string) =>
    `px-4 py-2 rounded-md transition-all duration-200 ${
      pathname === path
        ? "bg-white text-blue-700 shadow-sm"
        : "text-white hover:bg-white/20"
    }`

  return (
    <header className="w-full py-4 px-10 flex justify-between items-center text-white bg-gradient-to-r from-blue-700 to-orange-500 shadow-md">

      {/* Logo */}
      <Link href="/" className="text-xl font-bold tracking-wide">
        Room<span className="text-orange-300">Khidki</span>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-4 text-sm">

        <Link href="/" className={navItem("/")}>
          Home
        </Link>

        <Link href="/find-rooms" className={navItem("/find-rooms")}>
          Find Rooms
        </Link>

        <button
          onClick={handleListProperty}
          className={navItem("/list-property")}
        >
          List Property
        </button>

        {user ? (
          <>
            <span className="ml-2">
              Hello, {user.firstName}
            </span>

            <button
              onClick={handleLogout}
              className="border border-white px-3 py-1 rounded-md hover:bg-white hover:text-blue-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="border border-white px-3 py-1 rounded-md hover:bg-white hover:text-blue-700 transition"
          >
            Login
          </Link>
        )}

      </div>

    </header>
  )
}