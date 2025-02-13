import React, { useState } from "react";
import data from "../Data/Featured";
import Card from "../card/Card";
import "./Products.css";

const Products = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const filteredProducts = selectedGender
    ? data.filter((item) => item.gender === selectedGender)
    : [];

  const latestMap = data.filter((item) => item.collection === "latest");
  const clearanceMap = data.filter((item) => item.collection === "clearance");

  return (
    <div className="products">
      <div className="filter-options">
        <label className="gender-select" htmlFor="gender-select">
          Select Gender:
        </label>
        <select
          id="gender-select"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      {selectedGender && (
        <div className="mapping">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Card key={index} item={item} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}

      {!selectedGender && (
        <>
          <div className="latest-collections">
            <h2 className="latest-tag">Latest Collections</h2>
            <hr />
            <div className="mapping">
              {latestMap.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>

          <div className="clearance-collection">
            <h2 className="clearance-tag">Clearance Collection</h2>
            <hr />
            <div className="mapping">
              {clearanceMap.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
