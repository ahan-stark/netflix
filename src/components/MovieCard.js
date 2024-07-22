import React from "react";
import { img_cdn_url } from "../utils/const";

const MovieCard = ({ movie_id, poster_path }) => {
  return (
    <div className="h -30 w-40 pr-4">{
      console.log(movie_id)
    }
      <img src={img_cdn_url + poster_path} alt="no internet" />
    </div>
  );
};

export default MovieCard;
