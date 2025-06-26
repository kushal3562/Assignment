import React from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import './index.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar fixed-top custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">

        {/* Left: Logo */}
        <div className="d-flex align-items-center logo-area">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="logo"
            width="28"
            height="28"
            
            className={`me-2${theme === 'dark' ? 'text-white' : 'text-dark'}`}
          />
          <span className={`navbar-brand fw-bold mb-0 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
                            ANISH KUMAR SINHA
            </span>

        </div>

        
        <ul className="nav d-flex flex-row align-items-center gap-3 mb-0 nav-links">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>

       
        <button className="btn btn-outline-dark theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
        </button>

      </div>
    </nav>
  );
};

export default Header;
