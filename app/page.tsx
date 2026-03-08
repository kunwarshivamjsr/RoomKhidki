"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {

  const [city, setCity] = useState("")
  const [budget, setBudget] = useState("")

  const cities = [
    "Delhi","Mumbai","Bangalore","Hyderabad","Chennai",
    "Kolkata","Pune","Ahmedabad","Jaipur","Lucknow",
    "Chandigarh","Indore","Bhopal","Surat","Nagpur"
  ]

  const budgets = [
    "Below ₹5000",
    "₹5000 - ₹10000",
    "₹10000 - ₹15000",
    "₹15000 - ₹20000",
    "₹20000+"
  ]

  return (

    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Find Your Perfect Room
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Discover verified rooms and trusted roommates across India.
          </p>

          {/* SEARCH BAR */}

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex flex-col md:flex-row gap-4">

            {/* CITY */}

            <select
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className="border border-gray-300 dark:border-gray-600
                         rounded-lg px-4 py-3 w-full md:w-52
                         bg-white dark:bg-gray-900
                         text-gray-800 dark:text-white"
            >
              <option value="">Select City</option>

              {cities.map((c)=>(
                <option key={c} value={c}>{c}</option>
              ))}

            </select>

            {/* BUDGET */}

            <select
              value={budget}
              onChange={(e)=>setBudget(e.target.value)}
              className="border border-gray-300 dark:border-gray-600
                         rounded-lg px-4 py-3 w-full md:w-52
                         bg-white dark:bg-gray-900
                         text-gray-800 dark:text-white"
            >
              <option value="">Select Budget</option>

              {budgets.map((b)=>(
                <option key={b} value={b}>{b}</option>
              ))}

            </select>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Search
            </button>

          </div>

          <div className="mt-8 flex gap-4">

            <Link
              href="/find-rooms"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Browse Rooms
            </Link>

            <Link
              href="/find-roommate"
              className="border border-green-600 text-green-700 dark:text-green-400 px-6 py-3 rounded-lg hover:bg-green-50 dark:hover:bg-gray-800"
            >
              Find Roommate
            </Link>

          </div>

        </div>

        <div>
          <img
            src="/building.jpg"
            className="rounded-xl shadow-lg"
          />
        </div>

      </section>


      {/* TRENDING CITIES */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800 dark:text-white">
          Trending Cities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { city: "Delhi", img: "/city1.jpg" },
            { city: "Mumbai", img: "/city2.jpg" },
            { city: "Bangalore", img: "/city3.jpg" },
            { city: "Pune", img: "/city4.jpg" }
          ].map((c) => (

            <div
              key={c.city}
              className="relative rounded-xl overflow-hidden shadow hover:scale-105 transition cursor-pointer"
            >

              <img
                src={c.img}
                className="h-40 w-full object-cover"
              />

              <div className="absolute bottom-3 left-3 text-white text-lg font-semibold">
                {c.city}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* RECOMMENDED ROOMS */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800 dark:text-white">
            Recommended Rooms
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[1,2,3].map(room => (

              <div
                key={room}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >

                <img
                  src="/building.jpg"
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">

                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    Modern Studio Room
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Delhi
                  </p>

                  <div className="flex justify-between mt-2">

                    <span className="text-blue-600 font-bold">
                      ₹8000
                    </span>

                    <span className="text-yellow-500">⭐ 4.5</span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="py-16 bg-gray-100 dark:bg-gray-800">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800 dark:text-white">
            Why RoomKhidki
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 dark:text-white">🏠 Verified Rooms</h3>
              <p className="text-gray-500 dark:text-gray-400">Safe and trusted listings.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 dark:text-white">🤝 Trusted Roommates</h3>
              <p className="text-gray-500 dark:text-gray-400">Find compatible roommates.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2 dark:text-white">📍 Smart Search</h3>
              <p className="text-gray-500 dark:text-gray-400">Search by city and budget.</p>
            </div>

          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800 dark:text-white">
            What Users Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="dark:text-gray-300">"Found a great PG in 2 days!"</p>
              <h4 className="mt-4 font-semibold dark:text-white">Rahul</h4>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="dark:text-gray-300">"Best place to find roommates."</p>
              <h4 className="mt-4 font-semibold dark:text-white">Priya</h4>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="dark:text-gray-300">"Super easy to search rooms."</p>
              <h4 className="mt-4 font-semibold dark:text-white">Arjun</h4>
            </div>

          </div>

        </div>

      </section>

    </div>

  )

}