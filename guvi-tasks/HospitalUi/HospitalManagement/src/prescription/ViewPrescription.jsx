import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './viewPres.css'

const ViewPrescription = () => {
  const [patientName, setPatientName] = useState("");
  const navigate = useNavigate();
  const [prescription, setPrescription] = useState(false);
  const [patientPrescription, setPatientPrescription] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`/prescriptionList/${patientName}`);
  };
  return (
    <section className="viewPrescriptionbg">
      <div className="viewPrescriptionwrapper">
        <div className="viewPrescriptionHeading">
          <h2>Prescription!!</h2>
        </div>
        <div className="viewPrescriptionContainer">
          <Form>
            <div>
              <label htmlFor="name" className="viewprescriptionlabel ">
                Enter Patient's name
              </label>
              <div className="viewPrescription-input">
                <input
                  type="text"
                  name="name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>

              <label htmlFor="name" className="viewprescriptionlabel ">
                Enter Appointment Date
              </label>
              <div className="viewPrescription-input">
                <input type="date" name="name" />
              </div>
            </div>
            <div>
              <button type="button" onClick={(e) => handleSearch(e)}>
                Search
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ViewPrescription;
