import { useState } from "react";
import Card from "./componets/card/Card";
import Navbar from "./componets/Navbar/Navbar";
import Products from "./componets/product/Products";
import ProductDetail from "./componets/productDetail/ProductDetail";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./componets/cart/Cart";
import { useEffect } from "react";
import Signup from "./componets/Signup/Signup";
import Checkout from "./componets/checkout/Checkout";
function App() {
  const [cartCount, setCartCount] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setCartCount(parseInt(cartCount + 1));
  };

  return (
    <>
      <Router>
        <Navbar cartcount={cartCount}></Navbar>

        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route
            path="/product/:id"
            element={<ProductDetail handleCart={handleCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/sign-up" element={<Signup></Signup>}></Route>
          <Route
            path="/checkout"
            element={<Checkout cart={cart} setCart={setCart}></Checkout>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
