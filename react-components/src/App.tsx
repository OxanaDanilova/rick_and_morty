import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="nav-menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
