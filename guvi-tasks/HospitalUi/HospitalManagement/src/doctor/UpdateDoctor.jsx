import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoctor, updateDoctor } from "../services/DoctorService";
import Swal from "sweetalert2";
import "./updateDoc.css";

const UpdateDoctor = () => {
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState();
  const [age, setAge] = useState();
  const [contactNo, setContact] = useState();
  const { id } = useParams();
  //make update api call to update doctor to Db
  const updateDoc = async (e) => {
    e.preventDefault();
    const doc = {
      doctorName,
      specialist,
      experience,
      age,
      qualification,
      contactNo,
    };
    await updateDoctor(id, doc); //API call to make put API call to spring boot
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
        const response = await getDoctor(id);
        const doc = response.data;
        console.log(doc);
        setDoctorName(doc.doctorName);
        setSpecialist(doc.specialist);
        setQualification(doc.qualification);
        setExperience(doc.experience);
        setAge(doc.age);
        setContact(doc.contactNo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section className="updatedocbg">
      <div className="updatedocwrapper">
        <div className="updatedocHeading">
          <h2>Update Doctor</h2>
        </div>
        <form>
          <div>
            <label className="updatedoclabel">Doctor Name</label>
            <div className="updatedocinput">
              <input
                type="text"
                placeholder="Enter the Doctor Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </div>

            <label className="updatedoclabel">Specialist</label>
            <div className="updatedocinput">
              <input
                type="text"
                placeholder="Enter the Specialized stream"
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
              />
            </div>

            <label className="updatedoclabel">Qualification</label>
            <div className="updatedocinput">
              <input
                type="text"
                placeholder="Enter the qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>

            <label className="updatedoclabel">Experience</label>
            <div className="updatedocinput">
              <input
                type="text"
                placeholder="Enter the experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            <label className="updatedoclabel">Age</label>
            <div className="updatedocinput">
              <input
                type="text"
                placeholder="Enter the age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <label className="updatedoclabel">Contact No</label>
            <div className="updatedocinput">
              <input
                type="text"
                placeholder="Enter the Contact number"
                value={contactNo}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div>
              <button onClick={(e) => updateDoc(e)}>Update</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateDoctor;
