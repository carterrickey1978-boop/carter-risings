import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ADMIN_PASSWORD = "carter2026";  // CHANGE TO STRONG PASSWORD!

const Admin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("ebook");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (authenticated) {
      fetch("/api/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }
  }, [authenticated]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) setAuthenticated(true);
    else alert("Wrong password");
  };

  const handleAddProduct = async () => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, type, price: Number(price), description, image, downloadLink }),
      });
      const data = await res.json();
      setMessage("Product added!");
      // Refresh list
      const updated = await fetch("/api/products").then(res => res.json());
      setProducts(updated);
    } catch (err) {
      setMessage("Error adding product");
    }
  };

  if (!authenticated) {
    return (
      <main style={{ flex: 1, padding: "4rem", textAlign: "center" }}>
        <motion.h2 style={{ fontSize: "3rem" }}>Carter Risings Admin</motion.h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ padding: "1rem", fontSize: "1.2rem", margin: "2rem" }} />
        <button onClick={handleLogin} style={{ padding: "1rem 2rem", background: "#FFD700", color: "#000", border: "none", borderRadius: "10px" }}>
          Login
        </button>
      </main>
    );
  }

  return (
    <main style={{ flex: 1, padding: "4rem" }}>
      <motion.h2 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "2rem" }}>
        Manage Inventory
      </motion.h2>

      <div style={{ maxWidth: "800px", margin: "0 auto 4rem", background: "rgba(255,255,255,0.05)", padding: "2rem", borderRadius: "20px" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Add New Product</h3>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }} />
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }}>
          <option value="ebook">E-Book</option>
          <option value="apparel">Apparel</option>
          <option value="app">App</option>
        </select>
        <input placeholder="Price (e.g. 19.99)" value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }} />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }} />
        <input placeholder="Image URL (upload to ImgBB)" value={image} onChange={(e) => setImage(e.target.value)} style={{ width: "100%", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }} />
        <input placeholder="Download Link (for digital)" value={downloadLink} onChange={(e) => setDownloadLink(e.target.value)} style={{ width: "100%", padding: "1rem", marginBottom: "2rem", borderRadius: "10px" }} />
        <button onClick={handleAddProduct} style={{ padding: "1.5rem 3rem", background: "#FFD700", color: "#000", border: "none", borderRadius: "50px", fontWeight: "bold" }}>
          Add Product
        </button>
        {message && <p style={{ marginTop: "2rem", color: "#FFD700" }}>{message}</p>}
      </div>

      <h3 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem" }}>Current Inventory</h3>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {products.map((product) => (
          <div key={product._id} style={{ background: "rgba(255,255,255,0.05)", padding: "2rem", marginBottom: "1rem", borderRadius: "15px" }}>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Type:</strong> {product.type}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Admin;
