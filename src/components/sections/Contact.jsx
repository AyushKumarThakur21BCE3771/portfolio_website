import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/xqkrjvaw" method="POST">
        <div className="name-container">
          <input type="text" name="name" placeholder="Your Name" />
        </div>
        <input type="email" name="email" placeholder="Email Address" />
        <textarea
          type="text"
          name="message"
          id=""
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
