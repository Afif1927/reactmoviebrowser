import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const NoPosterPath =
    "https://image.tmdb.org/t/p/w500/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg";
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  const condition = movie.poster_path ? posterUrl : NoPosterPath;
  return (
    <div className="col-lg-3 col-md-3 col-4 my-4">
      <div className="card">
        <img
          src={condition}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const result =
    searchResults.length === 0 ? (
      <div className="my-5">
        <p className="my-5 text-center fw-bold fs-4">
          Hey,look, I know you are looking for {keyword}, but there are no
          results. It's just doesn't exist!!!
        </p>
      </div>
    ) : (
      searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />;
      })
    );

  return (
    <div>
      <Hero text={title} />
      {result && (
        <div className="container">
          <div className="row">{result}</div>
        </div>
      )}
    </div>
  );
};

export default SearchView;