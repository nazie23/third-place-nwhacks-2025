// src/pages/CafeDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './CafeDetail.css';

const CafeDetail = () => {
  const { cafeId } = useParams(); // Get the cafeId from the URL
  const navigate = useNavigate();
  
  const coffeeShops = JSON.parse(localStorage.getItem("coffeeShops")) || []; // Get coffee shops from localStorage or default

  // Find the coffee shop by name (the cafeId is the name in this case)
  const coffeeShop = coffeeShops.find((shop) => shop.name === cafeId);

  if (!coffeeShop) {
    return <div>Cafe not found!</div>;
  }

  return (
    <div className="cafe-container">
      <h1 className="cafe-header">{coffeeShop.name}</h1>
      <div className="cafe-details">
        <p><strong>Address:</strong> {coffeeShop.address || "Not Available"}</p>
        <p><strong>Country:</strong> {coffeeShop.country || "Not Available"}</p>
        <p><strong>State:</strong> {coffeeShop.state || "Not Available"}</p>
        <p><strong>City:</strong> {coffeeShop.city || "Not Available"}</p>
        <p className="cafe-rating"><strong>Rating:</strong> {coffeeShop.rating || "Not Rated"}</p>
      </div>
      <button onClick={() => navigate("/search")} className="back-btn">Back to Search</button>
    </div>
  );
};

export default CafeDetail;
