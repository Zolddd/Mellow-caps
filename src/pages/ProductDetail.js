import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({ products, cart, addToCart, updateCartItem }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);
  const cartItem = cart.find((item) => item.id === product?.id);

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Hide after 2 seconds
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>

      {cartItem ? (
        <div className="quantity-control">
          <button onClick={() => updateCartItem(product.id, -1)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => updateCartItem(product.id, 1)}>+</button>
        </div>
      ) : (
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}

      {/* Popup Notification */}
      {showPopup && <div className="popup">Added to Cart ✅</div>}
    </div>
  );
};

export default ProductDetail;
