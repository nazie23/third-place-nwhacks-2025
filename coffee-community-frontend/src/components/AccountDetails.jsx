import React, { useEffect, useState } from "react";
import LoyaltyCard from "./LoyaltyCard";
import StampFigure from "./StampFigure";
import "../styles/Complete.css";

const AccountDetails = () => {
  const [userData, setUserData] = useState([]);
  const [loyaltyData, setLoyaltyData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current page index

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch("/userdata.csv");
        const loyaltyResponse = await fetch("/loyaltydata.csv");

        const userText = await userResponse.text();
        const loyaltyText = await loyaltyResponse.text();

        const userParsed = parseCSV(userText);
        const loyaltyParsed = parseCSV(loyaltyText);

        console.log("Parsed User Data:", userParsed);
        console.log("Parsed Loyalty Data:", loyaltyParsed);

        setUserData(userParsed);
        setLoyaltyData(loyaltyParsed);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []); // Fetch data only once

  const parseCSV = (text) => {
    const rows = text
      .split("\n")
      .map((row) => row.split(","))
      .filter((row) => row.some((cell) => cell.trim() !== ""));
    const headers = rows[0];

    return rows.slice(1).map((row) => {
      let obj = {};
      row.forEach((value, index) => {
        obj[headers[index]?.trim()] = value.trim();
      });
      return obj;
    });
  };

  // Handle Next Page
  const handleNextPage = () => {
    if (currentIndex < Math.min(userData.length, loyaltyData.length) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Previous Page
  const handlePreviousPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get current user and loyalty data
  const user = userData[currentIndex] || {
    place_name: "N/A",
    rating: "N/A",
    friends: "N/A",
    previous_orders: "N/A",
    events_attended: "N/A",
  };

  const loyalty = loyaltyData[currentIndex] || {
    name: "N/A",
    points: "0",
    barcode: "N/A",
    coupon: "N/A",
    coupon_points: "0",
  };

  if (userData.length === 0 || loyaltyData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-details">
      <div className="booklet">
        <div className="page left">
          <h2>{user.place_name}</h2>
          <p>Rating: {user.rating}</p>
          <p>Friends: {user.friends}</p>
          <p>Previous Orders: {user.previous_orders}</p>
          <p>Past Events: {user.events_attended}</p>
        </div>
        <div className="page right">
          <LoyaltyCard loyaltyData={loyalty} />
          <StampFigure />
        </div>
      </div>
      <div className="navigation-buttons">
        <button
          onClick={handlePreviousPage}
          disabled={currentIndex === 0}
          className="prev-button"
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentIndex === Math.min(userData.length, loyaltyData.length) - 1}
          className="next-button"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
