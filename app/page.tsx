"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {

const [user, setUser] = useState<any>(null)

useEffect(() => {
const storedUser = localStorage.getItem("user")
if (storedUser) setUser(JSON.parse(storedUser))
}, [])

const quotes = [
"Find comfort. Find community. Find your perfect space.",
"Your next home is just a click away.",
"Better rooms. Better roommates. Better living.",
"Where the right room meets the right people."
]

const randomQuote =
quotes[Math.floor(Math.random() * quotes.length)]

return ( <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

    
  {/* LEFT CONTENT */}
  <div>

    <h1 className="text-5xl font-bold text-gray-800 mb-4">
      RoomKhidki
    </h1>

    {user && (
      <p className="text-xl text-blue-600 mb-2">
        Welcome back, <span className="font-semibold">{user.firstName}</span> 👋
      </p>
    )}

    <p className="text-gray-600 mb-4 text-lg">
      {randomQuote}
    </p>

    <p className="text-gray-500 mb-8">
      Your Window to the Right Room & Roommate
    </p>

    <div className="flex gap-4">

      <Link
        href="/find-rooms"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Find Rooms
      </Link>

      <Link
        href="/list-property"
        className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50"
      >
        List Property
      </Link>

    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div>
    <img
      src="/building.jpg"
      alt="Room"
      className="rounded-xl shadow-lg"
    />
  </div>

</section>
    

)
}
