// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f5f5f5' }}>
        <Link to="/">Home</Link>
        <Link to="/search">Search Cafes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Coffee Connections</h1>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
