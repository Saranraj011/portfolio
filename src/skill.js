import React from "react";
import "./skill.css"; // Assuming CSS is in App.css


const Skill = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">
        Tools and technologies I enjoy working with
      </p>
      <div className="skills-tabs">
        <button className="tab active">FrontEnd</button>
        <button className="tab">Backend</button>
        <button className="tab">Others</button>
      </div>
      <div className="skills-cards">
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
          </div>
          <h3>React</h3>
          <p>
            For building dynamic and efficient user interfaces tailored to
            modern web applications.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
            />
          </div>
          <h3>Next.js</h3>
          <p>
            For creating high-performance web applications with{" "}
            <span className="highlight">server-side rendering</span> and
            seamless SEO optimization.
          </p>
        </div>
        <div className="card">
          <div className="card-icon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React Native"
            />
          </div>
          <h3>React Native</h3>
          <p>
            For developing <span className="highlight">cross-platform</span>{" "}
            apps with a native-like user experience.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Skill;