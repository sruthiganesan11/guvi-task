import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getpassenger } from "../Services/PassengerService";
import { getPassengerById } from "../Services/BookingService";
import "./viewticket.css";

const ViewTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [passengerid, setPassenger] = useState();
  const [name, setName] = useState("");
  const [aadhar, setAdharId] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookId, setBookId] = useState("");
  const [busname, setBusname] = useState("");
  const [departure, setDeparture] = useState("");
  const homePage = (e) => {
    e.preventDefault();
    navigate("/destination");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await getpassenger(id);
          const response1 = await getPassengerById(response.data.id); //API call to find passeger by Id
          setBookDate(response1.data.bookingDate);
          //console.log(response1);
          const passenger = response.data;
          // console.log(passenger);
          setPassenger(response.data.id);
          setName(response.data.name);
          setAdharId(response.data.aadharId);
          setAge(response.data.age);
          setEmail(response.data.email);
          setBookId(response1.data.bookingId);
          setBusname(response1.data.busName);
          setDeparture(response1.data.departureDate);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <section className="viewTicketbg">
      <br />
      <div className="viewTicketwrappers">
        <div className="viewTicketHeading">
          <h2>E-Ticket</h2>
        </div>
        <div className="viewTicketContainer">
          <ul className="viewTicketItem">
            <li className="viewTicketItem-list">Passenger Id: {passengerid}</li>
            <li className="viewTicketItem-list">
              Passenger Name: {name}
            </li>
            <li className="viewTicketItem-list">Aadhar Id: {aadhar}</li>
            <li className="viewTicketItem-list">Age: {age}</li>
            <li className="viewTicketItem-list">Email: {email}</li>
            <li className="viewTicketItem-list">Booking date: {bookDate}</li>
            <li className="viewTicketItem-list">Booking Id: {bookId}</li>
            <li className="viewTicketItem-list">Bus Name: {busname}</li>
            <li className="viewTicketItem-list">Departure Date: {departure}</li>
          </ul>
          <button className="btn-view" onClick={(e) => homePage(e)}>
            Back to home page
          </button>
        </div>
      </div>
    </section>
  );
};

export default ViewTicket;
