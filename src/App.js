import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PlaceOrder from "./pages/PlaceOrder"; // ✅ Import PlaceOrder
import ScrollToTop from "./ScrollToTop";

function App() {
  const [products] = useState([
    { id: 1, name: "Classic Cap", price: 20, image: process.env.PUBLIC_URL + "/images/cap1.jpg", description: "A stylish classic cap for everyday wear." },
    { id: 2, name: "Sporty Cap", price: 25, image: process.env.PUBLIC_URL + "/images/cap2.jpg", description: "A sporty cap designed for outdoor activities." },
    { id: 3, name: "Luxury Cap", price: 30, image: process.env.PUBLIC_URL + "/images/cap3.jpg", description: "A premium cap with a luxury feel." }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartItem = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} cart={cart} addToCart={addToCart} updateCartItem={updateCartItem} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCartItem={updateCartItem} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} totalPrice={totalPrice} setCart={setCart} />} />
        <Route path="/place-order" element={<PlaceOrder />} /> {/* ✅ Added PlaceOrder Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
