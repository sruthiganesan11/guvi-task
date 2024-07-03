import React, { useEffect, useState } from "react";
import {
  cancelAppointment,
  getAllAppointments,
} from "../services/AppointmentService";
import Swal from "sweetalert2";
import "./viewApp.css";

const ViewAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [cancelStatus, setCancelStat] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    listAppointments();
  }, []);
  const listAppointments = async () => {
    try {
      const response = await getAllAppointments();
      console.log(response.data);
      setAppointment(response.data);
      console.log(appointment.patient.patientName);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async (id) => {
    Swal.fire("Appointment Cancelled");
    try {
      const response = await cancelAppointment(id); //API call to update cancel status to true
      console.log(response.data);
      console.log(response.data.id);
      setCancelStat(response.data.cancelStatus);
      listAppointments();
      // setPassengerid(response.data.id);
      console.log(response.data.cancelStatus);
    } catch (error) {
      console.log(error);
    }
    const handleClick = () => {
      // Update the state to disable the button
      setIsButtonDisabled(true);
      // Additional logic or actions can be performed here
    };
  };
  return (
    <section className="viewAppbg">
      <div className="viewAppwrapper">
        <div className="viewAppHeading">
          <h2>View and Cancel appointments</h2>
        </div>

        <div className="viewAppContainer">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Patient Name</th>
                <th className="text-center">Doctor Name</th>
                <th className="text-center">Illness</th>
                <th className="text-center">Age</th>
                <th className="text-center">Contact Number</th>
                <th className="text-center">Timing</th>
                <th className="text-center">Appoinment Date</th>
                <th className="text-center">Fee</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointment.map((app) => (
                <tr key={app.id}>
                  <td className="text-center">{app.patient.patientName}</td>
                  <td className="text-center">{app.doctorName}</td>
                  <td className="text-center">{app.patient.problem}</td>
                  <td className="text-center">{app.patient.age}</td>
                  <td className="text-center">{app.patient.contactNo}</td>
                  <td className="text-center">{app.prescription}</td>
                  <td className="text-center">{app.bookingDate}</td>
                  <td className="text-center">{app.fee}</td>
                  <td className="text-center">
                    {app.cancelStatus
                      ? "Appointmnet Status:Cancelled"
                      : "Appointment Status:Confirmed"}
                  </td>
                  <td>
                    <button
                      className="btn-viewApp"
                      id="btn-cancel"
                      onClick={() => handleUpdate(app.id)}
                      disabled={isButtonDisabled}
                    >
                      CancelAppointment
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

export default ViewAppointment;
