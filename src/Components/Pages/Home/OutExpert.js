import React from "react";

const OutExpert = ({ expert }) => {
  return (
    <div className="col p-2">
      <div className="card p-1 bg-info">
        <h6>Id : {expert.id}</h6>
        <h5>Name : {expert?.name}</h5>
        <p>City : {expert?.address?.city}</p>
        <p>Email : {expert?.email}</p>
        <p>Phone : {expert?.phone}</p>
      </div>
    </div>
  );
};

export default OutExpert;
