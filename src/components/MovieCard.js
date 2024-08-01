import React from "react";
import { img_cdn_url } from "../utils/const";
import { Link } from "react-router-dom";

const MovieCard = ({ movie_id, poster_path }) => {
  return (
    <Link to={`/movieInfo/${movie_id}`}>
      <div className="h -30 w-40 pr-4 cursor-pointer">
        <img src={img_cdn_url + poster_path} alt="no internet" />
      </div>
    </Link>
  );
};

export default MovieCard;
