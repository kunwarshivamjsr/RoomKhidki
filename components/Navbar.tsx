"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {

const pathname = usePathname()
const [open, setOpen] = useState(false)

const navItem = (path: string) =>
`px-4 py-2 rounded-md transition ${
      pathname === path
        ? "bg-white text-blue-700"
        : "text-white hover:bg-white/20"
    }`

return (
  <header className="w-full bg-gradient-to-r from-blue-700 to-orange-500 text-white px-6 py-4">

  <div className="max-w-7xl mx-auto flex justify-between items-center">

    {/* Logo */}
    <Link href="/" className="text-xl font-bold">
      Room<span className="text-orange-300">Khidki</span>
    </Link>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-2xl"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-4 items-center">
      <Link href="/" className={navItem("/")}>Home</Link>
      <Link href="/find-rooms" className={navItem("/find-rooms")}>Find Rooms</Link>
      <Link href="/list-property" className={navItem("/list-property")}>List Property</Link>
    </div>

  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="flex flex-col mt-4 gap-3 md:hidden">
      <Link href="/" className={navItem("/")}>Home</Link>
      <Link href="/find-rooms" className={navItem("/find-rooms")}>Find Rooms</Link>
      <Link href="/list-property" className={navItem("/list-property")}>List Property</Link>
    </div>
  )}

</header>


)
}
