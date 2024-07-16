import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import bg from "../assets/bg.jpg"

const GPTsearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img
          className=" w-[90em] h-[39.94em] object-cover w-180"
          src={bg}
          alt="logo"
        />
      </div>
      <GPTSearchBar></GPTSearchBar>
    </div>
  );
};

export default GPTsearch;
