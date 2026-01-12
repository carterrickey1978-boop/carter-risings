import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "./store/cartStore";
import Home from "./pages/Home.tsx";
import EBooks from "./pages/EBooks.tsx";
import Apparel from "./pages/Apparel.tsx";
import Apps from "./pages/Apps.tsx";
import Affiliates from "./pages/Affiliates.tsx";
import Cart from "./pages/Cart.tsx";
import Admin from "./pages/Admin.tsx";

const App: React.FC = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const isActive = (path: string) => location.pathname === path ? "text-blue-600 font-bold" : "text-gray-700";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Premium Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-blue-900"
          >
            CARTER RISINGS
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-600 mt-4">
            Ascend • Empower • Rise
          </p>
        </div>
      </header>

      {/* Premium Navigation with Cart Badge */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-center gap-10 flex-wrap">
            <Link to="/" className={`text-lg font-medium transition ${isActive("/")}`}>Home</Link>
            <Link to="/ebooks" className={`text-lg font-medium transition ${isActive("/ebooks")}`}>E-Books</Link>
            <Link to="/apparel" className={`text-lg font-medium transition ${isActive("/apparel")}`}>Apparel</Link>
            <Link to="/apps" className={`text-lg font-medium transition ${isActive("/apps")}`}>Apps</Link>
            <Link to="/affiliates" className={`text-lg font-medium transition ${isActive("/affiliates")}`}>Affiliates</Link>
            <div className="relative">
              <Link to="/cart" className={`text-lg font-medium transition ${isActive("/cart")}`}>Cart</Link>
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-5 bg-red-600 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <Link to="/admin" className={`text-lg font-medium transition ${isActive("/admin")}`}>Admin</Link>
          </div>
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

      <footer className="bg-gray-100 py-12 mt-auto">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p className="text-lg">© 2026 Carter Risings • All Rights Reserved</p>
          <p className="mt-2">Built for the Future</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
