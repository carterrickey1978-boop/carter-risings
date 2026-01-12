import React, { useState } from "react";
import { motion } from "framer-motion";

const ADMIN_PASSWORD = "carter2026";  // CHANGE THIS!

const Admin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("ebook");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) setAuthenticated(true);
    else alert("Wrong password");
  };

  const handleAdd = () => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push({ name, type, price: Number(price), image, description });
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product added! Refresh site to see");
  };

  if (!authenticated) {
    return (
      <main className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-8">Admin Login</h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="px-4 py-2 border rounded mb-4" />
        <button onClick={handleLogin} className="px-8 py-4 bg-blue-600 text-white rounded-lg">
          Login
        </button>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Add Product to Inventory</h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 mb-4 border rounded-lg" />
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-4 mb-4 border rounded-lg">
          <option value="ebook">E-Book</option>
          <option value="apparel">Apparel</option>
          <option value="app">App</option>
        </select>
        <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-4 mb-4 border rounded-lg" />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-4 mb-4 border rounded-lg" />
        <input placeholder="Image URL (upload to ImgBB.com)" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-4 mb-6 border rounded-lg" />
        <button onClick={handleAdd} className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
          Add Product
        </button>
      </div>
    </main>
  );
};

export default Admin;
