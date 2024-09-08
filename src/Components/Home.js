import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome from react 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Cupidatat commodo cillum incididunt ullamco. Laborum duis nulla
              proident culpa laborum sunt. Velit nulla laboris est cupidatat
              proident amet exercitation. Nisi qui duis ut incididunt duis magna
              nostrud anim officia irure commodo officia. Adipisicing proident
              reprehenderit enim eiusmod eu pariatur labore aliqua sint.
              Pariatur qui nisi reprehenderit id sunt laboris veniam sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
