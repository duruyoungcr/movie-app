import React, { useEffect, useState } from "react";
import Axios from "../axios";
import "../styles/Row.css";

const imageBaseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, url, isHot, isRated }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await Axios.get(url);
      setMovies(response.data.results);
      return response;
    };
    fetchMovies();
  }, [url]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__images">
        {movies?.map((movie) => (
          <div>
            <img
              key={movie.id}
              src={`${imageBaseURL}${
                isHot ? movie.poster_path : movie.backdrop_path
              } `}
              alt="movie?.title"
              className={`row__image ${isHot && "row__imageHot"}`}
            />
            <div className={isRated ? "row__ratings" : "hide"} key={movie.id}>
              <p>{isRated && movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
