import { cartData } from "../../data/cartData"
import Link from "next/link"

export default async function CartPage() {

  const data = cartData

  const subtotal = data.cartItems.reduce(
    (sum, item) => sum + item.product_price * item.quantity,
    0
  )

  const total = subtotal + data.shipping_fee

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Order Summary
      </h1>

      {data.cartItems.map((item) => (

        <div
          key={item.product_id}
          className="flex gap-4 border p-4 rounded mb-4"
        >

          <img src={item.image} width={80} />

          <div>

            <h2 className="font-semibold">
              {item.product_name}
            </h2>

            <p>Price: ₹{item.product_price}</p>
            <p>Quantity: {item.quantity}</p>

          </div>

        </div>
      ))}

      <div className="border p-4 rounded mt-6">

        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping: ₹{data.shipping_fee}</p>

        <h2 className="text-lg font-bold">
          Total: ₹{total}
        </h2>

      </div>

      <Link href="/shipping">

        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded">
          Proceed to Checkout
        </button>

      </Link>

    </div>
  )
}