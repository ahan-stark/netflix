import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBg = (props) => {
  const getTrailer = useSelector((store) => store.movies.playInTrailer);
  const { movieId } = props;
  useGetMovieTrailer(movieId);
  if (!getTrailer) return;
  const movieKey = getTrailer.key;
  return (
    <div className="">
      <iframe
      className="w-[98.5vw] aspect-video wx-[99%]"
        src={"https://www.youtube.com/embed/" + movieKey+"?&autoplay=1&mute=1&start=10&controls=0"}
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
