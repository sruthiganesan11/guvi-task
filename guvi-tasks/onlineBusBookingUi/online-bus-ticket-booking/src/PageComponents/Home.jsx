import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fHww"
        title="Your Journey Your Story"
        text="Click here to Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/login"
        btnClass="show"
      />
    </div>
  );
};

export default Home;
