export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">

      <div className="text-center text-sm">

        <p>
          © {new Date().getFullYear()} RoomKhidki
        </p>

        <p className="text-gray-400 mt-1">
          Your Window to the Right Room & Roommate
        </p>

      </div>

    </footer>
  )
}