import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../store/cartStore";

const products = [
  { id: "1", name: "Motivation E-Book", type: "E-Book", price: 19.99, glow: "#FF4500" },
  { id: "2", name: "Rise Hoodie", type: "Apparel", price: 49.99, glow: "#FFD700" },
  { id: "3", name: "DTF Assistant App", type: "App", price: 9.99, glow: "#00FFFF" },
];

const Home: React.FC = () => {
  const { addItem } = useCart();

  return (
    <main style={{ flex: 1, padding: "4rem 2rem", textAlign: "center" }}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", marginBottom: "2rem", textShadow: "0 0 20px rgba(255,215,0,0.6)" }}
      >
        WELCOME TO THE RISE
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: "1.5rem", maxWidth: "900px", margin: "0 auto 4rem", opacity: 0.9 }}
      >
        Carter Risings is the Carter family brand — e-books, apparel, apps, and more. Built for ascension in the digital age.
      </motion.p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", maxWidth: "1400px", margin: "0 auto" }}>
        {products.map((product, i) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "2rem",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: `0 0 30px ${product.glow}40`,
              transition: "all 0.4s"
            }}
          >
            <div style={{ background: "#333", height: "250px", borderRadius: "15px", marginBottom: "1.5rem", boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)" }} />
            <h4 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{product.name}</h4>
            <p style={{ color: "#aaa", marginBottom: "1rem" }}>{product.type}</p>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: product.glow, textShadow: `0 0 15px ${product.glow}` }}>${product.price}</p>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price })}
              style={{ 
                marginTop: "1.5rem", 
                padding: "1rem 2.5rem", 
                background: product.glow, 
                color: "#000", 
                border: "none", 
                borderRadius: "50px", 
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: `0 0 20px ${product.glow}`
              }}
            >
              ADD TO CART
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 40px #FF4500" }}
        style={{
          marginTop: "5rem",
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
        START RISING NOW
      </motion.button>
    </main>
  );
};

export default Home;
