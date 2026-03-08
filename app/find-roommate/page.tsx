"use client"

import { useState } from "react"

type Roommate = {
  id: number
  name: string
  city: string
  gender: string
  occupation: string
  budget: number
  smoking: string
  pets: string
}

export default function FindRoommate() {

  const roommatesData: Roommate[] = [
    {
      id: 1,
      name: "Rahul",
      city: "Delhi",
      gender: "Male",
      occupation: "Student",
      budget: 8000,
      smoking: "No",
      pets: "No"
    },
    {
      id: 2,
      name: "Priya",
      city: "Bangalore",
      gender: "Female",
      occupation: "Working",
      budget: 12000,
      smoking: "No",
      pets: "Yes"
    },
    {
      id: 3,
      name: "Arjun",
      city: "Mumbai",
      gender: "Male",
      occupation: "Working",
      budget: 15000,
      smoking: "Yes",
      pets: "No"
    }
  ]

  const [city, setCity] = useState("")
  const [gender, setGender] = useState("")
  const [occupation, setOccupation] = useState("")
  const [budget, setBudget] = useState("")

  const filtered = roommatesData.filter((p) => {


    const cityMatch =
      city === "" || p.city.toLowerCase().includes(city.toLowerCase())

    const genderMatch =
      gender === "" || p.gender === gender

    const occupationMatch =
      occupation === "" || p.occupation === occupation

    const budgetMatch =
      budget === "" || p.budget <= Number(budget)

    return cityMatch && genderMatch && occupationMatch && budgetMatch


  })

  return (


    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Find Roommate 🤝
        </h1>


        {/* FILTERS */}

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md grid md:grid-cols-4 gap-4 mb-10">

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          >
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="border p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          >
            <option value="">Occupation</option>
            <option>Student</option>
            <option>Working</option>
          </select>

          <input
            type="number"
            placeholder="Max Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />

        </div>


        {/* ROOMMATE CARDS */}

        <div className="grid md:grid-cols-3 gap-6">

          {filtered.map((p) => (
            <div key={p.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {p.name}
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                {p.city}
              </p>

              <div className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-300">

                <p>Gender: {p.gender}</p>
                <p>Occupation: {p.occupation}</p>
                <p>Budget: ₹{p.budget}</p>
                <p>Smoking: {p.smoking}</p>
                <p>Pets: {p.pets}</p>

              </div>

              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Contact
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>


  )

}
