"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {

const [user,setUser]=useState<any>(null)

useEffect(()=>{
const storedUser=localStorage.getItem("user")
if(storedUser) setUser(JSON.parse(storedUser))
},[])

return(

<header className="w-full bg-white shadow-sm sticky top-0 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

<Link href="/" className="text-xl font-bold text-blue-600">
RoomKhidki
</Link>

<nav className="flex gap-6 items-center">

<Link href="/find-rooms" className="text-gray-700 hover:text-blue-600">
Rooms
</Link>

<Link href="/find-roommate" className="text-gray-700 hover:text-blue-600">
Roommates
</Link>

<Link href="/saved" className="text-gray-700 hover:text-blue-600">
❤️ Saved
</Link>

{user && (

<Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
Dashboard
</Link>
)}

<div className="w-9 h-9 rounded-full bg-gray-300"></div>

</nav>

</div>

</header>

)

}
