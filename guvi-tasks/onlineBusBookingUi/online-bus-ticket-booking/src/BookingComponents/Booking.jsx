import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getBus, updateTickets } from "../Services/BusService";
import { saveBooking } from "../Services/BookingService";
import Swal from "sweetalert2";
import "./addbooking.css";

const Booking = () => {
  let [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  let date = new Date();
  let today = new Date().toISOString().slice(0, 10);
  const [busId, setBusId] = useState();
  const [name, setName] = useState("");
  const [aadharId, setAadharId] = useState();
  const [contactNo, setContactNo] = useState();
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [journeyStat, setJourneyStat] = useState(true);
  const [cancelStat, setCancelStat] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [bookingDate, setDate] = useState("");
  const [price, setPrice] = useState();
  const [totalamount, setTotal] = useState();
  const [bookid] = useState(Math.random().toString(36).substr(2, 8));
  const [busName, setbusname] = useState("");
  const [fee, setFee] = useState();
  const [departureDate, setDdate] = useState();
  const [error, setError] = useState(false);
  //renders bus details using bus id and set the response in usestate
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const response = await getBus(id); //API call to get bus by Id
        const bus = response.data;
        const p = bus.price;
        setPrice(p);
        setCount(count);
        setBookingId("JJ" + bookid);
        setDate(today);
        setTotal(p);
        const name = bus.busName;
        setbusname(name);
        setBusId(bus.id);
        const datee = bus.departureDate;
        setDdate(datee);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  function onsetTotal() {
    setTotal((count + 1) * price);
  }
  // this handle MakePayment button click which displays the total amount to be paid by user for booking using the count of passenger and ticket price
  const paymentclickhandler = async (e) => {
    e.preventDefault();
    console.log(count);
    // console.log(price);
    onsetTotal();
    await updateTickets(busId, count); //API call to update the tickets by subtracting count of passenger and available seats

    Swal.fire({
      title: `Total amount:${totalamount}`,
      text: "Get your e-tickets by clicking E-ticket button on top!!",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Pay now!!",
      denyButtonText: `Pay Later!!`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Payment success!", "", "");
        navigate("/destination");
      } else if (result.isDenied) {
        Swal.fire("Pay amount during your Journey", "");
        navigate("/destination");
      }
    });
  };
  //this method handles the add passenger button which is used to add passenger detail to backend by making post API call
  const handleAddPassenger = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    count = count + 1;
    setCount(count);
    const passenger = {
      name,
      aadharId,
      contactNo,
      email,
      age,
      journeyStat,
      cancelStat,
    };

    setBookingId("JJ" + bookid);
    setDate(today);
    const booking = {
      bookingId,
      bookingDate,
      passenger,
      busName,
      fee,
      departureDate,
    };
    if (name === "") {
      setError(true);
    } else if (email === "") {
      setError(true);
    } else if (aadharId === 0) {
      setError(true);
    } else if (contactNo === 0) {
      setError(true);
    } else if (age === 0) {
      setError(true);
    } else {
      const response = await saveBooking(booking); //API call
      setName("");
      setEmail("");
      setAadharId(0);
      setAge(0);
      setContactNo(0);
    }
  };
  const change1 = (event) => setName(event.target.value);
  const change2 = (event) => setAadharId(event.target.value);
  const change3 = (event) => setEmail(event.target.value);
  const change4 = (event) => setAge(event.target.value);
  const change5 = (event) => setContactNo(event.target.value);
  return (
    <section className="bookingbg">
      <br />
      <div className="bookingwrappers">
        <div className="bookingHeading">
          <h2>Booking Form</h2>
        </div>
        <div className="addPassengerNumber">Add Passenger {count + 1}</div>
        <div className="bookingContainer">
          <Form>
            <div>
              <label className="addbookingLabel">Name of Passenger</label>
              <div className="addbookinginputBox">
                <input
                  type="text"
                  placeholder="Enter Passenger Name"
                  id="name"
                  name="name"
                  error={!!error}
                  value={name}
                  onChange={change1}
                  required
                />
                {!!error && (
                  <p className="text-danger">
                    Passenger Name field cannot be null
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="addbookingLabel">Aadhar Number</label>

              <div className="addbookinginputBox">
                <input
                  type="text"
                  placeholder="Enter your 12 digit aadhar number..."
                  id="aadhar"
                  name="aadhar"
                  value={aadharId}
                  onChange={change2}
                  error={!!error}
                  required
                />
                {!!error && (
                  <p className="text-danger">Aadhar Id field cannot be null</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbookingLabel">Email</label>
              <div className="addbookinginputBox">
                <input
                  type="text"
                  placeholder="Enter your Email ID"
                  id="email"
                  name="email"
                  value={email}
                  error={!!error}
                  onChange={change3}
                  required
                />
                {!!error && (
                  <p className="text-danger">Email field cannot be null</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbookingLabel">Age</label>

              <div className="addbookinginputBox">
                <input
                  type="text"
                  placeholder="Enter your Age"
                  id="age"
                  name="age"
                  value={age}
                  error={!!error}
                  onChange={change4}
                  required
                />
                {!!error && (
                  <p className="text-danger">Age field cannot be null</p>
                )}
              </div>
            </div>
            <div>
              <label className="addbookingLabel">Contact Number</label>
              <div className="addbookinginputBox">
                <input
                  type="text"
                  placeholder="Enter your 10 digit number..."
                  error={!!error}
                  id="contact"
                  name="contact"
                  value={contactNo}
                  onChange={change5}
                  required
                />
                {!!error && (
                  <p className="text-danger">Contact No field cannot be null</p>
                )}
              </div>
            </div>

            <div>
              <button type="submit" onClick={(e) => handleAddPassenger(e)}>
                Add Passenger
              </button>
            </div>
            <div>
              <button type="button" onClick={(e) => paymentclickhandler(e)}>
                Make Payment
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
