import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerAPICall } from "../service/AuthService";

const Register = () => {
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
      const register = { name, username, email, password };
      const response = await registerAPICall(register);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Register SuccessFully",
        showConfirmButton: "false",
        timer: 3000,
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="background">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Registration form</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <label className="col-md-3 control-label">Name</label>

                    <div className="col-md-9">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your Name"
                        value={name}
                        error={!!error}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">Name field cannot be null</p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3 control-label">UserName</label>

                    <div className="col-md-9">
                      <input
                        type="text"
                        name="username"
                        error={!!error}
                        className="form-control"
                        placeholder="Enter your UserName"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">
                          User Name field cannot be null
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3 control-label">Email</label>

                    <div className="col-md-9">
                      <input
                        type="email"
                        name="email"
                        error={!!error}
                        className="form-control"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">
                          Email field cannot be null
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-3 control-label">Password</label>

                    <div className="col-md-9">
                      <input
                        type="password"
                        name="password"
                        error={!!error}
                        className="form-control"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">
                          Password field cannot be null
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="form-group mb-3 text-center">
                    <button
                      className="btn btn-outline-warning"
                      onClick={(e) => handleRegister(e)}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
