import { useEffect, useState } from "react";
import { Api_options } from "../utils/const";

const useGetMovieDetails = (props) => {
  const { id } = props;
  const [getMovieDetails, setMovieDetails] = useState(null);
  const fetchMovieDetails = async () => {
    let promise = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      Api_options
    );
    let json = await promise.json();
    setMovieDetails(json);
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return getMovieDetails;
};
export default useGetMovieDetails;
