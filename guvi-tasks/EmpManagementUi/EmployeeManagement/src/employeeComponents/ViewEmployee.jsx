import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../service/EmpService";
import "./view.css"

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navBack = () => {
    navigate("/employee");
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const viewEmployees = async (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log(employee);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await getEmployee(id);
          const employee = response.data;
          setFirstName(employee.firstName);
          setLastName(employee.lastName);
          setEmail(employee.email);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="maincontainer">
      <div className="containerView">
        <div className="heading">
          <h1 className="heading1">Employee Details</h1>
        </div>
        <div className="main-content">
          <div className="employee-details">
            <h5>The employee id is : {id}</h5>
            <h5>
              The employee Name is : {firstName} {lastName}
            </h5>
            <h5>The employee Email is : {email}</h5>
          </div>

          <div className="btn">
            <button type="submit" id="btnHome" onClick={navBack}>
              Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
