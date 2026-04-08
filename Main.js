import React, { useState } from "react";

export default function LearnWithSonal() { const originalPrice = 199; const [coupon, setCoupon] = useState(""); const [discount, setDiscount] = useState(0);

const applyCoupon = () => { if (coupon === "LAUNCH70") { setDiscount(0.7); } else { alert("Invalid Coupon Code"); } };

const finalPrice = originalPrice - originalPrice * discount;

const handlePayment = () => { alert("Integrate Razorpay here for payment processing"); };

return ( <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 text-white p-6"> {/* Header */} <header className="text-center mb-10"> <h1 className="text-4xl font-bold">LearnWithSonal</h1> <p className="text-lg mt-2">Practical Learning for Real-World Tech Skills</p> </header>

{/* About */}
  <section className="bg-white text-black p-6 rounded-2xl shadow-lg mb-10">
    <h2 className="text-2xl font-semibold mb-2">About the Author</h2>
    <p>
      Sonal Kanchalwar is an expert in Oracle EBS and Security Governance,
      helping professionals gain real-world technical skills.
    </p>
  </section>

  {/* Product */}
  <section className="bg-white text-black p-6 rounded-2xl shadow-lg mb-10">
    <h2 className="text-2xl font-semibold mb-4">Oracle Database Security</h2>
    <img
      src="https://via.placeholder.com/200"
      alt="Ebook"
      className="mb-4"
    />

    <p className="text-lg">Price: ₹{originalPrice}</p>
    {discount > 0 && (
      <p className="text-green-600 font-bold">Discounted Price: ₹{finalPrice}</p>
    )}

    {/* Coupon */}
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={applyCoupon}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>

    {/* Buy Button */}
    <button
      onClick={handlePayment}
      className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg"
    >
      Buy Now
    </button>
  </section>

  {/* Contact */}
  <section className="text-center">
    <p>Contact: learnwithsonal@gmail.com</p>
    <a
      href="https://wa.me/919000000000"
      className="text-blue-200 underline"
    >
      Chat on WhatsApp
    </a>
  </section>
</div>

); }
