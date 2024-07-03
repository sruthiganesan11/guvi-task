import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import {
  isUserLoggedIn,
  logout,
  isAdminUser,
  isUser,
} from "../Services/AuthService";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const URL = "http://localhost:3000";

  const isAuth = isUserLoggedIn();
  const isAdmin = isAdminUser(); //check if its admin logged in
  const isUsers = isUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="Navbar">
      <Link className="navHeader" to="/">
        JOYFUL JOURNEY
      </Link>
      <ul className={click ? "NavList active" : "NavList"}>
        {isAuth && isAdmin && (
          <li className="navItem">
            <i className="fa-solid fa-user-tie" id="icon"></i>
            <NavLink className="links" to="/admin">
              Admin Dashboard
            </NavLink>
          </li>
        )}
        {(isAuth && isAdmin) ||
          (isUsers && (
            <li className="navItem">
              <i className="fa-solid fa-magnifying-glass" id="icon"></i>
              <NavLink className="links" to="/destination">
                Find Buses
              </NavLink>
            </li>
          ))}

        {(isAuth && isAdmin) ||
          (isUsers && (
            <li className="navItem">
              <i className="fa-solid fa-ticket" id="icon"></i>
              <NavLink className="links" to="/eticket">
                E-ticket
              </NavLink>
            </li>
          ))}

        {(isAuth && isAdmin) ||
          (isUsers && (
            <li className="navItem">
              <i className="fa-solid fa-lock" id="icon"></i>
              <NavLink className="links" to="/changePassword">
                Change Password
              </NavLink>
            </li>
          ))}

        {(isAuth && isAdmin) ||
          (isUsers && (
            <li className="navItem">
              <i className="fa-solid fa-book" id="icon"></i>
              <NavLink className="links" to="/myBooking">
                My Booking
              </NavLink>
            </li>
          ))}

        <li className="navItem">
          <i className="fa-solid fa-circle-info" id="icon"></i>
          <NavLink className="links" to="/about">
            About us
          </NavLink>
        </li>
        <li className="navItem">
          <i className="fa-solid fa-address-book" id="icon"></i>
          <NavLink className="links" to="/contact">
            Contact
          </NavLink>
        </li>
        {!isAuth ? (
          <>
            <li className="navItem">
              <i className="fa-regular fa-user" id="icon"></i>
              <NavLink className="links" to="/signup">
                SignUp
              </NavLink>
            </li>
            <li className="navItem">
              <i className="fa-solid fa-right-to-bracket" id="icon"></i>
              <NavLink className="links" to="/login">
                Login
              </NavLink>
            </li>
          </>
        ) : (
          <li className="navItem">
            <i className="fa-solid fa-arrow-right-from-bracket" id="icon"></i>
            <NavLink className="links" to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Navbar;
