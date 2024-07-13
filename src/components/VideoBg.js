import React, { useEffect } from "react";
import { Api_options } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
const VideoBg = (props) => {
  const dispatch = useDispatch();
  const getTrailer = useSelector((store) => store.movies.playInTrailer);
  const { movieId } = props;
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      Api_options
    );
    const json = await data.json();
    const trailer = json.results.filter((val) => val.type == "Trailer");
    console.log(trailer[0]);
    dispatch(addTrailer(trailer[0]));
  };
  useEffect(() => {
    getMovies();
  }, []);
  if (!getTrailer) return;
  const movieKey = getTrailer.key;
  console.log(movieKey);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + movieKey}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
