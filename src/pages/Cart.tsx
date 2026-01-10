import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../store/cartStore";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51TestKeyUseThisForSandboxOnlyReplaceLater");

const Cart: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart();

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    // Simple client-only checkout with test mode line items
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
      <main style={{ flex: 1, padding: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "3rem" }}>Your Cart is Empty</h2>
        <p style={{ fontSize: "1.5rem", marginTop: "2rem" }}>Add products to start rising!</p>
      </main>
    );
  }

  return (
    <main style={{ flex: 1, padding: "4rem 2rem" }}>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: "3rem", textAlign: "center", marginBottom: "3rem" }}>
        Your Cart
      </motion.h2>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {items.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "1.5rem",
              borderRadius: "15px",
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backdropFilter: "blur(10px)"
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.8rem" }}>{item.name}</h3>
              <p style={{ color: "#aaa" }}>Quantity: {item.quantity}</p>
            </div>
            <p style={{ fontSize: "1.8rem", color: "#FFD700" }}>${(item.price * item.quantity).toFixed(2)}</p>
          </motion.div>
        ))}

        <div style={{ textAlign: "right", marginTop: "3rem" }}>
          <h3 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
            Total: <span style={{ color: "#FFD700" }}>${getTotalPrice().toFixed(2)}</span>
          </h3>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckout}
            style={{
              padding: "1.5rem 3rem",
              fontSize: "1.5rem",
              background: "linear-gradient(45deg, #FF4500, #FFD700)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(255,69,0,0.6)"
            }}
          >
            Checkout with Stripe (Test Mode)
          </motion.button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
