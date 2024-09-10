import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  const form = useRef();
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(-20px)";
          }
        });
      },
      { threshold: 0.1 } // ตั้งค่าให้แสดงเมื่อเลื่อนถึง 10% ขององค์ประกอบ
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cpdvzrp",
        "template_iek5yb7",
        form.current,
        "b68y6LFI_-KthiuHJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!"); // แสดง alert เมื่อส่งอีเมลสำเร็จ
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again."); // แสดง alert เมื่อเกิดข้อผิดพลาด
        }
      );
  };

  return (
    <div id="contact" className="styled-contact-form">
      <h1 ref={titleRef} className="contact-title">
        Contact
      </h1>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
