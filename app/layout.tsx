"use client"

import "./globals.css"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [user, setUser] = useState<any>(null)

  // 🔥 Re-check user whenever route changes
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      setUser(null)
    }
  }, [pathname])   // 👈 THIS FIXES EVERYTHING

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
      alert("You cannot list property because you are a tenant.")
    }
  }

  return (
    <html lang="en">
      <body>

        <header className="w-full py-5 px-8 flex justify-between items-center text-white bg-gradient-to-r from-blue-700 to-orange-500">

          <Link href="/" className="text-xl font-bold">
            Room<span className="text-orange-300">Khidki</span>
          </Link>

          <div className="flex gap-6 items-center">

            <Link href="/">Home</Link>
            <Link href="/find-rooms">Find Rooms</Link>

            <button
              onClick={handleListProperty}
              className="bg-white text-blue-700 px-4 py-2 rounded"
            >
              List Property
            </button>

            {user ? (
              <>
                <span>
                  Hello, {user.firstName} {user.lastName}
                </span>
                <button
                  onClick={handleLogout}
                  className="border border-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="border border-white px-3 py-1 rounded"
              >
                Login
              </Link>
            )}

          </div>
        </header>

        {children}

      </body>
    </html>
  )
}