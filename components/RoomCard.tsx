import Image from "next/image"

export default function RoomCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <Image
        src="/building.jpg"
        alt="Room"
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="text-lg font-semibold">
          Fully Furnished Room
        </h3>

        <p className="text-gray-500 text-sm">
          Bangalore • Indiranagar
        </p>

        <p className="text-green-700 font-bold mt-2">
          ₹12,000 / month
        </p>

      </div>
    </div>
  )
}