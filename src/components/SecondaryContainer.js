import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (
    !movies.popularMovies ||
    !movies.nowPlayingMovies ||
    !movies.topRatedMovies ||
    !movies.upcomingMovies
  )
    return;
  return (
    <div className=" bg-black">
      <div className="relative z-20 -mt-[5%]">
        <MovieList title="Now playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
        {/* <MovieList title="romcom" movies={movies} />
        <MovieList title="love" movies={movies} />  */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
