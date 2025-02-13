import React from "react";
import "./Checkout.css";

const Checkout = ({ cart }) => {
  const totalBill = cart.reduce((acc, item) => acc + item.currentPrice, 0);

  if (cart.length === 0) {
    return <h1 className="empty-cart">🛒 Your Cart is Empty</h1>;
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-items">
        {cart.map((item, index) => (
          <div className="checkout-item" key={index}>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">Rs {item.currentPrice}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <h2>
          Total Bill: <span className="total-amount">Rs {totalBill}</span>
        </h2>
        <button className="checkout-button">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Checkout;
