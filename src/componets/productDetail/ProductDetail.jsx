import React from "react";
import { useParams } from "react-router-dom";
import data from "../Data/Featured";
import "./ProductDetail.css";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ handleCart }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  const navigate = useNavigate();

  return (
    <div className="product-details">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <h3>${product.currentPrice}</h3>
        <button
          onClick={() => {
            handleCart(product);
            navigate("/cart");
          }}
          className="product-detail-cart-button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
