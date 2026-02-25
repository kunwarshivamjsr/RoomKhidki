"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login button clicked") // 👈 DEBUG LINE

    const storedUser = localStorage.getItem("registeredUser")

    if (!storedUser) {
      alert("No registered user found.")
      return
    }

    const parsedUser = JSON.parse(storedUser)

    if (
      parsedUser.email.trim() === email.trim() &&
      parsedUser.password.trim() === password.trim()
    ) {
      localStorage.setItem("user", JSON.stringify(parsedUser))
      router.push("/")
      router.refresh()
    } else {
      alert("Invalid credentials")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-orange-500">

      <div className="bg-white p-8 rounded-xl w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"   // 🚨 VERY IMPORTANT
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>

        </form>

        <div className="mt-4 text-center">
          <Link href="/register">No account? Register</Link>
        </div>

      </div>
    </div>
  )
}