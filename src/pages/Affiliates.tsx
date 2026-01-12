import React from "react";
import { motion } from "framer-motion";

const Affiliates: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-16 text-center">
      <motion.h2 className="text-5xl font-bold mb-12 text-blue-900">
        Join the Carter Risings Affiliates
      </motion.h2>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Earn 20% commission promoting e-books, apparel, apps. Approval required.
      </p>

      <form action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST" className="max-w-lg mx-auto bg-white p-12 rounded-2xl shadow-lg">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-lg text-gray-900"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className="w-full p-4 mb-8 border border-gray-300 rounded-lg text-lg text-gray-900"
        />
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="w-full py-6 bg-blue-600 text-white rounded-lg font-bold text-xl hover:bg-blue-700 transition"
        >
          Apply Now
        </motion.button>
      </form>
      <p className="mt-8 text-gray-600">
        Applications sent to your email — approve manually and send unique code.
      </p>
    </main>
  );
};

export default Affiliates;
