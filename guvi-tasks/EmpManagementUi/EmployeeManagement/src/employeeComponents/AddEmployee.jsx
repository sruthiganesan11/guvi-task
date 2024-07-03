import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { addEmployee } from "../service/EmpService";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    console.log(employee);

    try {
      const response = await addEmployee(employee);
      console.log(response);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Employee has been Saved",
        showConfirmButton: "false",
        timer: 3000,
      });
      navigate("/employee");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="containerAdd">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => saveEmployee(e)}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
