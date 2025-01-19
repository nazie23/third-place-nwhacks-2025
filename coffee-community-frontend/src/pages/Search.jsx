import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const Search = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    Papa.parse("../sample-data-Coffee_shops.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        setCoffeeShops(data);
        setFilteredShops(data); 
        localStorage.setItem("coffeeShops", JSON.stringify(data));
      },
    });
  }, []);

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
