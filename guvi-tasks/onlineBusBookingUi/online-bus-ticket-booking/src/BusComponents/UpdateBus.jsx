import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBus, updateBus } from "../Services/BusService";
import Swal from "sweetalert2";
import "./updatebus.css";

const UpdateBus = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [busName, setbusName] = useState("");
  const [fromLocation, setFrom] = useState("");
  const [toLocation, setTo] = useState("");
  const [seats, setSeats] = useState();
  const [availableSeats, setAvailableSeats] = useState();
  const [departureDate, setDoj] = useState("");
  const [price, setPrice] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBus(id);
        const bus = response.data;
        console.log(bus);
        setbusName(bus.busName);
        setFrom(bus.fromLocation);
        setTo(bus.toLocation);
        setSeats(bus.seats);
        setAvailableSeats(bus.availableSeats);
        setDoj(bus.departureDate);
        setPrice(bus.price);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  //method to make put API call to update bus details and to validate form fields
  const updatebus = async (e) => {
    e.preventDefault();
    const bus = {
      busName,
      fromLocation,
      toLocation,
      seats,
      availableSeats,
      departureDate,
      price,
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
    } else if (seats == 0) {
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
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(id);
      await updateBus(id, bus); //API call to make put API call to spring boot
      navigate("/admin");
    }
  };
  return (
    <section className="updatebusbg">
      <div className="updatebuswrappers">
        <div className="updatebusHeading">
          <h2>Update Bus</h2>
        </div>
        <div className="updatebusContainer">
          <form>
            <div>
              <label className="updatebuslable">Bus Name</label>
              <div className="updatebusinput">
                <input
                  type="text"
                  placeholder="Enter the BusName"
                  name="busName"
                  error={!!error}
                  value={busName}
                  onChange={(e) => setbusName(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">Bus Name field cannot be null</p>
                )}
              </div>
            </div>

            <div>
              <label className="updatebuslable">Date of Journey</label>
              <div className="updatebusinput">
                <input
                  type="text"
                  placeholder="Enter the Journey Date"
                  name="doj"
                  error={!!error}
                  value={departureDate}
                  onChange={(e) => setDoj(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    Journey Date field cannot be null and it should be of format
                    yyyy-MM-dd
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="updatebuslable">From</label>
              <div className="updatebusinput">
                <input
                  type="text"
                  placeholder="Enter From location"
                  name="from"
                  error={!!error}
                  value={fromLocation}
                  onChange={(e) => setFrom(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    From location field cannot be null
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="updatebuslable">To</label>
              <div className="updatebusinput">
                <input
                  type="text"
                  placeholder="Enter To location"
                  name="to"
                  error={!!error}
                  value={toLocation}
                  onChange={(e) => setTo(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    To location field cannot be null
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="updatebuslable">Price</label>
              <div className="updatebusinput">
                <input
                  type="text"
                  placeholder="Enter the price"
                  name="price"
                  error={!!error}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger"> Price field cannot be null</p>
                )}
              </div>
            </div>

            <div>
              <label className="updatebuslable">Total Seats</label>
              <div className="updatebusinput">
                <input
                  type="text"
                  placeholder="Enter the total seats"
                  name="seats"
                  error={!!error}
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    Total Seats field cannot be null
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="updatebuslable">Available Seats</label>
              <div className="updatebusinput">
                <input
                  type="text"
                  placeholder="Enter the Available seats"
                  name="seats"
                  error={!!error}
                  value={availableSeats}
                  onChange={(e) => setAvailableSeats(e.target.value)}
                />
                {!!error && (
                  <p className="text-danger">
                    {" "}
                    Available seats field cannot be null
                  </p>
                )}
              </div>
            </div>

            <div>
              <button onClick={(e) => updatebus(e)}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateBus;
