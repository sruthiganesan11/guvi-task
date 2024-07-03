import React, { useState } from "react";
import { useNavigate } from "react-router";
import { addBus } from "../Services/BusService";
import Swal from "sweetalert2";
import "./addbus.css";

const AddBus = () => {
  const navigate = useNavigate();
  const [busName, setbusName] = useState("");
  const [departureDate, setDoj] = useState("");
  const [fromLocation, setFrom] = useState("");
  const [toLocation, setTo] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [error, setError] = useState(false);

  const saveBus = async (e) => {
    e.preventDefault();

    const bus = {
      busName,
      departureDate,
      fromLocation,
      toLocation,
      price,
      seats,
      availableSeats,
    };

    if (busName === "") {
      setError(true);
      console.log(error);
    } else if (!departureDate) {
      setError(true);
      console.log(error);
    } else if (fromLocation === "") {
      setError(true);
      console.log(error);
    } else if (toLocation === "") {
      setError(true);
      console.log(error);
    } else if (price == 0) {
      setError(true);
      console.log(error);
    } else if (availableSeats == 0) {
      setError(true);
      console.log(error);
    } else {
      console.log(bus);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bus has been Saved",
        showConfirmButton: "false",
        timer: 1500,
      });
      console.log(bus);
      const response = await addBus(bus);
      console.log(response);
      navigate("/admin");
    }
  };
  return (
    <section className="addbusbg">
      <br />
      <div className="buswrappers">
        <div className="busHeading">
          <h2>Add Bus</h2>
        </div>
        <div className="addbusContainer">
          <form>
            <div>
              <label className="addbusLabel">Name</label>
              <div className="addbusinputBox">
                <input
                  type="text"
                  name="busName1"
                  placeholder="Enter your Name"
                  value={busName}
                  error={!!error}
                  onChange={(e) => setbusName(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">Bus Field Cannot Be Empty</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbusLabel">Date of Journey</label>

              <div className="addbusinputBox">
                <input
                  type="date"
                  placeholder="Choose the Date"
                  name="doj"
                  value={departureDate}
                  error={!!error}
                  onChange={(e) => setDoj(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">Date field cannot be null</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbusLabel">From</label>
              <div className="addbusinputBox">
                <input
                  type="text"
                  placeholder="Enter From Location"
                  name="from"
                  value={fromLocation}
                  error={!!error}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">From Location cannot be empty</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbusLabel">To</label>

              <div className="addbusinputBox">
                <input
                  type="text"
                  placeholder="Enter To Location"
                  name="to"
                  value={toLocation}
                  error={!!error}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">To Location cannot be empty</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbusLabel">Price</label>
              <div className="addbusinputBox">
                <input
                  type="text"
                  placeholder="Enter The Price"
                  name="price"
                  value={price}
                  error={!!error}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">price field cannot be null</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbusLabel">Total Seats</label>
              <div className="addbusinputBox">
                <input
                  type="number"
                  placeholder="Enter the total seats"
                  name="seats"
                  value={seats}
                  error={!!error}
                  onChange={(e) => setSeats(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    Total Seats field cannot be null
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="addbusLabel">Available Seats</label>
              <div className="addbusinputBox">
                <input
                  type="number"
                  placeholder="Enter The Available Seats"
                  name="seats"
                  value={availableSeats}
                  error={!!error}
                  onChange={(e) => setAvailableSeats(e.target.value)}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    Available Seats Field cannot be null
                  </p>
                )}
              </div>
            </div>
            <div>
              <button onClick={(e) => saveBus(e)}>Add Bus</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBus;
