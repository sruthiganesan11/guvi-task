import React from "react";
import "./about.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const About = () => {
  let message = `Medswiss is known for taking on complex challenges that demand rigorous thinking – and for pursuing opportunities that others miss. We accomplish this by seeking out talented, 
  committed people and bringing them together as one team.`;
  return (
    <>
      <div>
        <div className="aboutpage">
          <div className="aboutwrapper">
            <div className="aboutHeading">
              <h1 className="abouth1">About Us</h1>
              <p>
                Medswiss Hospital, an International Medical facility, is a
                quaternary care hospital dedicated to fostering and responding
                to the needs of a diverse patient population. The hospital
                provides highest quality healthcare in India, as well as access
                to cutting-edge technology and experienced, caring medical
                professionals. The hospital is committed to being an
                internationally significant health care system with the
                state-of-the art infrastructure facilities. Medswiss Hospital is
                designed to provide highly specialised care in all specialties
                with special focus on care of the critically ill and multi-organ
                transplantation patients. Established under the formidable
                leadership of Prof. Mohamed Medswiss, a world-renowned surgeon
                in the field of Liver Surgery and Transplantation, this hospital
                houses one of the world’s largest dedicated liver intensive care
                units. In addition to the quality of the quaternary care in all
                specialties, the hospital is committed to provide day-to-day
                “primary and secondary care” to the local population on par with
                international standards – maybe even a notch higher.. Some of
                the distinguishing trademarks of Medswiss Hospital: It is a
                multispeciality hospital in a sprawling area of 36 acres of land
                located in Chromepet, Chennai, Tamilnadu, India. The facility,
                with 450 beds inclusive of 130 critical-care beds, 9 operating
                rooms and state-of-the art reference laboratories and radiology
                services, is conveniently located in close proximity to road,
                rail and air transport. It is led and managed by world-renowned
                doctors who are committed to healthcare. It offers the widest
                spectrum of clinical care, education and research. The hospital
                offers cutting-edge technology and state-of-the-art treatment
                facilities designed to deliver healthcare at an affordable cost.
                It is driven by patient needs, comfort and trust.
              </p>
            </div>
          </div>
        </div>

        <section className="section-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="section-title">Our People</h2>
                <p className="section-subtitle">{message}</p>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img
                    src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                    className="team-img"
                    alt="pic"
                  />
                  <h3>JOHNATHAN HAWKINS</h3>
                  <div className="team-info">
                    <p>Head of Infrastructure, India</p>
                  </div>
                  <p>
                    "We encourage and appreciate everyone as they are...I am
                    exteremly proud of the team that we have here."
                  </p>
                  <ul className="team-icon">
                    <li>
                      <a href="#" className="twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pinterest">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dribble">
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img
                    src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"
                    className="team-img"
                    alt="pic"
                  />
                  <h3>ALEXANDRA SMITHS</h3>
                  <div className="team-info">
                    <p>Partner, Client & Product Solutions</p>
                  </div>
                  <p>
                    "What I really like and enjoy about working at Apollo is
                    that we are not complacent. We are constantly seeking new
                    opportunities to evolve our business."
                  </p>
                  <ul className="team-icon">
                    <li>
                      <a href="#" className="twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pinterest">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dribble">
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="team-item">
                  <img
                    src=" https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                    className="team-img"
                    alt="pic"
                  />
                  <h3>ELISA JOHANSON</h3>
                  <div className="team-info">
                    <p>Partner, Head of Asia-Pacific</p>
                  </div>
                  <p>
                    "One of the things we've really benefited from... is the One
                    Apollo approach. Everybody comes with a solutions mindset;
                    everybody brings some unique perspective."
                  </p>

                  <ul className="team-icon">
                    <li>
                      <a href="#" className="twitter">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pinterest">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dribble">
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
