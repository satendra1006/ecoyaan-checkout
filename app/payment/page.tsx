"use client"
export const dynamic = "force-dynamic"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PaymentPage() {

  const router = useRouter()
  const [address, setAddress] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem("address")
    if (stored) {
      setAddress(JSON.parse(stored))
    }
  }, [])

  if (!address) {
    return <p className="p-6">Loading...</p>
  }

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-xl font-bold mb-4">
        Confirm Order
      </h1>

      <div className="border p-4 rounded">

        <h2 className="font-semibold mb-2">
          Shipping Address
        </h2>

        <p>{address.name}</p>
        <p>{address.city}</p>
        <p>{address.state}</p>

      </div>

      <button
        onClick={() => router.push("/success")}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
      >
        Pay Securely
      </button>

    </div>
  )
}