import React from "react";
import MovieCard from "./MovieCard";
const MovieList = (props) => {
  const { movies, title } = props;
  return (
    <div>
      <div className="font-bold text-3xl text-red-600 pt-4 pb-4 ml-4">
        {title}
      </div>
      <div className="flex overflow-x-scroll ml-5">
        <div className="flex">
          {movies.results.map((movie) => {
            return <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
