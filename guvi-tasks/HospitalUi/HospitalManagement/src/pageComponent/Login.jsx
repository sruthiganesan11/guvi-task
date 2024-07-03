import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../services/AuthService";
import Swal from "sweetalert2";
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
      }
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else if (role === "ROLE_DOCTOR") {
        navigate("/doctor");
      } else {
        navigate("/patient");
      }

      window.location.reload(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logged in Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="loginbg">
      <br />
      <div className="loginwrapper">
        <div className="loginHeading">
          <h2>Login</h2>
        </div>
        <div className="loginContainer">
          <form>
            <div>
              <label className="loginlabel">UserName</label>
              <div className="login-input-box">
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
              <div className="login-input-box">
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
