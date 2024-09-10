import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "AirEagle: Flight Ticket Booking System",
    description:
      "This project is designed for booking flight tickets, where users can enter their details, and the system will send a confirmation email for the booking. The project is inspired by the Airports of Thailand website.",
    tech: "React, CSS, JavaScript, Node.js (Express), MongoDB (Mongoose)",
    image: "./AirEagle.png",
    demoLink:
      "https://aireagle-flightbooking-kkrit-ad-sinnermanxs-projects.vercel.app/",
  },
  {
    title: "Lingua+: Language Learning ",
    description:
      "This project is currently under development. This project is a computer science assignment and involves a web application for language learning with separate interfaces for teachers and students. Teachers can create rooms, design lessons, invite students to join the rooms, and track students' progress. On the student side, they can join rooms using a code provided by the teacher, complete lessons, and participate in a forum for discussions and Q&A between teachers and students.",
    tech: "React, CSS, JavaScript, Node.js (Express), MySQL",
    image: "./Lingua+.png",
    demoLink: "#",
  },

  {
    title: "Personal Information",
    description:
      "This project is a simple application designed to display user details after registration and login. It stores user information in a MongoDB database. This project was created as a classroom assignment.",
    tech: "React, CSS, JavaScript, Node.js (Express), MongoDB (Mongoose)",
    image: "./Personal-Information.png",
    demoLink:
      "https://personal-info-i3dkuecss-sinnermanxs-projects.vercel.app/",
  },
  {
    title: "Teenoi: Food Ordering System",
    description:
      "This project is a simple website. related to food orders Inspired by Suki Teenoi",
    tech: "HTML, CSS, JavaScript",
    image: "./Teenoi.png",
    demoLink: "https://teenoi-main.vercel.app/",
  },
  {
    title: "MovLibrary",
    description:
      "A website for viewing a list of all movies. and show the plot of various stories and pictures of various movies and can search for movie names using the API",
    tech: "HTML, CSS, JavaScript",
    image: "./MovLibrary.png",
    demoLink: "https://mov-library.vercel.app/",
  },
  {
    title: "RaceFrenzy: Drag racing Game",
    description:
      "This project was created during my Game Programming course. I developed a drag racing game using Unity and wrote the code in C#. It was a simple and short game.",
    tech: "Unity, C#",
    image: "./JtgONC.png",
    demoLink: "https://kkrit-ad.itch.io/racefrenzy",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div
      id="projects"
      className={`projects-container ${isVisible ? "show" : ""}`}
      ref={projectsRef}
    >
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">Explore My Work</p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img
                src={project.image}
                alt={`Illustration of ${project.title}`}
              />
            </div>
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">
                <span className="tech-label">Tech Stack:</span> {project.tech}
              </p>
              <a
                href={project.demoLink}
                className="demo-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play demo-icon"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
