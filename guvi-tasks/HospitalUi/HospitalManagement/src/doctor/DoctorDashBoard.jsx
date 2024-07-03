import React from "react";
import { useNavigate } from "react-router-dom";
import "./docDash.css";

const DoctorDashBoard = () => {
  const navigate = useNavigate();
  //when "Go to Patients List to add prescription" button is clicked navigate to PatientDoctorList component
  const handleViewPatient = (e) => {
    e.preventDefault();
    navigate("/listDoctorPatient");
  };
  //when "  Go to Patients List to cancel appointments" button is clicked navigate to ViewAppointment component
  const handleCancelPatient = (e) => {
    e.preventDefault();
    navigate("/viewAppointment");
  };
  return (
    <section className="docDashBoardbg">
      <div className="docDashBoardwrapper">
        <div class="row">
          <div class="docDashBoardHeading">
            <h2 className="">
              Wear the white coat with dignity and pride, it is an honour and
              privilege to get to serve the public as a physician
            </h2>
          </div>
        </div>
        <div>
          <button
            className="btn-docPatientList"
            id="add-prescription"
            onClick={(e) => handleViewPatient(e)}
          >
            Go to Patients List to add prescription
          </button>
          <button
            className="btn-docPatientList"
            id="cancel-appointment"
            onClick={(e) => handleCancelPatient(e)}
          >
            Go to Patients List to cancel appointments
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorDashBoard;
