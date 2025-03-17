import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css"; // Import updated styles

const Cart = ({ cart, removeFromCart, updateCartItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const isCartEmpty = cart.length === 0;

  return (
    <div className={`cart ${isCartEmpty ? "cart-empty" : ""}`}>
      <h2>Shopping Cart</h2>

      {isCartEmpty ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="shop-now">Shop Now</Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => updateCartItem(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartItem(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>

          {/* Checkout Button */}
          <Link 
            to={isCartEmpty ? "#" : "/checkout"}
            state={{ cart, totalPrice }}  // ✅ Pass cart data
            className={`checkout-btn ${isCartEmpty ? "disabled" : ""}`}
            onClick={(e) => isCartEmpty && e.preventDefault()}  // ✅ Prevent navigation if empty
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
