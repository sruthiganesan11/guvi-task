import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../Services/AuthService";
import { useState } from "react";
import { modifyPassword } from "../Services/Changepass";
import Swal from "sweetalert2";
import './password.css'

const PasswordChange = () => {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const loggesUser = getLoggedInUser();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setUsername(loggesUser);
    console.log(username);
  });

  const resetPassword = async (e) => {
    e.preventDefault();
    const user = {
      username,
      oldPassword,
      newPassword,
    };
    if (oldPassword === "") {
      setError(true);
    } else if (newPassword === "") {
      setError(true);
    } else {
      await modifyPassword(user); //API call to update user password into user table
      Swal.fire("Password Updated Successfully!!!");
      navigate("/destination");
    }
  };
  return (
    <section className="passwordbg">
      <br />
      <div className="passwordwrappers">
        <div className="passwordHeading">
          <h2>Update Password</h2>
        </div>
        <div className="signinContainer">
          <form>
            <div>
              <label className="passwordlabel">User name</label>
              <div className="passwordinputBox">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={username}
                  error={!!error}
                  required
                ></input>
                {!!error && (
                  <p className="text-danger">User name field cannot be null</p>
                )}
              </div>
            </div>
            <div>
              <label className="passwordlabel">Enter Old Password</label>

              <div className="passwordinputBox">
                <input
                  type="password"
                  name="password"
                  error={!!error}
                  placeholder="Enter old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                ></input>
                {!!error && (
                  <p className="text-danger">Passord cannot be null</p>
                )}
              </div>
            </div>
            <div>
              <label className="passwordlabel">Enter New-Password</label>
              <div className="passwordinputBox">
                <input
                  type="password"
                  name="password"
                  error={!!error}
                  placeholder="Enter new Confirm Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                ></input>
                {!!error && (
                  <p className="text-danger">Password cannot be null</p>
                )}
              </div>
            </div>

            <button onClick={(e) => resetPassword(e)}>Update Password</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PasswordChange;
