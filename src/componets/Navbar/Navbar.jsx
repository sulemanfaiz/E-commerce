import React from "react";
import "./Navbar.css";
import logo from "../images/seekho-logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Navbar = ({ cartcount }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} onClick={handleNavigation} />
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Shop</li>
      </ul>
      <div className="navbar-btn-cart">
        <button className="navbar-sign-up">Sign up</button>
        <h1>
          <CiShoppingCart />
          <span className="add-cart-counter">{cartcount}</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
