import React from "react";
import "./Home.css"; // import ไฟล์ CSS

const Home = () => {
  return (
    <div id="home" className="container">
      <div className="profile">
        <div className="profile-info">
          <h1>
            Web <br></br>Developer{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <p>
            Hi, I'm Khomkrit Aindam. A passionate Web Developer based in
            Ratchaburi, Thailand.{" "}
            <span role="img" aria-label="location pin">
              📍
            </span>
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/khomkrit.aindam/"
              target="_blank"
              className="icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://github.com/KKrit-ad"
              target="_blank"
              className="icon"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="profile-image">
          <img src="./Profile.jpg" alt="Profile of Khomkrit Aindam" />
        </div>
      </div>
      <div className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="icons">
          <i className="fab fa-html5 text-orange" title="HTML5"></i>
          <i className="fab fa-css3-alt text-blue" title="CSS3"></i>
          <img
            src="./Tailwind_CSS_Logo.svg.png"
            alt="Tailwind CSS"
            title="Tailwind CSS"
          />
          <i className="fab fa-js-square text-yellow" title="JavaScript"></i>
          <i className="fab fa-react text-light-blue" title="React"></i>
          <i className="fab fa-python text-light-blue" title="Python"></i>
          <i className="fab fa-node-js text-green" title="Node.js"></i>
          <img src="./express-js.png" alt="Express.js" title="Express.js" />
          <img src="./mongodb-color.svg" alt="MongoDB" title="MongoDB" />
          <img src="./mysql.svg" alt="MySQL" title="MySQL" />
          <img src="./vercel.svg" alt="Vercel" title="Vercel" />
          <img
            src="./netlify-icon-logo-7CF6AA9DC7-seeklogo.com.png"
            alt="Netlify"
            title="Netlify"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
