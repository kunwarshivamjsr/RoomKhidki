"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ListPropertyPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    city: "",
    state: "",
    address: "",
    roomType: "Single",
    rentType: "monthly",
    numberOfDays: "",
    availableTill: "",
    gender: "all",
    images: [] as string[],
  })

  // 🔐 Check Login & Role
  useEffect(() => {
    const storedUser = localStorage.getItem("user")

    if (!storedUser) {
      router.push("/login")
      return
    }

    const parsedUser = JSON.parse(storedUser)

    if (parsedUser.role !== "landlord") {
      alert("You are not allowed to list property because you are a tenant.")
      router.push("/")
      return
    }

    setUser(parsedUser)
  }, [router])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // 📸 Convert images to base64 and store
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const imagePromises = Array.from(files).map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
      })
    })

    Promise.all(imagePromises).then((base64Images) => {
      setFormData((prev) => ({
        ...prev,
        images: base64Images,
      }))
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const storedRooms = localStorage.getItem("rooms")
    const rooms = storedRooms ? JSON.parse(storedRooms) : []

    const newRoom = {
      ...formData,
      landlord: user.firstName + " " + user.lastName,
      id: Date.now(),
    }

    rooms.push(newRoom)
    localStorage.setItem("rooms", JSON.stringify(rooms))

    alert("Room listed successfully!")
    router.push("/")
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-orange-500 flex items-center justify-center px-6 py-10">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          List Your Property 🏠
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Room Title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Room Description"
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Rent */}
          <input
            type="number"
            name="price"
            placeholder="Rent Amount (₹)"
            required
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* 🔥 Rent Type Radio Buttons */}
          <div>
            <p className="font-semibold mb-2">Rent Type</p>
            <div className="flex gap-6">
              {["monthly", "15days", "daily"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rentType"
                    value={type}
                    checked={formData.rentType === type}
                    onChange={handleChange}
                  />
                  {type === "monthly"
                    ? "Monthly"
                    : type === "15days"
                    ? "15 Days"
                    : "Daily"}
                </label>
              ))}
            </div>
          </div>

          {/* If Daily → show number of days */}
          {formData.rentType === "daily" && (
            <input
              type="number"
              name="numberOfDays"
              placeholder="Number of Days"
              required
              value={formData.numberOfDays}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          )}

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Full Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              required
              value={formData.state}
              onChange={handleChange}
              className="border p-3 rounded-lg"
            />
          </div>

          {/* Gender Preference */}
          <div>
            <p className="font-semibold mb-2">Gender Preference</p>
            <div className="flex gap-6">
              {["male", "female", "all"].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Available Till */}
          <input
            type="date"
            name="availableTill"
            required
            value={formData.availableTill}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Image Upload */}
          <div>
            <p className="font-semibold mb-2">Upload Room Images</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            List Property
          </button>

        </form>
      </div>
    </div>
  )
}