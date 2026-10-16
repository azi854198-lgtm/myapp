import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar'; <-- Временно закомментируйте (поставьте //)
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <Navbar /> <-- Временно закомментируйте */}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
