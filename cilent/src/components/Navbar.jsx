import React, { useState } from "react";
import "./Navbar.css"; // import CSS ที่ใช้สำหรับตกแต่ง

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>
            <a href="#home">KK.dev</a>
          </h1>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <span className="sidebar-close" onClick={toggleSidebar}>
          &times;
        </span>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
