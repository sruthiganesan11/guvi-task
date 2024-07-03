import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBus, getAllBuses } from "../Services/BusService";
import "./listbus.css";

const BusList = () => {
  const [buses, setBus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listBus();
  }, []);

  const listBus = async () => {
    const response = await getAllBuses();
    console.log(response.data);
    setBus(response.data);
    console.log(buses);
  };
  const handleUpdate = (id) => {
    navigate(`/update-bus/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await deleteBus(id);
      window.location.reload(false);
      navigate("/listBus");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="listbg">
      <div className="buslistwrapper">
        <div className="buslistheading">
          <h2>List of Buses</h2>
        </div>
        <div className="busListContainer">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="text-center">Bus Id</th>
                <th className="text-center">Bus Name</th>
                <th className="text-center">From Location</th>
                <th className="text-center">Drop Location</th>
                <th className="text-center">Total Seats</th>
                <th className="text-center">Available Seats</th>
                <th className="text-center">DepartureDate</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus) => (
                <tr key={bus.id}>
                  <td className="text-center">{bus.id}</td>
                  <td className="text-center">{bus.busName}</td>
                  <td className="text-center">{bus.fromLocation}</td>
                  <td className="text-center">{bus.toLocation}</td>
                  <td className="text-center">{bus.seats}</td>
                  <td className="text-center">{bus.availableSeats}</td>
                  <td className="text-center">{bus.departureDate}</td>
                  <td className="text-center">{bus.price}</td>

                  <td>
                    <button
                      className="btn-listBus"
                      id="btn-update"
                      onClick={() => handleUpdate(bus.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn-listBus"
                      id="btn-delete"
                      onClick={() => handleDelete(bus.id)}
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

export default BusList;
