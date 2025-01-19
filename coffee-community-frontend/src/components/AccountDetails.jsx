import React, { useEffect, useState } from "react";
import LoyaltyCard from "./LoyaltyCard";
import StampFigure from "./StampFigure";
import '../styles/Complete.css';
//import { parse } from "papaparse"; // Assuming papaparse is used for CSV parsing

const AccountDetails = () => {
  const [userData, setUserData] = useState(null);
  const [loyaltyData, setLoyaltyData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userResponse = await fetch("/userdata.csv");
  //       const loyaltyResponse = await fetch("/loyaltydata.csv");
    
  //       const userText = await userResponse.text();
  //       const loyaltyText = await loyaltyResponse.text();
    
  //       console.log("Raw User Data:", userText);
  //       console.log("Raw Loyalty Data:", loyaltyText);
    
  //       const userParsed = parseCSV(userText);
  //       const loyaltyParsed = parseCSV(loyaltyText);
    
  //       console.log("Parsed User Data:", userParsed);
  //       console.log("Parsed Loyalty Data:", loyaltyParsed);
    
  //       setUserData(userParsed);
  //       setLoyaltyData(loyaltyParsed);
  //     } catch (error) {
  //       console.error("Error fetching or parsing data:", error);
  //     }
  //   };
    

  //   fetchData();
  // }, []);

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
  }, []); // Empty dependency array ensures this runs only once
  
  // const parseCSV = (text) => {
  //   // Implement CSV parsing logic
  //   const rows = text.split("\n").map(row => row.split(","));
  //   const headers = rows[0];
  //   const data = rows.slice(1).map(row => {
  //     let obj = {};
  //     row.forEach((value, index) => {
  //       obj[headers[index]] = value;
  //     });
  //     return obj;
  //   });
  //   return data;
  // };
  const parseCSV = (text) => {
    const rows = text
      .split("\n")
      .map((row) => row.split(","))
      .filter((row) => row.some((cell) => cell.trim() !== "")); // Remove empty rows
    const headers = rows[0];
  
    return rows.slice(1).map((row) => {
      let obj = {};
      row.forEach((value, index) => {
        obj[headers[index]?.trim()] = value.trim();
      });
      return obj;
    });
  };
  
  

  if (!userData || !loyaltyData) {
    return <div>Loading...</div>;
  }
  
  const user = userData[0] || { 
    place_name: "N/A", 
    rating: "N/A", 
    friends: "N/A", 
    previous_orders: "N/A", 
    events_attended: "N/A" 
  };
  
  const loyalty = loyaltyData[0] || { 
    name: "N/A", 
    points: "0", 
    barcode: "N/A", 
    coupon: "N/A", 
    coupon_points: "0" 
  };
  
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
          <LoyaltyCard loyaltyData={loyalty}/>
          <StampFigure/>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;