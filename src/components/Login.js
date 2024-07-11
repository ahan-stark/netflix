import React, { useState } from "react";
import Header from "./Header";
import bg from "../assets/bg.jpg";

const Login = () => {
  const [toggleSignIn, settoggleSignIn] = useState(true);
  const toggleLogin = () => {
    settoggleSignIn(!toggleSignIn);
  };
  return (
    <div>
      <div className="absolute w-[100%]">
        <Header />
        <img src={bg} className="h-[39.91em] w-[100%]" alt="no internet"></img>
      </div>
      <div className="absolute h-[65%] w-[30%] bg-black mx-[31%] my-[10%] border rounded-md border-red-600 bg-opacity-90">
        <form className=" flex flex-col">
          <div className="text-white text-3xl font-bold text-center mt-5">
            {toggleSignIn ? "Sign In" : "Sign Up"}
          </div>
          {!toggleSignIn && (
            <input
              placeholder="Name"
              className="bg-gray-800 h-[42px] mt-8 px-4  mx-6 text-yellow-400"
            />
          )}
          <input
            type="text"
            placeholder="email"
            className="bg-gray-800 h-[42px] mt-6 px-4 text-yellow-400 mx-6"
          />
          <input
            type="password"
            placeholder="password"
            className="bg-gray-800 h-[42px] mt-5 px-4 text-yellow-400 mx-6"
          />
          <button className="text-gray-300 w-[35%]  bg-red-600  mx-[31%] text-l font-semibold mt-7 border rounded-lg border-red-600">
            Submit
          </button>
          <p
            className="text-white mt-6 text-center cursor-pointer"
            onClick={toggleLogin}
          >
            {toggleSignIn ? "New to netflix?" : "Already have an account?"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
