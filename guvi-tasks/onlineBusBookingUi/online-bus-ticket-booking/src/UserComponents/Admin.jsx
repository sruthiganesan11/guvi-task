import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Services/AuthService";
import Swal from "sweetalert2";
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  //handle logout will take us to home page after clearing local storage and session storage
  const handleLogOut = () => {
    logout();
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "Thank you admin!!",
          icon: "success",
        });

        navigate("/");
      }
    });
  };
  return (
    <section className="adminBg">
      <div>
        <br/>
        <div className="container mt-4" >
          <h2 className="text-center mb-4" id="adminheading">
            Welcome to the Admin Dashboard!
          </h2>
          <div className="row">
            <div className="col-md-6 mb-4 text-center">
              <Card>
                <Card.Body>
                  <Card.Title id="adminbuslist">Bus List</Card.Title>
                  <Card.Text id="adminpara">View the list of buses.</Card.Text>
                  <Link to="/listBus">
                    <Button className="btnAdmin">Go to Bus List</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <Card>
                <Card.Body>
                  <Card.Title id="adminbuslist">Passenger List</Card.Title>
                  <Card.Text id="adminpara">
                    View the list of passengers.
                  </Card.Text>
                  <Link to="/listPassenger">
                    <Button className="btnAdmin">Go to User List</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <Card className="cardcenter">
                <Card.Body>
                  <Card.Title id="adminbuslist">Add Bus</Card.Title>
                  <Card.Text id="adminpara">
                    Add a new bus to the system.
                  </Card.Text>
                  <Link to="/addbuses">
                    <Button className="btnAdmin">Add Bus</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
