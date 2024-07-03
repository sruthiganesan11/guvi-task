import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMedicineByName } from "../services/MedicationService";
import "./prescriptionlist.css";

const PrescriptionList = () => {
  //React Hook
  const { patientName } = useParams();
  const [patientPrescription, setPatientPrescription] = useState([]);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  //useEffect will get the medication list based on patient name
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(patientName);
        const response = await getMedicineByName(patientName);
        console.log(response.data);

        setPatientPrescription(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [patientName]);
  const handleHome = (e) => {
    e.preventDefault();
    navigate("/patient");
  };
  return (
    <section className="prescriptionlistbg">
      <div className="prescriptionlistwrapper">
        <div className="prescriptionlistHeading">
          <h2>Prescription</h2>
        </div>

        <div className="prescriptionlistContainer">
          <h4 className="patientName">Hello {patientName}!!</h4>

          <table
            className="table table-bordered table-striped"
            style={{
              width: "90%",
              marginLeft: "50px",
              border: "1px solid black",
            }}
          >
            <thead>
              <tr>
                <th className="text-center">Appointment Date</th>
                <th className="text-center">Medicine Name</th>
                <th className="text-center">Morning(no of tablets)</th>
                <th className="text-center">Afternoon(no of tablets)</th>
                <th className="text-center">Night(no of tablets)</th>
              </tr>
            </thead>

            <tbody>
              {patientPrescription.map((res1) => (
                <tr key={res1.id}>
                  <td className="text-center">{res1.appointmentDate}</td>
                  <td className="text-center">{res1.medicineName}</td>
                  <td className="text-center">{res1.morning}</td>
                  <td className="text-center">{res1.afternoon}</td>
                  <td className="text-center">{res1.night}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button
            className="btn-prescriptionList"
            id="btn-update"
            onClick={(e) => handleHome(e)}
          >
            Back to home page
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrescriptionList;
