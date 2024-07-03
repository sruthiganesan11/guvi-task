import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPassengers } from "../Services/PassengerService";
import './passengerlist.css'

const PassengerList = () => {
  const [passengers, setPassenger] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listPassenger();
  }, []);

  const listPassenger = async () => {
    const response = await getAllPassengers();
    console.log(response.data);
    setPassenger(response.data);
    console.log(passengers);
  };
  return (
    <section className="passengerlistbg">
      <div className="passengerlistwrapper">
        <div className="passengerlistheading">
          <h2>List of Passenger</h2>
        </div>
        <div className="passengerListContainer">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Passenger Name</th>
                <th className="text-center">Aadhar Id</th>
                <th className="text-center">Contact No</th>
                <th className="text-center">Email</th>
                <th className="text-center">Age</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map((passenger) => (
                <tr key={passenger.id}>
                  <td className="text-center">{passenger.name}</td>
                  <td className="text-center">{passenger.aadharId}</td>
                  <td className="text-center">{passenger.contactNo}</td>
                  <td className="text-center">{passenger.email}</td>
                  <td className="text-center">{passenger.age}</td>
                  <td className="text-center">
                    {passenger.cancelStat
                      ? "Booking Cancelled"
                      : "Booking Confirmed"}
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

export default PassengerList;
