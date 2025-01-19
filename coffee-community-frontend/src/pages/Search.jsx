import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import "./Search.css";

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
        className="search-input"
      />
      <div className="scrollable-container">
        <div className="coffee-shops-container">
          {filteredShops.map((shop, index) => (
            <div className="coffee-card-wrapper">
            <div className="coffee-card">
              <Link to={`/cafe/${shop.name}`} className="coffee-card-link">
                <h2>{shop.name}</h2>
                <p>{shop.address}</p>
                <p>{shop.city}</p>
                <p>{shop.state}</p>
              </Link>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
