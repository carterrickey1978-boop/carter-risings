import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../store/cartStore";

const EBooks: React.FC = () => {
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.filter(p => p.type === "ebook")));
  }, []);

  return (
    <main style={{ flex: 1, padding: "4rem 2rem", textAlign: "center" }}>
      <motion.h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>E-Books</motion.h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", maxWidth: "1400px", margin: "0 auto" }}>
        {products.map((product, i) => (
          // same card as Home
          <motion.div key={product._id} /* same style and button as Home */ >
            {/* product details */}
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default EBooks;
