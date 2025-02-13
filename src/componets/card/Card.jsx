import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleProductDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="card-text">
          <h2>{item.name}</h2>
        </div>
        <div className="card-price">
          <span>${item.currentPrice}</span>
        </div>
        <div className="quick-view-btn">
          <button onClick={handleProductDetail} className="Quick-View-btn">
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
