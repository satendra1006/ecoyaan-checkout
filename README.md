# Ecoyaan Checkout Flow

A simplified checkout flow built using **Next.js** and **React**.
This project demonstrates a basic e-commerce checkout experience where users can review their cart, enter shipping details, and simulate a payment confirmation.

---

## 🚀 Live Demo

Deployed Application: (Add your Vercel link here)

---

## 📌 Features

* Cart / Order Summary page displaying products
* Server-side rendered cart data
* Shipping Address form with basic validation
* Payment confirmation page
* Order success page
* Responsive UI using Tailwind CSS
* Multi-step checkout flow

---

## 🛠 Tech Stack

* **Next.js**
* **React**
* **Tailwind CSS**
* **Context API / Local Storage for state**

---

## 📂 Project Structure

```
app
 ├ cart
 │   └ page.tsx
 ├ shipping
 │   └ page.tsx
 ├ payment
 │   └ page.tsx
 ├ success
 │   └ page.tsx
 ├ layout.tsx
 └ page.tsx

data
 └ cartData.ts
```

---

## 📦 Mock Data

Cart items are rendered using mock JSON data provided in the assignment.
The data includes:

* product name
* price
* quantity
* shipping fee

This data is fetched and rendered on the **Cart page using server-side rendering.**

---

## 🔄 Checkout Flow

```
Cart Page
   ↓
Shipping Address
   ↓
Payment Confirmation
   ↓
Order Success
```

---

## 🧪 Form Validation

The shipping form validates:

* Required fields
* Valid email format
* 10-digit phone number

---

## 💻 Run Locally

Clone the repository:

```
git clone <your-repo-link>
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Open browser:

```
http://localhost:3000/cart
```

---

## 📌 Notes

This project is a functional MVP designed to demonstrate frontend architecture, SSR usage, and UI flow for a checkout experience.

Payment functionality is simulated and no real transactions occur.

---

## 👨‍💻 Author

Satendra Rai
