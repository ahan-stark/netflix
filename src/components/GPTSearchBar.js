import React, { useRef } from "react";
import { Form } from "react-router-dom";
import DisplaySearchmovie from "./DisplaySearchmovie";
import { Api_options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addSearchMovieList } from "../utils/searchmovieSlice";

const GPTSearchBar = () => {
  const searchmovie = useRef();
  const disPatch = useDispatch();
  const searchMovieinDB = async () => {
    let movieString = searchmovie.current.value;
    if (movieString.trim() !== "") {
      const searchMovieAPI = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieString +
          "&include_adult=false&language=en-US&page=1",
        Api_options
      );
      const searchmovieInJSON = await searchMovieAPI.json();
      console.log(searchmovieInJSON.results.slice(0, 5));
      disPatch(addSearchMovieList(searchmovieInJSON.results.slice(0, 5)));
    } else if (movieString.trim() === "") {
      disPatch(addSearchMovieList([]));
    }
  };
  return (
    <div>
      <div className="pt-[6.5%] flex justify-center">
        <Form
          className="bg-black w-1/2 grid grid-cols-12 rounded-xl"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder="what are you planning to watch?"
            ref={searchmovie}
          ></input>
          <button
            className="bg-red-700 text-white rounded-xl py-2 px-4 col-span-3 m-4"
            onClick={searchMovieinDB}
          >
            Search
          </button>
        </Form>
      </div>
      <div>
        <DisplaySearchmovie />
      </div>
    </div>
  );
};

export default GPTSearchBar;
