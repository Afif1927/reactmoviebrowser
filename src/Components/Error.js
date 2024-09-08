import React from "react";
import Hero from "./Hero";

const Error = () => {
  return (
    <div>
      <Hero text="404 not found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="bg-danger py-4 my-5 text-white text-center fs-5">
              Hey,there is nothing in this page. This page doesn't exist!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
