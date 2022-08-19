import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div>
      <h1>app</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
