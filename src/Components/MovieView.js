import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f07701cd2cb0429e3cc3afc3d0284d7e&language=en-US`
        );
        setMovieDetails(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    if (movieDetails) {
      fetchDetails();
    }
  }, [id]);

  const renderLoading = () => {
    if (IsLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      const NoPosterPath =
        "https://image.tmdb.org/t/p/w500/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg";
      const condition = movieDetails.backdrop_path ? backdropUrl : NoPosterPath;
      const condition2 = movieDetails.poster_path ? posterUrl : NoPosterPath;
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={condition} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={condition2}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <h3>Release date: {movieDetails.release_date}</h3>
                <h4>Popularity: {movieDetails.popularity}</h4>
                <h4>Vote Count: {movieDetails.vote_count}</h4>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return renderLoading();
};

export default MovieView;
