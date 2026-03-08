export default function Footer() {
  return (

    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white py-6 mt-10 transition-colors">

      <div className="text-center text-sm">

        <p>
          © {new Date().getFullYear()} RoomKhidki
        </p>

        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Your Window to the Right Room & Roommate
        </p>

      </div>

    </footer>

  )
}