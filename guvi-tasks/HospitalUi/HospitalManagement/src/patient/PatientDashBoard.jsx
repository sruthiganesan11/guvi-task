import React from "react";
import { useNavigate } from "react-router-dom";
import "./patientdashboard.css";
import doctor from "../assets/doc3.avif";
import appointment from "../assets/docApp1.jpeg";
import prescription from "../assets/viewpres1.jpeg";

const PatientDashBoard = () => {
  const navigate = useNavigate();
  //when Book Appointmnet button is clicked navugate to BookingNow component
  const bookNow = (e) => {
    e.preventDefault();
    navigate("/bookNow");
  };
  //when view Appointmnet button is clicked navigate to ViewAppointment component
  const handleViewAppointment = (e) => {
    e.preventDefault();
    navigate("/viewAppointment");
  };
  //when view Prescription button is clicked navigate to ViewPrescriptions component
  const handleViewPrescription = (e) => {
    e.preventDefault();
    navigate("/viewPrescription");
  };
  return (
    <section className="patientdasboardbg">
      <div className="patientdasboardwrapper">
        <br/>
        <div className="patientdasboardHeading">
          <h1 className="patientdasboardHeading">Patient Dashboard</h1>
          <p></p>
        </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img
                    src={doctor}
                    className="teams-img"
                    alt="pic"
                    id="find-doc"
                  />
                  <h3>Find Your Doctor Here.!!</h3>
                  <div className="team-info"></div>
                  <p>
                    "Consult world's best doctors at Medswiss Hospital and
                    improve your health and give the best gift to yourself."
                  </p>

                  <button
                    className="btn-patientDashboard"
                    id="btn-findDoctor"
                    onClick={(e) => bookNow(e)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img
                    src={appointment}
                    alt="pic"
                    className="teams-img"
                    id="doc-appointment"
                  />
                  <h3>View Appointment</h3>
                  <div className="team-info"></div>
                  <p>
                    "Exceptional Healthcare at Medswiss Hospital and Our doctors
                    care for your Health. View your Appointment details here.!!"
                  </p>
                  <button
                    className="btn-patientDashboard"
                    id="btn-viewApp"
                    onClick={(e) => handleViewAppointment(e)}
                  >
                    View Appointment
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img
                    src={prescription}
                    alt="pic"
                    className="teams-img"
                    id="doc-prescription"
                  />
                  <h3>View Prescription</h3>
                  <div className="team-info"></div>
                  <p>
                    "A physcian's guess at what will best prolong the situation
                    with least harm to the patient. View your prescrition here."
                  </p>
                  <button
                    className="btn-patientDashboard"
                    id="btn-viewPrescription"
                    onClick={(e) => handleViewPrescription(e)}
                  >
                    View Prescription
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PatientDashBoard;
