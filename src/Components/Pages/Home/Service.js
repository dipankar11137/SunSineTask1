import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, price, serviceManName, description } = service;
  return (
    <div class="col">
      <div class="card">
        <img src={img} alt="" />
        <div class="card-body">
          <h3 class="card-title text-dark">{name}</h3>
          <h4 className="text-dark">Service Price : $ {price} </h4>
          <h5 className="text-dark">Service Man Name : {serviceManName}</h5>
          <p class=" text-dark">{description}</p>
        </div>
        <div className="container pb-2  d-flex justify-content-between">
          <button type="button" class="btn btn-info shadow-lg px-4">
            Details
          </button>
          <div>
            <Link to="/booking">
              <button type="button" class="btn btn-warning shadow-lg px-4">
                Booking Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
