import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { isUserLoggedIn, logout } from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const URL = "http://localhost:3000";

  const isAuth = isUserLoggedIn();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <nav>
        <Link className="title">Employee Management</Link>
        <a href={URL}></a>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      {!isAuth && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
         )}
         {!isAuth && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        )}
        {isAuth && (
        <li>
          <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
