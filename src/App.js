import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import './App.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />


      <div id="home" className="main-section container d-flex flex-column justify-content-center align-items-center">
        <div className="row align-items-center w-100">
          
          <div className="col-md-6 text-section text-md-start text-center">
            <h1>Hello! 👋</h1>
            <h2>I’m <strong>Anish</strong></h2>
            <p>UI/UX Designer, Front-End Developer & Thinker. Based in India.</p>

            <div className="social-links d-flex gap-3 justify-content-md-start justify-content-center mb-3">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            </div>

            <div className="mt-4">
              <button className="btn btn-warning me-3">Download CV</button>
              <button className="btn btn-secondary">Get in Touch!</button>
            </div>
          </div>

          
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="https://i.postimg.cc/Y9dL2kHH/Group-23.png"
              alt="Anish Illustration"
              className="img-fluid profile-image"
            />
          
          </div>
            <About/>
        </div>
      </div>

      {/* About Section */}
      
    </div>
  );
};

export default App;
