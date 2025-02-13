import React from "react";
import "./Cart.css";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const handleRemove = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty. Start adding products!</p>
          <Link to="/" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-price">${item.currentPrice}</p>
                <button
                  onClick={() => handleRemove(index)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="checkout-div">
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
