import { Api_options } from "../utils/const";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addpopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      Api_options
    );
    const json = await data.json();
    dispatch(addpopularMovies(json));
  };
};
export default usePopularMovies;
