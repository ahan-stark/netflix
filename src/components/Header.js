import React, { useEffect } from "react";
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
import { addSearchMovieList } from "../utils/searchmovieSlice";

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
  const searchItems = useSelector((store) => store.searchMovie.searchList);
  const getStateOfSearch = useSelector((store) => store.gpt.showGPTSearch);
  if (!getStateOfSearch && searchItems.length > 0) {
    dispatch(addSearchMovieList([]));
  }
  return (
    <div className="absolute w-full  px-8 py-5 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="mx-auto md:ml-3 w-44" src={logo} alt="logo" />
      {getUser && (
        <div className="flex">
          <div className="w-[7em]">
          <button
            className="mt-[5%] w-[60%] h-[2em] ml-[2.6em] bg-black  rounded-xl text-red-600 font-bold border border-red-500 hover:border-yellow-400"
            onClick={handleGPTsearchClick}
          >
            {showGPT ? "Home" : "Search"}
          </button>
          </div>
          <div className="w-[7em]">
          <img
            className=" rounded-xl h-[55%] mb-1 ml-[2em]"
            src={avatar}
            alt="no internet"
          />
          <p className="text-yellow-300 pl-[2em]">{getUser}</p>
          </div>
          <div className="w-[6em]">
          <button className="mb-6 mr-2 mt-[6%] w-[6em] h-[2em] bg-black  rounded-xl text-red-600 font-bold border border-red-500 hover:border-yellow-300" onClick={handleSignout}>
            Sign Out
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
