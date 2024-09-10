import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Home from "./components/้Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default App;
