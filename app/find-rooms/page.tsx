"use client"

import { Suspense } from "react"
import FindRoomsContent from "./FindRoomsContent"

export default function FindRoomsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading rooms...</div>}>
      <FindRoomsContent />
    </Suspense>
  )
}