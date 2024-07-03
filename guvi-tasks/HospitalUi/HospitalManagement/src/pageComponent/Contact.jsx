import React from "react";
import "./contact.css";
import Hero from './Hero'
import ContactImg from "../assets/contact1.avif";
import Navbar from "../navComponent/Navbar";
import ContactUs from "../pageDetailsComponent/ContactUs";

const Contact = () => {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="none"
      />
      <ContactUs />
    </>
  );
};

export default Contact;
