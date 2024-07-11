import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-br from-black">
      <img className="w-[75%] h-[4em] my-5" src={logo} alt='"no internet'></img>
    </div>
  );
};

export default Header;
