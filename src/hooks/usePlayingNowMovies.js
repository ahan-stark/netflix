import { Api_options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import {useEffect} from "react"

const usePlayingNowMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      Api_options
    );
    const nowPlayingMovies = await data.json();
    dispatch(addNowPlayingMovies(nowPlayingMovies));
  };
};
export default usePlayingNowMovies;