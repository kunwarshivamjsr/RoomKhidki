"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RegisterPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "tenant",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    localStorage.setItem("registeredUser", JSON.stringify(formData))

    alert("Registered successfully")
    router.push("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-orange-500">

      <div className="bg-white p-8 rounded-xl w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="lastName"
            placeholder="Last Name"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Register
          </button>

        </form>

        <div className="mt-4 text-center">
          <Link href="/login">Already have account? Login</Link>
        </div>

      </div>
    </div>
  )
}