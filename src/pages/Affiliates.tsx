import React, { useState } from "react";
import { motion } from "framer-motion";

const Affiliates: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleApply = async () => {
    try {
      const res = await fetch("/api/affiliates/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error - try again");
    }
  };

  return (
    <main style={{ flex: 1, padding: "4rem 2rem", textAlign: "center" }}>
      <motion.h2 style={{ fontSize: "3rem", marginBottom: "2rem", textShadow: "0 0 20px rgba(255,215,0,0.6)" }}>
        Join the Carter Risings Affiliates
      </motion.h2>
      <p style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "0 auto 3rem", opacity: 0.9 }}>
        Earn 20% commission promoting e-books, apparel, apps. Approval required.
      </p>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "10px", fontSize: "1.2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "1rem", marginBottom: "2rem", borderRadius: "10px", fontSize: "1.2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
        />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={handleApply}
          style={{ padding: "1.5rem 3rem", background: "linear-gradient(45deg, #FF4500, #FFD700)", color: "white", border: "none", borderRadius: "50px", fontWeight: "bold", boxShadow: "0 0 30px rgba(255,69,0,0.6)" }}
        >
          Apply Now
        </motion.button>
        {message && <p style={{ marginTop: "2rem", fontSize: "1.3rem", color: "#FFD700" }}>{message}</p>}
      </div>
    </main>
  );
};

export default Affiliates;
