import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletePatient, getAllPatients } from "../services/PatientService";
import "./patientList.css";

const PatientList = () => {
  const [patients, setPatient] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    listPatient();
  }, []);
  const listPatient = async () => {
    try {
      const response = await getAllPatients();
      console.log(response.data);
      setPatient(response.data);
      console.log(patients);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = (id) => {
    navigate(`/update-patient/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await deletePatient(id);
      window.location.reload(false);
      navigate("/listPatient");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="patientlistbg">
      <div className="patientListwrapper">
        <div className="patientListHeading">
          <h2>Patient's List</h2>
        </div>
        <div className="patientListContainer">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Patient Id</th>
                <th className="text-center">Patient Name</th>
                <th className="text-center">Contact number</th>
                <th className="text-center">Email</th>
                <th className="text-center">Age</th>
                <th className="text-center">Problem</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="text-center">{patient.id}</td>
                  <td className="text-center">{patient.patientName}</td>
                  <td className="text-center">{patient.contactNo}</td>
                  <td className="text-center">{patient.email}</td>
                  <td className="text-center">{patient.age}</td>
                  <td className="text-center">{patient.problem}</td>

                  <td>
                    <button
                      className="btn-patientList"
                      id="patientlistbtn-update"
                      onClick={() => handleUpdate(patient.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PatientList;
