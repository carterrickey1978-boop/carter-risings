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
      {/* Luxury Header */}
      <header className="bg-black py-16 text-center border-b border-d4af37">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-bold tracking-widest text-d4af37"
        >
          CARTER RISINGS
        </motion.h1>
        <p className="text-2xl mt-4 tracking-wide text-gray-300">
          ASCEND • EMPOWER • RISE
        </p>
      </header>

      {/* Luxury Nav */}
      <nav className="bg-black py-8 text-center border-b border-d4af37 sticky top-0 z-50">
        <div className="container mx-auto flex justify-center gap-12 uppercase tracking-widest text-sm">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/ebooks" className="nav-link">E-Books</Link>
          <Link to="/apparel" className="nav-link">Apparel</Link>
          <Link to="/apps" className="nav-link">Apps</Link>
          <Link to="/affiliates" className="nav-link">Affiliates</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          <Link to="/admin" className="nav-link">Admin</Link>
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

      <footer className="bg-black text-gray-400 py-12 mt-auto text-center border-t border-d4af37">
        <p className="tracking-wider">© 2026 Carter Risings • All Rights Reserved</p>
        <p className="mt-2">Built for the Future</p>
      </footer>
    </div>
  );
};

export default App;
