import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Send us a message!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Concern" />
        <textarea placeholder="Message" rows="5"></textarea>
        <button className="contactbtn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
