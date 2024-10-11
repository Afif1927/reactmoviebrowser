import React from "react";
import Hero from "./Hero";
import MovieImage from "../assets/movie.jpg";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${MovieImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div style={backgroundStyle}>
      <Hero text='Welcome to the movie browser' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead text-white fw-bold text-center py-10'>
              Discover your favorite movies with a
              quick search!
              <br />
              Use the search bar to find any movie
              by title and dive into its details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
