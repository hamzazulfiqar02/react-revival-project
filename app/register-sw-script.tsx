"use client"

import { useEffect } from "react"

export default function RegisterSWScript() {
  useEffect(() => {
    // Only register the service worker in production and on the client side
    if (typeof window !== "undefined" && "serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)
          })
          .catch((error) => {
            console.log("ServiceWorker registration failed: ", error)
          })
      })
    }
  }, [])

  return null
}
