import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAPICall } from "../services/AuthService";
import Swal from "sweetalert2";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  //check for validation and make post API call to add user to user database
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (name === "") {
        setError(true);
      } else if (username === "") {
        setError(true);
      } else if (email === "") {
        setError(true);
      } else if (password === "") {
        setError(true);
      } else {
        const register = { name, username, email, password };
        const response = await registerAPICall(register); //APICALL made to add user
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registered Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="signUpbg">
      <div className="signinwrappers">
        <div className="signinHeading">
          <h2>Registration</h2>
        </div>
        <div className="signinContainer">
          <form>
            <div>
              <label className="signuplabel">Name</label>
              <div className="signup-input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={name}
                  error={!!error}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">Name field cannot be null</p>
                )}
                <FaUser className="signupicon" />
              </div>
            </div>
            <div>
              <label className="signuplabel">Username</label>

              <div className="signup-input-box">
                <input
                  type="text"
                  name="username"
                  error={!!error}
                  placeholder="Enter your UserName"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">User Name field cannot be null</p>
                )}
                <FaUser className="signupicon" />
              </div>
            </div>
            <div>
              <label className="signuplabel">Email</label>
              <div className="signup-input-box">
                <input
                  type="email"
                  name="email"
                  error={!!error}
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">Email field cannot be null</p>
                )}
                <FaEnvelope className="signupicon" />
              </div>
            </div>
            <div>
              <label className="signuplabel">Password</label>

              <div className="signup-input-box">
                <input
                  type="password"
                  name="password"
                  error={!!error}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {!!error && <p>Password field cannot be null</p>}
                <FaLock className="signupicon" />
              </div>
            </div>
            <div>
              <button onClick={(e) => handleRegister(e)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
