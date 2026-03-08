"use client"

import { useEffect, useState } from "react"

export default function FindRoomsPage() {
  const [rooms, setRooms] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    const storedRooms = localStorage.getItem("rooms")
    if (storedRooms) {
      setRooms(JSON.parse(storedRooms))
    }
  }, [])

  // 🔥 Filter Logic
  const filteredRooms =
    selectedCategory === "all"
      ? rooms
      : rooms.filter((room) => room.rentType === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-8">
          Available Rooms 🏠
        </h1>

        {/* 🔘 CATEGORY BUTTONS */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">

          {[
            { label: "All", value: "all" },
            { label: "Monthly", value: "monthly" },
            { label: "15 Days", value: "15days" },
            { label: "Daily", value: "daily" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 
              ${
                selectedCategory === cat.value
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border hover:bg-blue-100"
              }`}
            >
              {cat.label}
            </button>
          ))}

        </div>

        {filteredRooms.length === 0 ? (
          <p className="text-center text-gray-500">
            No rooms available in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">

            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="w-full max-w-xs bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >

                {/* Image */}
                <div className="h-56 w-full overflow-hidden">
                  {room.images && room.images.length > 0 ? (
                    <img
                      src={room.images[0]}
                      alt="Room"
                      className="h-full w-full object-cover hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <div className="h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow text-center space-y-3">

                  <h2 className="text-lg font-semibold truncate">
                    {room.title}
                  </h2>

                  <p className="text-sm text-gray-600">
                    {room.roomType}
                  </p>

                  <p className="text-sm text-gray-500 line-clamp-2 px-2">
                    {room.description}
                  </p>

                  <button
                    className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
                  >
                    View Details
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  )
}