import React from "react";
import "./home.css";
import Navbar from "../navComponent/Navbar";
import { useNavigate } from "react-router";
import { isUserLoggedIn } from "../services/AuthService";

const Home = () => {
  const navigate = useNavigate();
  const isAuth = isUserLoggedIn();

  const handlebooknow = () => {
    if (isAuth) {
      navigate("/appointment");
    }
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="homebg">
        <div className="homeContent">
          <div className="home-text">
            <h2>Feel Better About Finding HealthCare</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              explicabo odio consectetur dolor error! Rem impedit nam
              dignissimos vitae repudiandae sint minus. Cumque libero ea quis id
              voluptates doloremque vero!
            </p>
          </div>
          <div className="home-btn">
            <button className="btn-book" onClick={(e) => handlebooknow()}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
