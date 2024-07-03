import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { passengerByEmail } from "../Services/PassengerService";
import { useNavigate } from "react-router-dom";

const TicketBox = () => {
  const [email, setEmail] = useState("");
  const [ticket, setTicket] = useState(false);
  const [passengerid, setPassenger] = useState();
  const [name, setName] = useState("");
  const [aadhar, setAdharId] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const handleViewTicket = (id) => {
    navigate(`/view/${id}`);

    const ticketclickhandler = async (e) => {
        e.preventDefault();
        navigate('/viewTicketBox')
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
  };
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow t2">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Passenger Name</th>
                <th scope="col">Aadhar Id</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
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
                    className="btn btn-outline-warning"
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
    </div>
  );
};

export default TicketBox;
