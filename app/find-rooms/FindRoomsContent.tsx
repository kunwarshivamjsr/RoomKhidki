"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import RoomCard from "../../components/RoomCard"

type Room = {
id: number
title: string
city: string
price: number
rating: number
image: string
}

export default function FindRoomsContent() {

const searchParams = useSearchParams()

const roomsData: Room[] = [
{
id: 1,
title: "Modern Studio Room",
city: "Delhi",
price: 8000,
rating: 4.5,
image: "/building.jpg"
},
{
id: 2,
title: "Shared Apartment",
city: "Bangalore",
price: 6000,
rating: 4.2,
image: "/building.jpg"
},
{
id: 3,
title: "Luxury PG Room",
city: "Mumbai",
price: 12000,
rating: 4.8,
image: "/building.jpg"
}
]

/* UNIQUE CITY LIST */
const cities = [...new Set(roomsData.map(room => room.city))]

/* INPUT STATES */
const [cityInput, setCityInput] = useState("")
const [budgetInput, setBudgetInput] = useState("")

/* FILTER STATES */
const [city, setCity] = useState("")
const [budget, setBudget] = useState("")

useEffect(() => {

 
const cityParam = searchParams.get("city")
const budgetParam = searchParams.get("budget")

if (cityParam) {
  setCity(cityParam)
  setCityInput(cityParam)
}

if (budgetParam) {
  setBudget(budgetParam)
  setBudgetInput(budgetParam)
}
 

}, [searchParams])

const handleSearch = () => {
setCity(cityInput)
setBudget(budgetInput)
}

const handleReset = () => {
setCity("")
setBudget("")
setCityInput("")
setBudgetInput("")
}

const filteredRooms = roomsData.filter((room) => {

 
const cityMatch =
  city === "" ||
  room.city.toLowerCase().includes(city.toLowerCase())

const budgetMatch =
  budget === "" ||
  room.price <= Number(budget)

return cityMatch && budgetMatch
 

})

return (

 
<div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

  <div className="max-w-7xl mx-auto px-6 py-12">

    <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
      Available Rooms 🏠
    </h2>


    {/* SEARCH FILTERS */}

    <div className="bg-white dark:bg-gray-800
                    p-6 rounded-xl shadow-md mb-10
                    grid gap-4 md:grid-cols-4">

      {/* CITY INPUT WITH SUGGESTIONS */}

      <input
        type="text"
        list="city-options"
        placeholder="Search by city..."
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg"
      />

      <datalist id="city-options">
        {cities.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>


      {/* BUDGET */}

      <input
        type="number"
        placeholder="Max Budget"
        value={budgetInput}
        onChange={(e) => setBudgetInput(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg"
      />


      {/* SEARCH */}

      <button
        onClick={handleSearch}
        className="bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Search
      </button>


      {/* RESET */}

      <button
        onClick={handleReset}
        className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reset
      </button>

    </div>



    {/* ROOMS GRID */}

    {filteredRooms.length === 0 ? (

      <p className="text-center text-gray-500">
        No rooms available.
      </p>

    ) : (

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}

      </div>

    )}

  </div>

</div>
 

)
}
