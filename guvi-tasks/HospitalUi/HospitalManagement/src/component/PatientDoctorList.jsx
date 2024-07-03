import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAppointments } from "../services/AppointmentService";
import "./listdocPat.css";

const PatientDoctorList = () => {
  const [patients, setPatient] = useState([]);
  const navigate = useNavigate();
  //useEffect to get all appointment when page loads
  useEffect(() => {
    listDoctor();
  }, []);
  const listDoctor = async () => {
    try {
      const response = await getAllAppointments();
      console.log(response.data);
      setPatient(response.data);
      console.log(patients);
    } catch (error) {
      console.error(error);
    }
  };
  //when addprescription button is clicked will navigate to PrescriptionAdd component
  const handlePrescription = (id) => {
    navigate(`/addPrescription/${id}`);
  };
  return (
    <section className="listDocPatbg">
      <div className="listDocPatwrapper">
        <h2 className="listDocPatHeading">Patient's List</h2>
        <div>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Patient Id</th>
                <th className="text-center">Patient Name</th>
                <th className="text-center">Doctor Name</th>
                <th className="text-center">Appointment Date</th>
                <th className="text-center">Appointment Time</th>
                <th className="text-center">Email</th>
                <th className="text-center">Problem</th>
                <th className="text-center">Contact number</th>
                <th className="text-center">Age</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td className="text-center">{patient.patient.id}</td>
                  <td className="text-center">{patient.patient.patientName}</td>
                  <td className="text-center">{patient.doctorName}</td>
                  <td className="text-center">{patient.bookingDate}</td>
                  <td className="text-center">{patient.prescription}</td>
                  <td className="text-center">{patient.patient.email}</td>
                  <td className="text-center">{patient.patient.problem}</td>
                  <td className="text-center">{patient.patient.contactNo}</td>
                  <td className="text-center">{patient.patient.age}</td>

                  <td>
                    {patient.cancelStatus && (
                      <p className="text-center">Appointment cancelled</p>
                    )}
                    {!patient.cancelStatus && (
                      <button
                        className="listDocPat-btn-cancel"
                        id="listDocPat-btn-Cancel"
                        onClick={() => handlePrescription(patient.patient.id)}
                      >
                        AddPrescription
                      </button>
                    )}
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

export default PatientDoctorList;
