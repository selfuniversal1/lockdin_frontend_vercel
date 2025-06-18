import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lock'd In Booking",
  description: "Professional booking application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>{children}</body>
    </html>
  )
}
