type Room = {
  id: number
  title: string
  city: string
  price: number
  rating: number
  image: string
}

export default function RoomCard({ room }: { room: Room }) {

  return (

    <div className="bg-white dark:bg-gray-800
                    rounded-xl shadow-md overflow-hidden
                    transition transform hover:-translate-y-1 hover:shadow-lg">

      <div className="overflow-hidden">

        <img
          src={room.image}
          alt={room.title}
          className="w-full h-48 object-cover transition duration-300 hover:scale-105"
        />

      </div>

      <div className="p-4">

        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
          {room.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {room.city}
        </p>

        <div className="flex justify-between items-center mt-2">

          <span className="text-blue-600 font-bold">
            ₹{room.price}
          </span>

          <span className="text-yellow-500">
            ⭐ {room.rating}
          </span>

        </div>

        <button
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg
                     hover:bg-blue-700 transition"
        >
          View Details
        </button>

      </div>

    </div>

  )

}