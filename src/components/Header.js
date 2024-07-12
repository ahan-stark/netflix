import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const getUser = useSelector((store) => {
    return store.user.user.displayName;
  });
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-full  px-8 py-5 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="mx-auto md:mx-0 w-[15%] h-[10%]" src={logo} alt="logo" />
      {getUser && (
        <div>
          <img className="pl-4" src={avatar} />
          <p className="text-yellow-300 px-3 py-1">{getUser}</p>
          {console.log(getUser)}
          <button className=" mt-3 pr-9 text-red-600" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;