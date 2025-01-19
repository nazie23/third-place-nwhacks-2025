import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const Search = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch the CSV data when the component mounts
  useEffect(() => {
    Papa.parse("../sample-data-Coffee_shops.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setCoffeeShops(result.data);
        setFilteredShops(result.data);  // Set initial filtered list to all shops
      },
    });
  }, []);

  // Filter coffee shops based on the search query
  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = coffeeShops.filter((shop) =>
      shop.name.toLowerCase().includes(query.toLowerCase())
    );
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
        {filteredShops.map((shop, index) => (
          <li key={index}>{shop.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
