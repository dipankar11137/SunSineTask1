import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Pages/Navbber/Navbar";
import Header from "./Components/Pages/Home/Header";
import BookingNow from "./Components/Pages/Home/BookingNow";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Login/Register";
import RequireAuth from "./Components/Pages/Login/RequireAuth";
import Services from "./Components/Pages/Info/Services";
import About from "./Components/Pages/Info/About";
import Block from "./Components/Pages/Info/Block";
import Contact from "./Components/Pages/Info/Contact";

function App() {
  return (
    <div className="background-color">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route
          path="/booking"
          element={
            <RequireAuth>
              <BookingNow />
            </RequireAuth>
          }
        />
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />

        <Route path="/block" element={<Block />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
