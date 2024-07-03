import React from "react";
import "./footer.css";
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>MEDSWISS</h1>
          <p>Our passion is to heal.</p>
        </div>
        <div>
          <a href="/">
            <FaYoutube className="icon" id="youtube"/>
          </a>
          <a href="/">
            <FaTwitter className="icon" id="twitter"/>
          </a>
          <a href="/">
            <FaInstagram className="icon" id="instagram"/>
          </a>
          <a href="/">
            <FaLinkedin className="icon" id="linkedin"/>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>About MEDSWISS</h4>
          <a href="/">About us</a>
          <a href="/">Contact us</a>
          <a href="/">Mobile version</a>
          <a href="/">Overview</a>
          <a href="/">Our Management Team</a>
          <a href="/">Awards</a>
          <a href="/">Careers</a>
          <a href="/">International Patients</a>
          <a href="/">News & events</a>
          <a href="/">BWM Data</a>
          <a href="/">Investors</a>
          <a href="/">Values</a>
        </div>
        <div>
          <h4>Centers of excellence </h4>
          <a href="/">Cardiac Science</a>
          <a href="/">Neurology</a>
          <a href="/">General Medicine</a>
          <a href="/">Diabetology</a>
          <a href="/">Spine Surgery</a>
          <a href="/">Orthopaedics</a>
          <a href="/">Geriatrics</a>
          <a href="/">Nephrology & Urology</a>
          <a href="/">Gastroentrology</a>
          <a href="/">Vascular Surgery</a>
          <a href="/">Liver Diseases</a>
          <a href="/">Oncology</a>
          <a href="/">Paediatrics & Neonatology</a>
        </div>
        <div>
          <h4>Specialties</h4>
          <a href="/">Anesthesiology</a>
          <a href="/">Critical Care</a>
          <a href="/">Dental Maxillofacial</a>
          <a href="/">Dermatology</a>
          <a href="/">Ophthalmology</a>
          <a href="/">Endocrinology</a>
          <a href="/">ENT Head</a>
          <a href="/">General Surgery</a>
          <a href="/">Laboratory Services</a>
          <a href="/">Obstetrics Gynecology</a>
          <a href="/">Psychiatry</a>
          <a href="/">Pulmonology</a>
          <a href="/">Rheumatology</a>
        </div>

        <div>
          <h4>Patients & Visitors</h4>
          <a href="/">Overview</a>
          <a href="/">Appointments</a>
          <a href="/">Admissions</a>
          <a href="/">Preparing for surgery</a>
          <a href="/">Billing insurance</a>
          <a href="/">Emergency & urgent care</a>
          <a href="/">Patient safety</a>
          <a href="/">Amenities</a>
          <a href="/">Medical Records</a>
          <a href="/">Patient stories</a>
          <a href="/">Preventive health care</a>
          <a href="/">Ask your doctor</a>
          <a href="/">Values</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
