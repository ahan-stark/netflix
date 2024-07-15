import { Api_options } from "../utils/const";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      Api_options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json));
  };
};
export default useTopRatedMovies;