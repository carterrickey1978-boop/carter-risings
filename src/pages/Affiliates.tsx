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
    // same as before
  );
};

export default Affiliates;
