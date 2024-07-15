import { Api_options } from "../utils/const";
import { useDispatch } from "react-redux";
import { useEffect } from "react";import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      Api_options
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json));
  };
};
export default useUpcomingMovies;