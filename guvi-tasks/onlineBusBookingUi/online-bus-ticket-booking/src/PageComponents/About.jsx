import React from "react";
import Hero from "./Hero";
import AboutImg from "../assets/about4.jpg";
import Aboutus from "../PageDetails/Aboutus";

const About = () => {
  return (
    <>
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="none" />
      <Aboutus />
    </>
  );
};

export default About;
