import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F4F3EF] text-[#2f3e34]">

      {/* HERO SECTION */}
      <section className="min-h-[85vh] grid md:grid-cols-2 items-center px-10 md:px-20 py-20">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            RoomKhidki
          </h1>

          <p className="text-xl text-gray-600 max-w-lg">
            Your Window to the Right Room & Roommate
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition">
              Find Rooms
            </button>

            <button className="px-6 py-3 border border-green-800 text-green-800 rounded-lg hover:bg-green-800 hover:text-white transition">
              List Property
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/building.jpg"
            alt="RoomKhidki Building"
            width={500}
            height={500}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-10 md:px-20 bg-[#F4F3EF]">

        <h2 className="text-4xl font-semibold text-center mb-16">
          How RoomKhidki Works
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {/* STEP 1 */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-800 text-white flex items-center justify-center rounded-full text-2xl mx-auto">
              📍
            </div>
            <h3 className="text-xl font-semibold">Select City</h3>
            <p className="text-gray-600">
              Choose city and set your budget
            </p>
          </div>

          {/* STEP 2 */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-800 text-white flex items-center justify-center rounded-full text-2xl mx-auto">
              🏠
            </div>
            <h3 className="text-xl font-semibold">Browse Rooms</h3>
            <p className="text-gray-600">
              View verified rooms and roommates
            </p>
          </div>

          {/* STEP 3 */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-800 text-white flex items-center justify-center rounded-full text-2xl mx-auto">
              📊
            </div>
            <h3 className="text-xl font-semibold">Compare Prices</h3>
            <p className="text-gray-600">
              See market price insights
            </p>
          </div>

          {/* STEP 4 */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-800 text-white flex items-center justify-center rounded-full text-2xl mx-auto">
              💬
            </div>
            <h3 className="text-xl font-semibold">Connect Directly</h3>
            <p className="text-gray-600">
              Message landlords or roommates
            </p>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-16 max-w-3xl mx-auto">
          Our streamlined process takes users from search to booking in minutes,
          with complete transparency at every step. The platform handles
          verification, communication, and payment coordination while users
          maintain full control over their choices.
        </p>

      </section>

    </div>
  );
}