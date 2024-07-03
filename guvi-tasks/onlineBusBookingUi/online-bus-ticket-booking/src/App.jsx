import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./NavComponents/Navbar";
import Home from "./PageComponents/Home";
import About from "./PageComponents/About";
import Contact from "./PageComponents/Contact";
import SignUp from "./PageComponents/SignUp";
import Login from "./PageComponents/Login";
import Destination from "./PageComponents/Destination";
import Footer from "./Footer/Footer";
import AddBus from "./BusComponents/AddBus";
import Admin from "./UserComponents/Admin";
import Booking from "./BookingComponents/Booking";
import Eticket from "./Ticket/Eticket";
import BusList from "./BusComponents/BusList";
import MyBooking from "./BookingComponents/MyBooking";
import PassengerList from "./PassengerComponents/PassengerList";
import PasswordChange from "./Password/PasswordChange";
import ViewTicket from "./Ticket/ViewTicket";
import Seat from "./Seat/Seat";
import UpdateBus from "./BusComponents/UpdateBus";
import TicketBox from "./Ticket/TicketBox";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/addbuses" element={<AddBus />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/bookNow/:id" element={<Booking />} />
          <Route path="/eticket" element={<Eticket />} />
          <Route path="/viewTicketBox" element={<TicketBox />} />
          <Route path="/listBus" element={<BusList />} />
          <Route path="/myBooking" element={<MyBooking />} />
          <Route path="/listPassenger" element={<PassengerList />} />
          <Route path="/changePassword" element={<PasswordChange />} />
          <Route path="/view/:id" element={<ViewTicket />} />
          <Route path="/update-bus/:id" element={<UpdateBus />} />
          <Route path="/seatLayout/:id" element={<Seat />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
