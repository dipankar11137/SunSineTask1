import React from "react";
import Banner from "./Banner";
import Header from "./Header";

const Home = () => {
  return (
    <div className="">
      <div class="container mt-3">
        <div class="row ">
          <div class="col-lg-4 col-sm-12">
            <Header />
          </div>
          <div class="col-lg-8 col-sm-12">
            {" "}
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
