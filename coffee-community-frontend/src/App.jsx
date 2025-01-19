// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Search from "./pages/Search";
import './App.css';

const App = () => {
  return (
    <Router>
      <nav class="navbar">
        <a href="/">Home</a>
        <a href="/search">Search Cafes</a>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Third Place!</h1>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
