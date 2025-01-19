import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const Search = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch the CSV data when the component mounts
  useEffect(() => {
    // Fetch the CSV file
    fetch("/sample-data-Coffee_shops.csv")
      .then((response) => response.text())
      .then((data) => {
        // Parse CSV data into an array of objects
        const rows = data.split("\n").slice(1); // Remove header row
        const parsedData = rows.map((row) => {
          const [name, address] = row.split(",");
          return { name: name.trim(), address: address?.trim() };
        });
        setCoffeeShops(parsedData);
        setFilteredShops(parsedData);
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, []);


  // Filter coffee shops based on the search query
  const handleSearch = (query) => {
    console.log('Searching for:', query);
    setSearchQuery(query);

    const filtered = coffeeShops.filter((shop) => {
      const shopName = shop.name || ""; // Get the name, fallback to empty string if it's undefined
      console.log("Checking shop:", shopName);
      return shopName.toLowerCase().includes(query.toLowerCase());
    });

    console.log("Filtered shops:", filtered);
    setFilteredShops(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a coffee shop"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul>
        {filteredShops.length > 0 ? (
          filteredShops.map((shop, index) => (
            <li key={index}>{shop.name}</li>
          ))
        ) : (
          <li>No coffee shops found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
