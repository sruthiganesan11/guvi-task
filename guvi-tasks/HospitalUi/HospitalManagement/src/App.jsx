import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./navComponent/Navbar";
import Footer from "./footerComponent/Footer";
import About from "./pageComponent/About";
import Home from "./pageComponent/Home";
import Login from "./pageComponent/Login";
import SignUp from "./pageComponent/SignUp";
import Contact from "./pageComponent/Contact";
import Admin from "./userComponent/Admin";
import AddDoctor from "./doctor/AddDoctor";
import DoctorList from "./doctor/DoctorList";
import DoctorDashBoard from "./doctor/DoctorDashBoard";
import UpdateDoctor from "./doctor/UpdateDoctor";
import PatientList from "./patient/PatientList";
import UpdatePatient from "./patient/UpdatePatient";
import PrescriptionList from "./prescription/PrescriptionList";
import AddPrescription from "./prescription/AddPrescription";
import ViewPrescription from "./prescription/ViewPrescription";
import BookDoctor from "./doctor/BookDoctor";
import ViewAppointment from "./appointment/ViewAppointment";
import AddAppointment from "./appointment/AddAppointment";
import AppointmentBooking from "./appointment/AppointmentBooking";
import PatientDashBoard from "./patient/PatientDashBoard";
import PatientDoctorList from "./component/PatientDoctorList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addAppointment/:id" element={<AddAppointment />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
          <Route path="/listDoctor" element={<DoctorList />} />
          <Route path="/doctor" element={<DoctorDashBoard />} />
          <Route path="/update-doctor/:id" element={<UpdateDoctor />} />
          <Route path="/booknow" element={<BookDoctor />} />
          <Route path="/listPatient" element={<PatientList />} />
          <Route path="/update-patient/:id" element={<UpdatePatient />} />
          <Route
            path="/prescriptionList/:patientName"
            element={<PrescriptionList />}
          />
          <Route path="/addPrescription/:id" element={<AddPrescription />} />
          <Route path="/viewPrescription" element={<ViewPrescription />} />
          <Route path="/viewAppointment" element={<ViewAppointment />} />
          <Route path="/bookNow" element={<AppointmentBooking />} />
          <Route path="/patient" element={<PatientDashBoard />} />
          <Route path="/listDoctorPatient" element={<PatientDoctorList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
