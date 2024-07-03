import React from "react";
import Hero from "./Hero";
import ContactImg from "../assets/contact4.avif";
import ContactUs from "../PageDetails/ContactUs";

const Contact = () => {
  return (
    <>
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
