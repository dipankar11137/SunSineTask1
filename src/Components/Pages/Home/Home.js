import React from "react";
import Footer from "../Footer/Footer";
import Banner from "./Banner";
import Fidbacks from "./Fidbacks";
import Header from "./Header";
import OurExperts from "./OurExperts";
import Services from "./Services";

const Home = () => {
  return (
    <div className="">
      <div className="container mt-3">
        <div className="row ">
          <div className="col-lg-4 col-sm-12">
            <Header />
          </div>
          <div className="col-lg-8 col-sm-12">
            {" "}
            <Banner />
          </div>
        </div>
      </div>
      <Services />
      <OurExperts />
      <Fidbacks />
      <hr />
      <Footer />
    </div>
  );
};

export default Home;
