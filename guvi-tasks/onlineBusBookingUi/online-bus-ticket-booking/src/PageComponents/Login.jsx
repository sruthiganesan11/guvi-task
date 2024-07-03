import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../Services/AuthService";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPICall(username, password); //API CALL TO LOGIN
      const token = "Bearer " + response.data.accessToken; // add token to header for all other API call
      const role = response.data.role;
      storeToken(token);
      saveLoggedInUser(username, role);
      console.log(role);
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else {
        navigate("/destination");
      }
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="loginbackground">
      <br />
      <div className="wrapper">
        <div className="loginHeading">
          <h2>Login form</h2>
        </div>
        <div className="loginContainer">
          <form>
            <div>
              <label className="loginlabel">UserName</label>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <FaUser className="loginicon" />
              </div>
            </div>
            <div>
              <label className="loginlabel">Password</label>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FaLock className="loginicon" />
              </div>
            </div>
            <div className="remember-forget">
              <label className="remember">
                <input type="checkbox" />
                Remember me?
              </label>

              <a href="#" className="remember">
                Forget password?
              </a>
            </div>
            <div>
              <button type="submit" onClick={(e) => handleLoginForm(e)}>
                Submit
              </button>
            </div>
            <div className="register-link">
              <p className="account">
                Don't have an account?
                <a href="/signup"> Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
