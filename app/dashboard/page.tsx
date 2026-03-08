"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Dashboard() {

  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  if (!user) {
    return (<div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
      Please login to view dashboard. </div>
    )
  }

  return (


    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Heading */}

        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
          Welcome, {user.name || "User"} 👋
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Manage your rooms and activity from here.
        </p>


        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Saved Rooms
            </h3>

            <p className="text-3xl font-bold mt-2 text-blue-600">
              3
            </p>

          </div>


          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Listed Rooms
            </h3>

            <p className="text-3xl font-bold mt-2 text-green-600">
              2
            </p>

          </div>


          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              Searches
            </h3>

            <p className="text-3xl font-bold mt-2 text-purple-600">
              12
            </p>

          </div>

        </div>


        {/* QUICK ACTIONS */}

        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <Link
            href="/find-rooms"
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl shadow transition"
          >
            🔍 Find Rooms
          </Link>

          <Link
            href="/list-property"
            className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl shadow transition"
          >
            🏠 List New Room
          </Link>

        </div>


        {/* RECENT ACTIVITY */}

        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Recent Activity
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">

            <li>⭐ You saved "Luxury PG Room"</li>
            <li>🔍 You searched rooms in Delhi</li>
            <li>🏠 You listed a new room</li>

          </ul>

        </div>

      </div>

    </div>


  )

}
