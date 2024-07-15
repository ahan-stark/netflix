import React from "react";
import { img_cdn_url } from "../utils/const";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="h -30 w-40 pr-4">
      <img src={img_cdn_url + poster_path} alt="no internet" />
    </div>
  );
};

export default MovieCard;
