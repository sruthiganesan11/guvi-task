import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { passengerByEmail } from "../Services/PassengerService";
import { useNavigate } from "react-router-dom";
import "./eticket.css";

const Eticket = () => {
  const [email, setEmail] = useState("");
  const [ticket, setTicket] = useState(false);
  const [passengerid, setPassenger] = useState();
  const [name, setName] = useState("");
  const [aadhar, setAdharId] = useState();
  const [age, setAge] = useState();
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const change1 = (event) => setEmail(event.target.value);
  //navigate to view the ticket
  const handleViewTicket = (id) => {
    navigate(`/view/${id}`);
  };

  const ticketclickhandler = async (e) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
    }
    //console.log("clicked"+" "+email);
    const response = await passengerByEmail(email); //API call to get booking details by email id
    const passengerTicket = response.data;
    setPassenger(response.data.id);
    setName(response.data.name);
    setAdharId(response.data.aadharId);
    setAge(response.data.age);
    setStatus(response.data.journeyStat);
    // console.log(passenger);
    console.log(response.data.id);
    console.log(passengerTicket);
    setTicket(true);
  };
  return (
    <section className="ticketbg">
      <div className="ticketwrapper">
        <div className="ticketHeading">E-ticket</div>
        <div className="ticketContainer">
          <Form>
            <div>
              <label className="ticketLabel">Enter your Email</label>
              <div className="ticketinputBox">
                <input
                  type="text"
                  placeholder="Enter your Email address"
                  className="form-control"
                  id="email"
                  error={!!error}
                  name="email"
                  value={email}
                  onChange={change1}
                  required
                />
                {!!error && <p className="text-danger">Email is required</p>}
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={(e) => ticketclickhandler(e)}
                className="searchbutton"
              >
                Search
              </button>
            </div>
          </Form>
        </div>
        {ticket && (
          <div className="ticketcontainer">
            <div className="ticketWrapper">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th className="text-center" scope="col" id="theading">
                      Id
                    </th>
                    <th className="text-center" scope="col">
                      Passenger Name
                    </th>
                    <th className="text-center" scope="col">
                      Aadhar Id
                    </th>
                    <th className="text-center" scope="col">
                      Age
                    </th>
                    <th className="text-center" scope="col">
                      Email
                    </th>
                    <th className="text-center" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{passengerid}</td>
                    <td>{name}</td>
                    <td>{aadhar}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>
                      <button
                        type="submit"
                        className="btnView"
                        onClick={(e) => handleViewTicket(passengerid)}
                      >
                        View Ticket
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Eticket;
