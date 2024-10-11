import React, {
  useEffect,
  useState,
} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutView from "./Components/About";
import SearchView from "./Components/SearchView";
import MovieView from "./Components/MovieView";
import Error from "./Components/Error";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

const App = () => {
  const [searchResults, setSearchResult] =
    useState([]);
  const [searchText, setSearchText] =
    useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=f07701cd2cb0429e3cc3afc3d0284d7e&language=en-US&query=${searchText}&page=1&include_adult=false `
        );
        setSearchResult(data.results);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error
        );
      }
    };
    if (searchText) {
      fetchMovies();
    }
  }, [searchText]);

  return (
    <div>
      <Navbar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<AboutView />}
        />
        <Route
          path='/search'
          element={
            <SearchView
              keyword={searchText}
              searchResults={searchResults}
            />
          }
        />
        <Route
          path='/movies/:id'
          element={<MovieView />}
        />
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </div>
  );
};

export default App;
