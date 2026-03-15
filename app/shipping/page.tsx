"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ShippingPage() {

  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    city: "",
    state: ""
  })

  const handleSubmit = (e:any) => {
    e.preventDefault()

    if (form.phone.length !== 10) {
      alert("Phone must be 10 digits")
      return
    }

    localStorage.setItem("address", JSON.stringify(form))

    router.push("/payment")
  }

  return (
    <div className="max-w-md mx-auto p-6">

      <h1 className="text-xl font-bold mb-4">
        Shipping Address
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >

        <input
          placeholder="Full Name"
          required
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          placeholder="Phone Number"
          required
          onChange={(e)=>setForm({...form,phone:e.target.value})}
        />

        <input
          placeholder="PIN Code"
          required
          onChange={(e)=>setForm({...form,pincode:e.target.value})}
        />

        <input
          placeholder="City"
          required
          onChange={(e)=>setForm({...form,city:e.target.value})}
        />

        <input
          placeholder="State"
          required
          onChange={(e)=>setForm({...form,state:e.target.value})}
        />

        <button className="bg-green-600 text-white py-2 rounded">
          Continue to Payment
        </button>

      </form>

    </div>
  )
}