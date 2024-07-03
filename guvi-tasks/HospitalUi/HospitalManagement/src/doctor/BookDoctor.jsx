import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDoctors } from "../services/DoctorService";
import "./booknow.css";

const BookDoctor = () => {
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
      setDoctor(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="booknowbg">
      <div className="booknowWrapper">
      <div className="booknowcontainer">
        <h2 className="booknowHeading">Find your Doctor here!!</h2>
        {doctors.map((doctor) => (
          <div className="booknow-contents">
            <div className="booknow-name">
              <h4>Dr.{doctor.doctorName}</h4>
            </div>
            <div className="booknow-content">
              <h5 className="booknow-specialist">{doctor.specialist}</h5>
              <h6 className="booknow-qualification">{doctor.qualification}</h6>
              <p className="booknow-experience">Experience:{doctor.experience} years</p>
              <button
                className="btn-bookNow"
                id="btn-book"
                onClick={() => handleBookNow(doctor.id)}
              >
                Book Appointment!!
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default BookDoctor;
