"use client"

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
      <body className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-300">

        <ThemeProvider attribute="class" defaultTheme="light">

          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </ThemeProvider>

      </body>
    </html>
  )
}