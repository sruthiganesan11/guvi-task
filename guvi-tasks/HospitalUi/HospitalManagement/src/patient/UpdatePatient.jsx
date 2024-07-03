import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatient, updatePatient } from "../services/PatientService";
import Swal from "sweetalert2";
import './updatepatient.css'

const UpdatePatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [contactNo, setContactNo] = useState();
  const [age, setAge] = useState();
  //To make update api call to update patient list to backend
  const updatePatients = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const patient = {
      patientName,
      email,
      problem,
      age,
      contactNo,
    };

    console.log(patient);
    await updatePatient(id, patient); //API call to make put API call to spring boot
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Updated Successfully!!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/admin");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPatient(id);
        const patient = response.data;
        console.log(patient);
        console.log(id);
        setPatientName(patient.patientName);
        setEmail(patient.email);
        setAge(patient.age);
        setProblem(patient.problem);
        setContactNo(patient.contactNo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section className="updatepatientbg">
      <div className="updatePatientwrapper">
        <div className="updatePatientHeading">
          <h2>Update Patient</h2>
        </div>
        <form>
          <div>
            <label className="updatePatientlabel">Patient Name</label>
            <div className="input-updatepatient">
              <input
                type="text"
                placeholder="Enter the Patient Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>

            <label className="updatePatientlabel">Email</label>
            <div className="input-updatepatient">
              <input
                type="text"
                placeholder="Enter the email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label className="updatePatientlabel">Problem</label>
            <div className="input-updatepatient">
              <input
                type="text"
                placeholder="Enter the problem"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </div>

            <label className="updatePatientlabel">Contact Number</label>
            <div className="input-updatepatient">
              <input
                type="text"
                placeholder="Enter the experience"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>

            <label className="updatePatientlabel">Age</label>
            <div className="input-updatepatient">
              <input
                type="text"
                placeholder="Enter the age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <button onClick={(e) => updatePatients(e)}>Update</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatePatient;
