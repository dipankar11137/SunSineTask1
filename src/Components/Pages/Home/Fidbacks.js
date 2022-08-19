import React, { useEffect, useState } from "react";
import Fidback from "./Fidback";

const Fidbacks = () => {
  const [fidbacks, setFitbacks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setFitbacks(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center p-4 ">Customer Feedback</h1>
      <div className="row row-cols-3 row-cols-md-6 g-4 text-dark">
        {fidbacks.slice(0, 15).map((fidback) => (
          <Fidback key={fidback.id} fidback={fidback}></Fidback>
        ))}
      </div>
    </div>
  );
};

export default Fidbacks;
