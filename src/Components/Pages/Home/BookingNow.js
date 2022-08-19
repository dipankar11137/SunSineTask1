import React from "react";

const BookingNow = () => {
  const handleButton = () => {
    alert("Successfully Add this");
  };
  return (
    <div className="bg-white text-dark text-center">
      <div class="card">
        <div class="card-body">
          <h1>Booking now This service</h1>
          <button onClick={handleButton} className="btn btn-warning">
            Conform
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingNow;
