import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Pages/Navbber/Navbar";
import Header from "./Components/Pages/Home/Header";
import BookingNow from "./Components/Pages/Home/BookingNow";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Login/Register";

function App() {
  return (
    <div className="background-color">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/booking" element={<BookingNow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
