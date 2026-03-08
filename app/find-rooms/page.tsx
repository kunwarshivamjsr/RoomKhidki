"use client"

import { useState } from "react"
import RoomCard from "../../components/RoomCard"

type Room = {
id: number
title: string
city: string
price: number
rating: number
image: string
}

export default function FindRoomsPage() {

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

const [city, setCity] = useState("")
const [budget, setBudget] = useState("")

const filteredRooms = roomsData.filter((room) => {


const cityMatch = room.city
  .toLowerCase()
  .includes(city.toLowerCase())

const budgetMatch =
  budget === "" || room.price <= Number(budget)

return cityMatch && budgetMatch
   

})

return ( <div className="max-w-7xl mx-auto px-6 py-12">

   
  <h2 className="text-3xl font-semibold text-center mb-8">
    Available Rooms 🏠
  </h2>

  {/* Search Filters */}

  <div className="bg-white p-6 rounded-xl shadow-md mb-10 grid gap-4 md:grid-cols-3">

    <input
      type="text"
      placeholder="Search by city..."
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="border p-3 rounded-lg"
    />

    <input
      type="number"
      placeholder="Max Budget"
      value={budget}
      onChange={(e) => setBudget(e.target.value)}
      className="border p-3 rounded-lg"
    />

    <button
      onClick={() => {
        setCity("")
        setBudget("")
      }}
      className="bg-gray-200 rounded-lg hover:bg-gray-300"
    >
      Reset
    </button>

  </div>

  {/* Rooms Grid */}

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

)
}
