import React, { useEffect, useState } from "react";
import OutExpert from "./OutExpert";

const OurExperts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center p-4 ">Our Expert Details</h1>
      <div className="row row-cols-3 row-cols-md-6 g-4 text-dark">
        {experts.map((expert) => (
          <OutExpert key={expert.id} expert={expert}></OutExpert>
        ))}
      </div>
    </div>
  );
};

export default OurExperts;
