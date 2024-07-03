import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaInfoCircle,
  FaAddressBook,
  FaTimes,
  FaBars,
  FaUser,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRightToBracket, FaRightFromBracket } from "react-icons/fa6";
import {
  isUserLoggedIn,
  logout,
  isAdminUser,
  isDoctorUser,
} from "../services/AuthService";
import "./nav.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const URL = "http://localhost:3000";

  const isAuth = isUserLoggedIn();
  const isAdmin = isAdminUser();
  const isDoctor = isDoctorUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="Navbar">
      <Link className="navHeader" to="/">
        MEDSWISS
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

        {isAuth && isDoctor && !isAdmin && (
          <li className="navItem">
            <FaUserDoctor id="icons" className="icon" />
            <NavLink className="links" to="/doctor">
              Doctor
            </NavLink>
          </li>
        )}

        {isAuth && !isAdmin && !isDoctor && (
          <li className="navItem">
            <FaUserDoctor id="icons" className="icon" />
            <NavLink className="links" to="/patient">
              Patient
            </NavLink>
          </li>
        )}

        <li className="navItem">
          <FaInfoCircle id="icons" className="icon" />
          <NavLink className="links" to="/about">
            About us
          </NavLink>
        </li>
        <li className="navItem">
          <FaAddressBook id="icons" className="icon" />
          <NavLink className="links" to="/contact">
            Contact
          </NavLink>
        </li>
        {!isAuth ? (
          <>
            <li className="navItem">
              <FaUser id="icons" className="icon" />
              <NavLink className="links" to="/signup">
                SignUp
              </NavLink>
            </li>
            <li className="navItem">
              <FaRightToBracket id="icons" className="icon" />
              <NavLink className="links" to="/login">
                Login
              </NavLink>
            </li>
          </>
        ) : (
          <li className="navItem">
            <FaRightFromBracket id="icons" className="icon" />
            <NavLink className="links" to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
