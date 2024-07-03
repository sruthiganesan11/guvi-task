import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAppointment } from "../services/AppointmentService";
import { addMedicines } from "../services/MedicationService";
import './addPrescription.css'
const AddPrescription = () => {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [medicineName, setMedicine] = useState("");
  const [morning, setMorning] = useState();
  const [afternoon, setAfternoon] = useState();
  const [night, setNight] = useState();
  const [count, setcount] = useState(1);
  const { id } = useParams();

  //useEffect to get appointmnet by id
  useEffect(() => {
    getAppointments();
  });
  const getAppointments = async () => {
    try {
      const response = await getAppointment(id);
      const appointment = response.data;
      setPatientName(appointment.patient.patientName);
      setAppointmentDate(appointment.bookingDate);
    } catch (error) {
      console.error(error);
    }
  };
  //will add the medicine list to medication entity DB
  const addMedicine = async (e) => {
    e.preventDefault();
    const medicines1 = {
      patientName,
      appointmentDate,
      medicineName,
      morning,
      afternoon,
      night,
    };
    await addMedicines(medicines1); //API call to make put API call to spring boot
    setcount(count + 1);
    setMedicine("");
    setAfternoon("");
    setMorning("");
    setNight("");
  };
  const finish = async (e) => {
    e.preventDefault();
    navigate("/listDoctorPatient");
  };
  return (
    <section className="prescriptionbg">
      <div className="prescriptionwrapper">
        <div className="prescriptionHeading">
          <h2>Add Medicines</h2>
        </div>
        <div className="prescriptionContainer">
          <form>
            <div>
              <label className="prescriptionlabel">Patient Name</label>
              <div className="prescription-input">
                <input
                  type="text"
                  placeholder="Enter the Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>

              <label className="prescriptionlabel">Appointment Date</label>
              <div className="prescription-input">
                <input
                  type="date"
                  placeholder="Enter the Appointment date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>

              <label className="prescriptionlabel">Medicine {count} Name</label>
              <div className="prescription-input">
                <input
                  type="text"
                  placeholder="Enter the medicine"
                  value={medicineName}
                  onChange={(e) => setMedicine(e.target.value)}
                />
              </div>

              <label className="prescriptionlabel">Morning Dose</label>
              <div className="prescription-input">
                <input
                  type="text"
                  placeholder="Enter the number of tablets to be taken"
                  value={morning}
                  onChange={(e) => setMorning(e.target.value)}
                />
              </div>

              <label className="prescriptionlabel">Afternoon Dose</label>
              <div className="prescription-input">
                <input
                  type="text"
                  placeholder="Enter the number of tablets to be taken"
                  value={afternoon}
                  onChange={(e) => setAfternoon(e.target.value)}
                />
              </div>

              <label className="prescriptionlabel">Evening Dose</label>
              <div className="prescription-input">
                <input
                  type="text"
                  placeholder="Enter the number of tablets to be taken"
                  value={night}
                  onChange={(e) => setNight(e.target.value)}
                />
              </div>

              <div>
                <button onClick={(e) => addMedicine(e)} id="btn-add">Add</button>
                <button onClick={(e) => finish(e)} id="btn-finish">Finish</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPrescription;
