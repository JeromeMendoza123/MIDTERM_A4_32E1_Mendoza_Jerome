import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddQuote from './pages/AddQuote';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Random Quote Generator</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddQuote />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
