import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const DisplaySearchmovie = () => {
  const movieSearchList = useSelector((store) => store.searchMovie.searchList);
  if (movieSearchList.length === 0) return;

  return (
    <div className="flex flex-col ml-[9%] mt-[2%] md:flex-row">
      {movieSearchList.map(
        (movie, index) =>
          movie.poster_path && (
            <Link to={`/movieInfo/${movie.id}`}>
              <div
                key={movie.id}
                className="bg-black opacity-100 m-5 pl-4 flex-row border border-red-600 rounded-lg cursor-pointer hover:border-yellow-300 hover:scale-125"
              >
                <MovieCard
                  movie_id={movie.id}
                  poster_path={movie.poster_path}
                />
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default DisplaySearchmovie;
