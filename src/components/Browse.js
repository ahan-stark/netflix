import React, { useEffect } from "react";
import Header from "./Header";
import usePlayingNowMovies from "../hooks/usePlayingNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usepopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  usePlayingNowMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGPT ? (
        <GPTsearch />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
