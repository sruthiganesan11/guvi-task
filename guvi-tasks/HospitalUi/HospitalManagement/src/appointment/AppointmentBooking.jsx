import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDoctors } from "../services/DoctorService";

const AppointmentBooking = () => {
  const [doctors, setDoctor] = useState([]);
  const navigate = useNavigate();
  //when Book appointment button is clicked calls booknow function
  const handleBookNow = (id) => {
    navigate(`/addAppointment/${id}`);
  };
  //useEffect to load all the doctors list to display
  useEffect(() => {
    listDoctor();
  }, []);
  const listDoctor = async () => {
    try {
      const response = await getAllDoctors();
      // console.log(response.data);
      setDoctor(response.data);
      //console.log(doctors);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="container text-center">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className="text-center text-secondary" style={{ padding: "2rem" }}>
          Find your Doctor here!!
        </h2>
        {doctors.map((doctor) => (
          <div
            className="card text-center border-danger mb-5 ml-5"
            style={{ width: "60rem" }}
          >
            <div className="card-header">
              <h4 className="text-secondary">Dr.{doctor.doctorName}</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title">{doctor.specialist}</h5>
              <h6 class="card-text">{doctor.qualification}</h6>
              <p>Experience:{doctor.experience} years</p>
              <a
                href="#"
                class="btn btn-danger"
                onClick={() => handleBookNow(doctor.id)}
              >
                Book Appointment!!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentBooking;
