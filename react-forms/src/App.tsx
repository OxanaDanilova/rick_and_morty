import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import './App.css';
import FormPage from 'pages/Form/FormPage';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" end data-testid="homePageLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" end data-testid="formPageLink">
              Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" data-testid="aboutPageLink">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
