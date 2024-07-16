import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleShowSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const handleGPTsearchClick = () => {
    dispatch(toggleShowSearchView());
  };
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        //always navigate to browse
        const { uid, email, displayName } = user;
        navigate("/browse");
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        //always navigate if not logged in ...to login
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-full  px-8 py-5 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="mx-auto md:mx-0 w-[15%] h-[10%]" src={logo} alt="logo" />
      {getUser && (
        <div className="flex">
          <button
            className="text-white mt-[5%] mr-40 w-[25%] h-[2em] bg-purple-600 rounded-xl"
            onClick={handleGPTsearchClick}
          >
            {showGPT ? "home" : "search"}
          </button>
          <img className="w-14 h-12 -mr-12 -mt-1 rounded-xl" src={avatar} />
          <p className="relative text-yellow-300 mt-12 mr-7">{getUser}</p>
          <button className=" text-red-600 mb-6 mr-2 " onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
