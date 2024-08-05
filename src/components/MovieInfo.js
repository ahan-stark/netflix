import React from "react";
import { useParams } from "react-router-dom";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import { img_cdn_url } from "../utils/const";
import CircularIndeterminate from "../utils/CircularIndeterminate";
import Rating from "@mui/material/Rating";

const MovieInfo = () => {
  let movieId = useParams();
  const movieDetails = useGetMovieDetails(movieId);
  console.log(movieDetails);
  if (!movieDetails)
    return (
      <div className="bg-black h-[37.5em] content-center pl-[40em]">
        <CircularIndeterminate />
      </div>
    );
  const { poster_path } = movieDetails;

  return (
    <div className="bg-black flex min-h-screen">
      <div className="pt-8 px-[5%] mt-[2%] w-[40%]">
        <img
          src={img_cdn_url + poster_path}
          alt="no-internet"
          className=" h-[27em] rounded-xl w-full border-[10px] border-red-700"
        ></img>
      </div>
      <div className="w-[50%] pt-[4%]">
        <div className="text-center mb-[5%]">
          <div className="text-red-600 text-5xl font-extrabold">
            {movieDetails.title}
          </div>
        </div>
        <div className="">
          <div className="text-yellow-200 text-center mb-[4%]">
            {movieDetails.tagline}
          </div>
        </div>
        <div className="text-center mb-[3%]">
          <Rating
            name="read-only"
            value={Math.ceil(movieDetails.vote_average) / 2}
            readOnly
            className="pl-3"
          />
        </div>
        <div className="">
          <div className="text-yellow-400 text-center text-lg mb-4 font-bold">
            Brief Description
          </div>
          <div className="text-white pb-5 pl-6">{movieDetails.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
