import React from "react";
import { motion } from "framer-motion";

const ebooks = [
  { id: "1", name: "Motivation E-Book", price: 19.99, image: "https://via.placeholder.com/400x500?text=Motivation+E-Book", description: "Fuel your rise" },
  // Add more e-books
];

const EBooks: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <motion.h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        E-Books
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ebooks.map((product) => (
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default EBooks;
