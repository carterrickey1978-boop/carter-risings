import React, { useState } from "react";
import { motion } from "framer-motion";

const Affiliates: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleApply = async () => {
    try {
      const res = await fetch("https://YOUR_RENDER_BACKEND_URL.onrender.com/api/affiliates/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      setMessage(data.message || "Application sent - awaiting approval!");
    } catch (err) {
      setMessage("Error - backend not ready yet");
    }
  };

  return (
    <main style={{ flex: 1, padding: "4rem 2rem", textAlign: "center" }}>
      <motion.h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
        Join the Carter Risings Affiliates
      </motion.h2>
      <p style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
        Earn 20% commission promoting e-books, apparel, apps. Approval required.
      </p>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "10px", fontSize: "1.2rem" }}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "1rem", marginBottom: "2rem", borderRadius: "10px", fontSize: "1.2rem" }}
        />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={handleApply}
          style={{ padding: "1.5rem 3rem", background: "#FFD700", color: "#000", border: "none", borderRadius: "50px", fontWeight: "bold" }}
        >
          Apply Now
        </motion.button>
        {message && <p style={{ marginTop: "2rem", fontSize: "1.3rem", color: message.includes("Error") ? "red" : "#FFD700" }}>{message}</p>}
      </div>
    </main>
  );
};

export default Affiliates;
