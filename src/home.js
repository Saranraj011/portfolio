import React from "react";
import "./home.css"; // Assuming CSS is in App.css

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">A</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="nav-icons">
          <span>🔗</span>
          <span>⚙️</span>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <p>
            Hey, there <span className="wave">👋</span>
          </p>
          <h1>
            I'm <span className="name-highlight">Adeola Badero</span>
            <br /> a <span className="title-highlight">Software Engineer</span>
          </h1>
          <p className="subtext">
            currently focused on building user experiences that drive growth.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="path/to/image.png" // Replace with actual path
            alt="Adeola Badero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;