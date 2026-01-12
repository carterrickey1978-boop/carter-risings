import React, { useState } from "react";
import { motion } from "framer-motion";

const ADMIN_PASSWORD = "carter2026";  // CHANGE TO STRONG PASSWORD!

const Admin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("ebook");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) setAuthenticated(true);
    else alert("Wrong password");
  };

  const handleAdd = () => {
    const products = JSON.parse(localStorage.getItem("carterProducts") || "[]");
    products.push({ name, type, price: Number(price), description, image });
    localStorage.setItem("carterProducts", JSON.stringify(products));
    setMessage("Product added! Refresh site to see");
    setName("");
    setPrice("");
    setDescription("");
    setImage("");
  };

  if (!authenticated) {
    return (
      <main className="container mx-auto px-6 py-24 text-center">
        <motion.h2 className="text-5xl font-bold mb-12 text-blue-900">
          Admin Login
        </motion.h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="px-8 py-4 border border-gray-300 rounded-lg mb-8 text-lg" />
        <button onClick={handleLogin} className="px-12 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
          Login
        </button>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-16">
      <motion.h2 className="text-5xl font-bold text-center mb-16 text-blue-900">
        Add Product to Inventory
      </motion.h2>
      <div className="max-w-2xl mx-auto bg-white p-12 rounded-xl shadow-lg">
        <input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-lg" />
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-lg">
          <option value="ebook">E-Book</option>
          <option value="apparel">Apparel</option>
          <option value="app">App</option>
        </select>
        <input placeholder="Price (e.g. 19.99)" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-lg" />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-lg" />
        <input placeholder="Image URL (upload to ImgBB.com for free)" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-4 mb-8 border border-gray-300 rounded-lg text-lg" />
        <button onClick={handleAdd} className="w-full py-6 bg-blue-600 text-white rounded-lg font-bold text-xl hover:bg-blue-700 transition">
          Add Product
        </button>
        {message && <p className="text-center mt-8 text-2xl text-green-600">{message}</p>}
      </div>
    </main>
  );
};

export default Admin;
