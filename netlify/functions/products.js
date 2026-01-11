const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  type: String,  // "ebook", "apparel", "app"
  price: Number,
  description: String,
  image: String,  // URL to image
  downloadLink: String  // for e-books/apps
});

const Product = mongoose.model("Product", productSchema);

exports.handler = async (event, context) => {
  await mongoose.connect(process.env.MONGO_URI);

  if (event.httpMethod === "GET") {
    const products = await Product.find();
    return {
      statusCode: 200,
      body: JSON.stringify(products)
    };
  }

  if (event.httpMethod === "POST") {
    const product = JSON.parse(event.body);
    const newProduct = new Product(product);
    await newProduct.save();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Product added!" })
    };
  }

  return { statusCode: 405 };
};
