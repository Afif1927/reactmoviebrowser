import React from "react";
import Hero from "./Hero";
import MovieImage2 from "../assets/image6.jpg";

const AboutView = () => {
  const backgroundImage2 = {
    backgroundImage: `url(${MovieImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
  };

  return (
    <div style={backgroundImage2}>
      <Hero text='About Us' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5 '>
            <p className='lead text-white fw-bold text-center py-10'>
              Welcome to Movie Browser, your
              ultimate tool for discovering movies
              effortlessly! This web application
              allows users to search for any movie
              they are interested in, providing
              them with detailed information,
              including release dates, overviews,
              and more. Whether you're looking for
              the latest releases or classics,
              Movie Browser makes it easy to
              explore a vast collection of films.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
