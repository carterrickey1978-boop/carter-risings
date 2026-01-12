import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("carterProducts") || "[]");
    setProducts(saved);
  }, []);

  return (
    <main className="container mx-auto px-6 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 text-blue-900"
      >
        Product Catalogue
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.length === 0 && (
          <p className="text-center col-span-full text-2xl text-gray-600">
            No products yet — add in /admin
          </p>
        )}
        {products.map((product, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img 
              src={product.image || "https://via.placeholder.com/600x400?text=Product+Image"} 
              alt={product.name} 
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
              <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
              <p className="text-4xl font-bold text-blue-600 mb-8">${product.price}</p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Home;
