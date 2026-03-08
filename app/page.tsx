"use client"

import Link from "next/link"

export default function Home() {

return (

<div className="bg-gray-50">

{/* HERO SECTION */}

<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

<div>

<h1 className="text-5xl font-bold text-gray-800 mb-4">
Find Your Perfect Room
</h1>

<p className="text-gray-600 text-lg mb-6">
Discover verified rooms and trusted roommates across India.
</p>

{/* SEARCH BAR */}

<div className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row gap-4">

<input
type="text"
placeholder="Search City"
className="border p-3 rounded-lg flex-1"
/>

<input
type="number"
placeholder="Max Budget"
className="border p-3 rounded-lg flex-1"
/>

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
className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50"
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

<section className="py-16 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-10 text-center">
Trending Cities
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{["Delhi","Mumbai","Bangalore","Pune"].map(city => (

<div key={city}
className="bg-gray-100 p-6 rounded-xl text-center hover:shadow-md cursor-pointer">

<h3 className="font-semibold text-lg">{city}</h3>
<p className="text-sm text-gray-500">Explore rooms</p>

</div>

))}

</div>

</div>

</section>

{/* RECOMMENDED ROOMS */}

<section className="py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-10 text-center">
Recommended Rooms
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[1,2,3].map(room => (

<div key={room}
className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

<img
src="/building.jpg"
className="h-48 w-full object-cover"
/>

<div className="p-4">

<h3 className="font-semibold text-lg">
Modern Studio Room
</h3>

<p className="text-gray-500 text-sm">
Delhi
</p>

<div className="flex justify-between mt-2">

<span className="text-blue-600 font-bold">
₹8000
</span>

<span>⭐ 4.5</span>

</div>

</div>

</div>

))}

</div>

</div>

</section>

{/* FEATURES */}

<section className="py-16 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-10 text-center">
Why RoomKhidki
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="font-semibold text-lg mb-2">🏠 Verified Rooms</h3>
<p className="text-gray-500">Safe and trusted listings.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="font-semibold text-lg mb-2">🤝 Trusted Roommates</h3>
<p className="text-gray-500">Find compatible roommates.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h3 className="font-semibold text-lg mb-2">📍 Smart Search</h3>
<p className="text-gray-500">Search by city and budget.</p>
</div>

</div>

</div>

</section>

{/* TESTIMONIALS */}

<section className="py-16">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-semibold mb-10 text-center">
What Users Say
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl shadow">
<p>"Found a great PG in 2 days!"</p>
<h4 className="mt-4 font-semibold">Rahul</h4>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<p>"Best place to find roommates."</p>
<h4 className="mt-4 font-semibold">Priya</h4>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<p>"Super easy to search rooms."</p>
<h4 className="mt-4 font-semibold">Arjun</h4>
</div>

</div>

</div>

</section>

</div>

)

}
