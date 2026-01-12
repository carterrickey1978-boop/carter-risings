import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../store/cartStore";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_51OQJ9mSHc9TESTKEYPLACEHOLDER"); // Use env var for real key

const Cart: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    const { error } = await stripe.redirectToCheckout({
      lineItems: items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      successUrl: window.location.origin + "/?success=1",
      cancelUrl: window.location.origin + "/cart",
    });

    if (error) console.error(error);
  };

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-5xl font-bold mb-8 text-blue-900">Your Cart is Empty</h2>
        <p className="text-xl text-gray-600">Add products to start rising!</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-16">
      <motion.h2 className="text-5xl font-bold text-center mb-16 text-blue-900">
        Your Cart
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8 flex justify-between items-center"
          >
            <div>
              <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="text-3xl font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
          </motion.div>
        ))}

        <div className="text-right">
          <p className="text-4xl font-bold mb-8">
            Total: <span className="text-blue-600">${getTotalPrice().toFixed(2)}</span>
          </p>
          <button onClick={handleCheckout} className="px-12 py-6 bg-blue-600 text-white rounded-lg font-bold text-xl hover:bg-blue-700 transition">
            Checkout with Stripe (Test Mode)
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
