// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Search from "./pages/Search";
import CafeDetail from "./pages/CafeDetail";
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="tabs-container">
        <nav className="tabs">
          <Link to="/" className="tab">Home</Link>
          <Link to="/search" className="tab">Search Cafes</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<h1>Welcome to Third Place!</h1>} />
        <Route path="/search" element={<Search />} />
        <Route path="/cafe/:cafeId" element={<CafeDetail />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
};

export default App;

