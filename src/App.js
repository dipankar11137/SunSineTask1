import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navbar from "./Components/Pages/Navbber/Navbar";
import Header from "./Components/Pages/Home/Header";

function App() {
  return (
    <div className="background-color">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
