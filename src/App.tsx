import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home.tsx";
import EBooks from "./pages/EBooks.tsx";
import Apparel from "./pages/Apparel.tsx";
import Apps from "./pages/Apps.tsx";
import Affiliates from "./pages/Affiliates.tsx";

const App: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? { fontWeight: "bold", color: "#FFD700", textShadow: "0 0 10px #FFD700" } : {};

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        style={{
          background: "linear-gradient(135deg, rgba(255,69,0,0.8), rgba(255,215,0,0.8))",
          padding: "3rem",
          textAlign: "center",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(255,105,180,0.4)",
          borderBottom: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        <h1 style={{ fontSize: "4.5rem", textShadow: "0 0 20px #FF4500, 0 0 40px #FFD700" }}>
          CARTER RISINGS
        </h1>
        <p style={{ fontSize: "1.8rem", marginTop: "0.5rem", textShadow: "0 0 10px #ffffff" }}>
          ASCEND • EMPOWER • RISE
        </p>
      </motion.header>

      <nav style={{
        background: "rgba(0,0,0,0.6)",
        padding: "1.5rem",
        textAlign: "center",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        <Link to="/" style={{ color: "#fff", margin: "0 2rem", fontSize: "1.3rem", textDecoration: "none", transition: "all 0.3s", ...isActive("/") }} className="nav-link">HOME</Link>
        <Link to="/ebooks" style={{ color: "#fff", margin: "0 2rem", fontSize: "1.3rem", textDecoration: "none", transition: "all 0.3s", ...isActive("/ebooks") }} className="nav-link">E-BOOKS</Link>
        <Link to="/apparel" style={{ color: "#fff", margin: "0 2rem", fontSize: "1.3rem", textDecoration: "none", transition: "all 0.3s", ...isActive("/apparel") }} className="nav-link">APPAREL</Link>
        <Link to="/apps" style={{ color: "#fff", margin: "0 2rem", fontSize: "1.3rem", textDecoration: "none", transition: "all 0.3s", ...isActive("/apps") }} className="nav-link">APPS</Link>
        <Link to="/affiliates" style={{ color: "#fff", margin: "0 2rem", fontSize: "1.3rem", textDecoration: "none", transition: "all 0.3s", ...isActive("/affiliates") }} className="nav-link">AFFILIATES</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<EBooks />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/affiliates" element={<Affiliates />} />
      </Routes>

      <footer style={{
        background: "rgba(0,0,0,0.8)",
        color: "#aaa",
        textAlign: "center",
        padding: "2rem",
        marginTop: "auto"
      }}>
        © 2026 Carter Risings • All Rights Reserved • Built for the Future
      </footer>
    </div>
  );
};

export default App;
