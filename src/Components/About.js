import React from "react";
import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About US" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Cupidatat commodo cillum incididunt ullamco. Laborum duis nulla
              proident culpa laborum sunt. Velit nulla laboris est cupidatat
              proident amet exercitation. Nisi qui duis ut incididunt duis magna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
