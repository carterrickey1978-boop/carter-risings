import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home.tsx";
import EBooks from "./pages/EBooks.tsx";
import Apparel from "./pages/Apparel.tsx";
import Apps from "./pages/Apps.tsx";
import Affiliates from "./pages/Affiliates.tsx";
import Cart from "./pages/Cart.tsx";
import Admin from "./pages/Admin.tsx";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-blue-900"
          >
            CARTER RISINGS
          </motion.h1>
          <p className="text-2xl text-gray-600 mt-4">
            Ascend • Empower • Rise
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg"
          >
            Shop Now
          </motion.button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-900 py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 flex justify-center gap-8">
          <Link to="/" className="text-white text-lg font-medium hover:text-blue-300 transition">Home</Link>
          <Link to="/ebooks" className="text-white text-lg font-medium hover:text-blue-300 transition">E-Books</Link>
          <Link to="/apparel" className="text-white text-lg font-medium hover:text-blue-300 transition">Apparel</Link>
          <Link to="/apps" className="text-white text-lg font-medium hover:text-blue-300 transition">Apps</Link>
          <Link to="/affiliates" className="text-white text-lg font-medium hover:text-blue-300 transition">Affiliates</Link>
          <Link to="/cart" className="text-white text-lg font-medium hover:text-blue-300 transition">Cart</Link>
          <Link to="/admin" className="text-white text-lg font-medium hover:text-blue-300 transition">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<EBooks />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <footer className="bg-blue-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">© 2026 Carter Risings • All Rights Reserved</p>
          <p className="mt-2">Built for the Future</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
