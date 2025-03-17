import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import upiQR from "../assets/upi_qr.png"; // ✅ Correct import
import "./Checkout.css";

const Checkout = ({ cart, totalPrice, setCart }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [showInvalidUpiAlert, setShowInvalidUpiAlert] = useState(false);
  const [showPaymentReminder, setShowPaymentReminder] = useState(false); // ✅ New state for payment reminder popup

  // ✅ Handle Place Order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Add items before placing an order.");
      return;
    }

    if (!paymentDone) {
      setShowPaymentReminder(true); // ✅ Show the styled popup
      return;
    }

    // Show confirmation popup
    setShowPopup(true);

    // Proceed after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
      setCart([]); // Clear cart
      navigate("/place-order", { state: { cart, totalPrice } });
    }, 2000);
  };

  // ✅ Handle UPI Payment Success
  const handlePayment = () => {
    if (upiId && !upiId.includes("@")) {
      setShowInvalidUpiAlert(true);

      // Hide invalid UPI alert after 3 seconds
      setTimeout(() => setShowInvalidUpiAlert(false), 3000);
      return;
    }

    setPaymentDone(true);
    setShowPaymentAlert(true);

    // Hide the payment alert after 3 seconds
    setTimeout(() => setShowPaymentAlert(false), 3000);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/shop">Shop Now</a></p>
      ) : (
        <>
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="checkout-details">
                  <h4>{item.name}</h4>
                  <p>${item.price} × {item.quantity}</p>
                </div>
              </div>
            ))}
            <h3 className="total-price">Total: ${totalPrice.toFixed(2)}</h3>
          </div>

          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <h3>Shipping Details</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="ZIP Code" required />

            {/* ✅ UPI Payment Section */}
            <div className="upi-payment">
              <h3 color="white">UPI Payment</h3>
              <img src={upiQR} alt="UPI QR Code" className="upi-qr" />
              <p color="white">Scan the QR code or enter UPI ID to pay</p>
              <input
                type="text"
                placeholder="Enter UPI ID (e.g.123@ibl)"
                className="upi-input"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <button type="button" onClick={handlePayment}>Pay Now</button>
            </div>

            <button type="submit">Place Order</button>
          </form>
        </>
      )}

      {/* ✅ Order Confirmation Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>🎉 Order Placed Successfully!</h3>
            <p>Your order has been placed. Thank you for shopping with us!</p>
          </div>
        </div>
      )}

      {/* ✅ Payment Success Alert */}
      {showPaymentAlert && (
        <div className="payment-alert">
          ✅ Payment Successful! You can now place your order.
        </div>
      )}

      {/* ✅ Invalid UPI ID Alert */}
      {showInvalidUpiAlert && (
        <div className="invalid-upi-alert">
          ❌ Invalid UPI ID! It must contain '@' (e.g., yourname@upi)
        </div>
      )}

      {/* ✅ Payment Reminder Popup */}
      {showPaymentReminder && (
        <div className="payment-reminder-popup">
          <div className="payment-reminder-content">
            <h3>⚠️ Payment Required</h3>
            <p>Please complete the UPI payment before placing the order.</p>
            <button onClick={() => setShowPaymentReminder(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
