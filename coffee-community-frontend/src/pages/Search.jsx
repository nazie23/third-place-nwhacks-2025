// src/pages/Search.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    if (query.length === 0) {
      setCafes([]);
      return;
    }

    const fetchCafes = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/cafes?query=${query}`);
        setCafes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCafes();
  }, [query]);

  return (
    <div>
      <h1>Search Cafes</h1>
      <input
        type="text"
        placeholder="Search for cafes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {cafes.map((cafe) => (
          <li key={cafe._id}>
            <h3>{cafe.name}</h3>
            <p>Address: {cafe.address}</p>
            <p>Location: {cafe.location}</p>
            <p>Rating: {cafe.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
