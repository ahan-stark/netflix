import React, { useEffect } from "react";
import Header from "./Header";
import usePlayingNowMovies from "../hooks/usePlayingNowMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const getMovies = usePlayingNowMovies;
  getMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
