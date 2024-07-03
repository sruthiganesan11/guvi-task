import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  return (
    <section className="adminBg">
      <div>
        <br />
        <div className="container mt-4">
          <h2 className="text-center mb-4" id="adminheading">
            Welcome to the Admin Dashboard!
          </h2>
          <div className="row">
            <div className="col-md-6 mb-4 text-center">
              <Card>
                <Card.Body>
                  <Card.Title id="adminlist">Doctor's List</Card.Title>
                  <Card.Text id="adminpara">
                    View the list of Doctors.
                  </Card.Text>
                  <Link to="/listDoctor">
                    <Button className="btnAdmin">Go to Doctor's List</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <Card>
                <Card.Body>
                  <Card.Title id="adminlist">Patient's List</Card.Title>
                  <Card.Text id="adminpara">
                    View the list of Patient's.
                  </Card.Text>
                  <Link to="/listPatient">
                    <Button className="btnAdmin">Go to Patient List</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <Card className="cardcenter">
                <Card.Body>
                  <Card.Title id="adminlist">Add Doctors</Card.Title>
                  <Card.Text id="adminpara">
                    Add a new doctor to the system.
                  </Card.Text>
                  <Link to="/addDoctor">
                    <Button className="btnAdmin">Add Doctors</Button>
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
