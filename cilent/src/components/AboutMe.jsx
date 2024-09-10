import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css"; // import ไฟล์ CSS

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // ยกเลิกการสังเกตหลังจากเห็นแล้ว
          }
        });
      },
      { threshold: 0.1 } // ปรับค่า threshold ตามความต้องการ
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      className={`about-me ${isVisible ? "show" : ""}`}
      ref={aboutMeRef}
    >
      <div className="about-me-image">
        <img src="./About.gif" alt="Profile of Khomkrit Aindam" />
      </div>
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          Hello, my name is Khomkrit Aindam, but you can call me Krit. I am 21
          years old and currently a 4th-year student at Kasetsart University,
          Kamphaeng Saen Campus, studying in the Faculty of Arts and Science,
          majoring in Computer Science. I am interested in becoming a Full Stack
          Developer because I enjoy working on both the front end and back end.
          Although my experience is still at a beginner level, I love it and
          have been practicing consistently.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
