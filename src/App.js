import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PlaceOrder from "./pages/PlaceOrder";
import ScrollToTop from "./ScrollToTop";
import LoginSignup from "./pages/LoginSignup";

function App() {
  const [products] = useState([
    { id: 1, name: "Classic Cap", price: 20, image: "/images/cap1.jpg", description: "A stylish classic cap for everyday wear." },
    { id: 2, name: "Sporty Cap", price: 25, image: "/images/cap2.jpg", description: "A sporty cap designed for outdoor activities." },
    { id: 3, name: "Luxury Cap", price: 30, image: "/images/cap3.jpg", description: "A premium cap with a luxury feel." }
  ]);

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user") || null);

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

  const handleLogin = (email) => {
    localStorage.setItem("user", email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} cart={cart} addToCart={addToCart} updateCartItem={updateCartItem} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCartItem={updateCartItem} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} totalPrice={totalPrice} setCart={setCart} />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<LoginSignup handleLogin={handleLogin} />} /> {/* ✅ Pass handleLogin */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
