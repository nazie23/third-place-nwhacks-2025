// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Search from "./pages/Search";
import Forum from "./pages/Forum"
import './App.css';
import CafeDetail from "./pages/CafeDetail";
import Account from "./pages/Account";

const App = () => {
  return (
    <Router>
      <div className="tabs-container"></div>
      <nav class="navbar">
        <a href="/">Home</a>
        <a href="/search">Search Cafes</a>
        <a href="/account">Account</a>
        <a href="/forum">Forum</a>
      </nav>
      <div className="tabs-container"></div>
      <Routes>
        <Route path="/" element={<h1>Welcome to Third Place!</h1>} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        /* <Route path="/cafe/:cafeId" element={<CafeDetail />} /> */
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
};

export default App;

