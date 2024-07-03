import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoctor } from "../services/DoctorService";
import Swal from "sweetalert2";
import './adddoc.css'

const AddDoctor = () => {
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState();
  const [age, setAge] = useState();
  const [contactNo, setContact] = useState();
  const [error, setError] = useState(false);
  //validation of forms and api call to add doctor details is done in adddoc funtion when add button is clicked
  const addDoc = async (e) => {
    e.preventDefault();
    const doc = {
      doctorName,
      specialist,
      experience,
      age,
      qualification,
      contactNo,
    };
    if (doctorName === "") {
      setError(true);
      console.log(error);
    } else if (specialist === "") {
      setError(true);
      console.log(error);
    } else if (qualification === "") {
      setError(true);
      console.log(error);
    } else if (!experience) {
      setError(true);
      console.log(error);
    } else if (!contactNo) {
      setError(true);
      console.log(error);
    } else if (!age) {
      setError(true);
      console.log(error);
    } else {
      await addDoctor(doc); //API call to make post API call to spring boot
      navigate("/admin");
      let timerInterval;
      Swal.fire({
        title: "Addedd Successfully",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  };
  return (
    <section className="addDoctorbg">
      <div className="addDoctorwrapper">
        <div className="addDoctorHeading">
          <h2>Add Doctor</h2>
        </div>
        <div className="addDoctorContainer">
          <form>
            <div>
              <label className="addDocLabel">Doctor Name</label>
              <div className="addDocInput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter the Doctor Name"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">Doctor Name field cannot be null</p>
              )}

              <label className="addDocLabel">Specialist</label>
              <div className="addDocInput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter the Specialized stream"
                  value={specialist}
                  onChange={(e) => setSpecialist(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">This field cannot be null</p>
              )}
              <label className="addDocLabel">Qualification</label>
              <div className="addDocInput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter the qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">
                  Qualification field cannot be null
                </p>
              )}
              <label className="addDocLabel">Experience</label>
              <div className="addDocInput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter the experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">Experience field cannot be null</p>
              )}
              <label className="addDocLabel">Age</label>
              <div className="addDocInput">
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
              <label className="addDocLabel">Contact No</label>
              <div className="addDocInput">
                <input
                  type="text"
                  error={!!error}
                  placeholder="Enter the Contact number"
                  value={contactNo}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              {!!error && (
                <p className="text-danger">
                  Contact number field cannot be null
                </p>
              )}
              <div className="text-center">
                <button onClick={(e) => addDoc(e)}>Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
