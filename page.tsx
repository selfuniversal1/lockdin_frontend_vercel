"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("Loading...")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || "https://lockdinbooking-env.eba-erf4bipr.us-east-2.elasticbeanstalk.com"

    fetch(`${backendUrl}/api/hello`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setMessage(data.message)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Backend fetch error:", err)
        setMessage("Failed to connect to backend. Please try again later.")
        setIsLoading(false)
      })
  }, [])

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1
          style={{
            color: "#333",
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
          }}
        >
          Lock'd In Booking
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
          }}
        >
          Professional Booking Application
        </p>
      </header>

      <main
        style={{
          background: "#f8f9fa",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <strong>Backend Status:</strong>
        </div>

        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#007bff",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                border: "2px solid #f3f3f3",
                borderTop: "2px solid #007bff",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            Connecting to backend...
          </div>
        ) : (
          <div
            style={{
              padding: "1rem",
              background: message.includes("Failed") ? "#f8d7da" : "#d4edda",
              color: message.includes("Failed") ? "#721c24" : "#155724",
              borderRadius: "4px",
              border: `1px solid ${message.includes("Failed") ? "#f5c6cb" : "#c3e6cb"}`,
            }}
          >
            {message}
          </div>
        )}
      </main>

      <footer
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#666",
          fontSize: "0.9rem",
        }}
      >
        <p>Powered by Next.js & AWS</p>
      </footer>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
