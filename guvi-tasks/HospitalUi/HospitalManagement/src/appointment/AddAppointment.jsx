import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoctor } from "../services/DoctorService";
import { addAppointment } from "../services/AppointmentService";
import Select from "react-select";
import Swal from "sweetalert2";
import "./addapp.css";

const AddAppointment = () => {
  const { id } = useParams();
  const [doctorName, setDoctorname] = useState("");
  const [prescription1, setPrescription] = useState("");
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [contactNo, setContactNo] = useState();
  const [age, setAge] = useState();
  const [bookingDate, setDate] = useState("");
  const [fee, setfee] = useState(300);
  const [error, setError] = useState(false);

  const [cancelStatus, setCancelStatus] = useState(false);
  const navigate = useNavigate();
  //select option list
  const optionsFrom = [
    { value: "4-5 pm", label: "4-5 pm" },
    { value: "5-6 pm", label: "5-6 pm" },
    { value: "6-7 pm", label: "6-7 pm" },
  ];

  const [bookId] = useState(Math.random().toString(36).substr(2, 8));
  //useeffect to get doctor details while loading the page
  useEffect(() => {
    const fetchData = async () => {
      try {
        //console.log(id);
        const response = await getDoctor(id);
        const doctor = response.data;
        setDoctorname(doctor.doctorName);
        console.log(doctorName);
        console.log(prescription1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  //validation and api call made in handle add to add details to backend
  const handleAdd = async (e) => {
    e.preventDefault();
    if (patientName === "") {
      setError(true);
      console.log(error);
    } else if (!contactNo) {
      setError(true);
      console.log(error);
    } else if (email === "") {
      setError(true);
      console.log(error);
    } else if (problem === "") {
      setError(true);
      console.log(error);
    } else if (!age) {
      setError(true);
      console.log(error);
    } else if (!bookingDate) {
      setError(true);
      console.log(error);
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Appointment Booked Successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
      const appointmentId = "MM" + bookId;
      const prescription = prescription1.label;
      const patient = { patientName, email, problem, contactNo, age };
      const book = {
        appointmentId,
        doctorName,
        prescription,
        patient,
        bookingDate,
        fee,
        cancelStatus,
      };
      console.log(book);
      const res = await addAppointment(book);
      console.log(res);
      setPatientName("");
      setEmail("");
      setDate("");
      setProblem("");
      setContactNo(0);
      setAge(0);
      navigate("/patient");
    }
  };

  const dropdownStyles = {
    control: (provided) => ({
      ...provided,
      width: "450px",
      background: "transparent",
      borderRadius: "40px",
      border: "2px solid black",
      // Set your desired width here
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: "black",
      fontSize: "1.5rem",
    }),

    singleValue: (provided) => ({
      ...provided,
      fontSize: "1.5rem", // Set your desired font size here
    }),
    dropdownIndicator: () => ({
      color: "black",
      fontSize: "2rem",
      fontWeight: "bold",
      paddingLeft: "7px",
      paddingRight: "7px",
    }),

    option: () => ({
      color: "black",
      fontSize: "1.3rem",
      fontWeight: "800",
    }),
  };
  return (
    <section className="addappbg">
      <br />
      <div className="addappwrapper">
        <h2 className="addappheading">
          Kindly fill in the details to proceed!!
        </h2>
        <div className="addappContainer">
          <form>
            <div>
              <label className="addappLabel">Patient Name</label>
              <div className="addappinput">
                <input
                  type="text"
                  placeholder="Enter the patient Name"
                  error={!!error}
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">Patient Name field cannot be null</p>
              )}

              <label className="addappLabel">Email</label>
              <div className="addappinput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter the patient email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">Email field cannot be null</p>
              )}
              <label htmlFor="location_from" className="addappLabel ll">
                Select your slots:
              </label>
              <div className="addappinput">
                <Select
                   value={prescription1}
                   onChange={setPrescription}
                   options={optionsFrom}
                  placeholder="Select the appointment time"
                  styles={dropdownStyles}
                />
              </div>

              <label className="addappLabel">Date of appointment</label>
              <div className="addappinput">
                <input
                  type="date"
                  placeholder="Enter the date "
                  error={!!error}
                  value={bookingDate}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">
                  Appointment date field cannot be null
                </p>
              )}
              <label className="addappLabel">Problem</label>
              <div className="addappinput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter your illness"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">Problem field cannot be null</p>
              )}
              <label className="addappLabel">Contact Number</label>
              <div className="addappinput">
                <input
                  type="text"
                  placeholder="Enter the contact no"
                  error={!!error}
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">Contact No field cannot be null</p>
              )}
              <label className="addappLabel">Age</label>
              <div className="addappinput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter the age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">Age field cannot be null</p>
              )}

              <div className="text-center">
                <button onClick={(e) => handleAdd(e)}>Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddAppointment;
