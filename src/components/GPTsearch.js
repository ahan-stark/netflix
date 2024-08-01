import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import bg from "../assets/bg.jpg";

const GPTsearch = () => {
  return (

      <div className="">
        <img
          className=" w-screen h-[84em] object-cover sm:h-full -z-20 absolute"
          src={bg}
          alt="logo"
        />
    
      <div className="">
        <GPTSearchBar></GPTSearchBar>
      </div>
    </div>
  );
};

export default GPTsearch;
