import React, { useState, useEffect } from "react";
import { getAllBuses } from "../Services/BusService";
import "./destination.css";
import axios from "axios";
import Select from "react-select";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";

const Destination = () => {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [findbus, setfindBus] = useState(false);
  const [fetch_buses, setfetchBus] = useState([]);
  const index = 0;
  const navigate = useNavigate();

  const fromOptions = [
    { value: "salem", label: "salem", color: "black" },
    { value: "theni", label: "theni" },
    { value: "chennai", label: "chennai" },
    { value: "trichy", label: "trichy" },
    { value: "dindukal", label: "dindukal" },
    { value: "kanyakumari", label: "kanyakumari" },
    { value: "madurai", label: "madurai" },
    { value: "pudukottai", label: "pudukottai" },
    { value: "thanjavur", label: "thanjavur" },
    { value: "nagapattinam", label: "nagapattinam" },
    { value: "ooty", label: "ooty" },
    { value: "coimbatore", label: "coimbatore" },
    { value: "rameshwaram", label: "rameshwaram" },
    { value: "Tirunelveli", label: "Tirunelveli" },
    { value: "Erode", label: "Erode" },
    { value: "Vellore", label: "Vellore" },
    { value: "Thoothukudi(Tuticorin)", label: "Thoothukudi" },
    { value: "Cuddalore", label: "Cuddalore" },
    { value: "Kanchipuram", label: "Kanchipuram" },
    { value: "Karaikudi", label: "Karaikudi" },
    { value: "Neyveli", label: "Neyveli" },
    { value: "Kumbakonam", label: "Kumbakonam" },
    { value: "Pollachi", label: "Pollachi" },
    { value: "pondicherry", label: "pondicherry" },
  ];
  const toOptions = [
    { value: "salem", label: "salem", color: "black" },
    { value: "theni", label: "theni" },
    { value: "chennai", label: "chennai" },
    { value: "trichy", label: "trichy" },
    { value: "dindukal", label: "dindukal" },
    { value: "kanyakumari", label: "kanyakumari" },
    { value: "madurai", label: "madurai" },
    { value: "pudukottai", label: "pudukottai" },
    { value: "thanjavur", label: "thanjavur" },
    { value: "nagapattinam", label: "nagapattinam" },
    { value: "ooty", label: "ooty" },
    { value: "coimbatore", label: "coimbatore" },
    { value: "rameshwaram", label: "rameshwaram" },
    { value: "Tirunelveli", label: "Tirunelveli" },
    { value: "Erode", label: "Erode" },
    { value: "Vellore", label: "Vellore" },
    { value: "Thoothukudi(Tuticorin)", label: "Thoothukudi" },
    { value: "Cuddalore", label: "Cuddalore" },
    { value: "Kanchipuram", label: "Kanchipuram" },
    { value: "Karaikudi", label: "Karaikudi" },
    { value: "Neyveli", label: "Neyveli" },
    { value: "Kumbakonam", label: "Kumbakonam" },
    { value: "Pollachi", label: "Pollachi" },
    { value: "pondicherry", label: "pondicherry" },
  ];
  const onCountChange = () => {
    console.log(busID); // returns 0;
  };

  const handleBooking = (e, bus1id) => {
    e.preventDefault();
    const bus = bus1id;
    navigate(`/seatLayout/${bus1id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios //API call to find filtered bus list by 'from' and 'to' location field
      .get("http://localhost:8081/api/buses")
      .then((response) => {
        const buses = response.data;
        const filteredBuses = buses.filter(
          (bus) =>
            bus.fromLocation.toLowerCase() === fromLocation.label &&
            bus.toLocation.toLowerCase() === toLocation.label
        );
        setfetchBus(filteredBuses);
        //console.log(filteredBuses);
        setfindBus(true);
      })
      .catch((error) => {
        console.error("Error fetching buses:", error);
      });
  };

  const handleDateChange = (date) => {
    setDepartureDate(date);
  };

  const CustomInput = ({ value, onClick }) => (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={value}
        onClick={onClick}
        readOnly
        style={{ paddingRight: "30px" }} // Ensure enough space for the icon
      />
      <FaCalendarAlt
        onClick={onClick}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      />
    </div>
  );

  const dropdownStyles = {
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: "black",
      fontSize: "1.3rem",
      fontWeight: "bold",
    }),
    dropdownIndicator: () => ({
      color: "black",
      fontSize: "2rem",
      fontWeight: "bold",
    }),

    option: () => ({
      color: "black",
      fontSize: "1.3rem",
      fontWeight: "800",
    }),
  };
  return (
    <div className="background">
      <br />
      <br />
      <br />
      <div className="destination">
        <h1 className="heading">Popular Destinations</h1>
        <p className="content">
          Remember that happiness is a way of travel – not a destination.
        </p>

        <div className="dropdown" style={{ display: "flex", gap: "10px" }}>
          <div style={{ margin: 20, width: 200 }} className="from">
            <Select
              value={fromLocation}
              onChange={setFromLocation}
              options={fromOptions}
              placeholder="From Location"
              styles={dropdownStyles}
            ></Select>
          </div>
          <div style={{ margin: 20, width: 200 }} className="to">
            <Select
              value={toLocation}
              onChange={setToLocation}
              options={toOptions}
              placeholder="To Location"
              styles={dropdownStyles}
            ></Select>
          </div>
          <div style={{ margin: 20, width: 200 }} className="calender">
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={departureDate}
              onChange={handleDateChange}
              minDate={new Date()}
              showMonthDropdown
              showYearDropdown
              customInput={<CustomInput />}
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "black",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                }),
              }}
            />
          </div>
        </div>
        <button className="searchBus" onClick={(e) => handleSubmit(e)}>
          Search Bus
        </button>
        {findbus && (
          <div className="container">
            <div className="py-4">
              <table className="table border shadow t2">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Bus Name</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                    <th scope="col">Dep Date</th>
                    <th scope="col">Total seats</th>
                    <th scope="col">Available Seats</th>
                    <th scope="col">Price of Ticket</th>
                    <th scope="col">Book Tickets</th>
                  </tr>
                </thead>
                <tbody>
                  {fetch_buses.map((bus1, index) => (
                    <tr key={bus1.id}>
                      <td>{bus1.id}</td>
                      <td>{bus1.busName}</td>
                      <td>{bus1.fromLocation}</td>
                      <td>{bus1.toLocation}</td>
                      <td>{bus1.departureDate}</td>
                      <td>{bus1.seats}</td>
                      <td>{bus1.availableSeats}</td>
                      <td>{bus1.price}</td>

                      {bus1.availableSeats > 0 ? (
                        <td>
                          <button
                            type="submit"
                            className="btn-book"
                            onClick={(e) => handleBooking(e, bus1.id)}
                          >
                            Book Now
                          </button>
                        </td>
                      ) : (
                        <td>
                          <h6>No seats available</h6>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destination;
