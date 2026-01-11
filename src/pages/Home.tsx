import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../store/cartStore";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main style={{ flex: 1, padding: "4rem 2rem", textAlign: "center" }}>
      <motion.h2 style={{ fontSize: "3rem", marginBottom: "2rem", textShadow: "0 0 20px rgba(255,215,0,0.6)" }}>
        Featured Products
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", maxWidth: "1400px", margin: "0 auto" }}>
        {products.map((product, i) => (
          <motion.div key={product._id} 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "2rem",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 30px rgba(255,215,0,0.3)"
            }}
          >
            <div style={{ background: "#333", height: "250px", borderRadius: "15px", marginBottom: "1.5rem" }} />
            <h4 style={{ fontSize: "1.8rem" }}>{product.name}</h4>
            <p style={{ color: "#aaa" }}>{product.type}</p>
            <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#FFD700" }}>${product.price}</p>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={() => addItem({ id: product._id, name: product.name, price: product.price })}
              style={{ padding: "1rem 2.5rem", background: "#FFD700", color: "#000", border: "none", borderRadius: "50px", fontWeight: "bold" }}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Home;
