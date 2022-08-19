import React from "react";

const Fidback = ({ fidback }) => {
  return (
    <div className="col p-2">
      <div className="card p-1 bg-warning">
        <h1>Id : {fidback.id}</h1>
        <p>{fidback.body}</p>
      </div>
    </div>
  );
};

export default Fidback;
