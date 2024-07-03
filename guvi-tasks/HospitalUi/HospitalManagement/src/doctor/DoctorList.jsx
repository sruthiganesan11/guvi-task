import React, { useEffect, useState } from "react";
import { deleteDoctor, getAllDoctors } from "../services/DoctorService";
import { useNavigate } from "react-router-dom";
import "./docList.css";

const DoctorList = () => {
  //react hook
  const [doctors, setDoctor] = useState([]);
  const navigate = useNavigate();
  //useEffect to get list of doctors while loading the page
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
  //when update button is called this will navigate to UpdateDoctor component
  const handleUpdate = (id) => {
    navigate(`/update-doctor/${id}`);
  };
  //delete the doctor from list
  const handleDelete = async (id) => {
    try {
      const response = await deleteDoctor(id);
      window.location.reload(false);
      navigate("/listDoctor");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="doctorListbg">
      <div className="docListwrapper">
        <div className="docListHeading">
          <h2>Doctor's List</h2>
        </div>
        <div className="docListContainer">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Doctor Id</th>
                <th className="text-center">Doctor Name</th>
                <th className="text-center">Specialist</th>
                <th className="text-center">Qualification</th>
                <th className="text-center">Experience</th>
                <th className="text-center">Age</th>
                <th className="text-center">Contact Number</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="text-center">{doctor.id}</td>
                  <td className="text-center">{doctor.doctorName}</td>
                  <td className="text-center">{doctor.specialist}</td>
                  <td className="text-center">{doctor.qualification}</td>
                  <td className="text-center">{doctor.experience}</td>
                  <td className="text-center">{doctor.age}</td>
                  <td className="text-center">{doctor.contactNo}</td>

                  <td>
                    <button
                      className="btn-docList"
                      style={{ background: "#157dec" , marginLeft: "30px"}}
                      onClick={() => handleUpdate(doctor.id)}
                    >
                      Update
                    </button>

                    <button
                      className="btn-docList"
                      id="btn-delete"
                      onClick={() => handleDelete(doctor.id)}
                    >
                      Delete
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

export default DoctorList;
