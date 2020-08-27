import React, { useState, useEffect } from "react";
import Axios from "../axios";
import "../styles/Hero.css";

const imageBaseURL = "https://image.tmdb.org/t/p/original/";

const Hero = ({ fetchUrl }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movieStore = JSON.parse(localStorage.getItem("movies"));
      const index = Math.floor(Math.random() * movieStore.length - 1);
      setMovie(movieStore[index]);
      return movieStore;
    } else {
      const fetchMovies = async () => {
        const request = await Axios.get(fetchUrl);
        const response = request?.data.results;
        const index = Math.floor(Math.random() * response.length - 1);
        localStorage.setItem("movies", JSON.stringify(response));
        setMovie(response[index]);
        return response;
      };
      fetchMovies();
    }
  }, [fetchUrl]);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${imageBaseURL + movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero__info">
        <h1>{movie?.title || movie?.original_title || movie?.name}</h1>
        <h4 className="hero__overview">{movie.overview}</h4>
        <button className="hero__button">try 1 week free</button>
      </div>
      <div className="hero__overlay"></div>
    </div>
  );
};

export default Hero;
