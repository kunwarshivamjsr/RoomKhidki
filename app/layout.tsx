import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "RoomKhidki",
  description: "Your Window to the Right Room & Roommate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>

          <Navbar />

          {/* Main content full width */}
          <main className="flex-1 w-full">
            {children}
          </main>

          <Footer />

        </ThemeProvider>

      </body>

    </html>
  )
}