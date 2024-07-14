import React, { useRef, useState } from "react";
import Header from "./Header";
import bg from "../assets/bg.jpg";
import { checkValidateData } from "../utils/validate";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleSignIn, settoggleSignIn] = useState(true);
  const [validateErrorMsg, setValidateError] = useState();
  const toggleLogin = () => {
    settoggleSignIn(!toggleSignIn);
  };
  const validateLogin = () => {
    let response = checkValidateData(
      email.current.value,
      password.current.value
    );
    setValidateError(response);
    if (response != null) return;
    //if there is no response message then its valid to sign up/sign in
    if (!toggleSignIn) {
      //sign in logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Sign up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            //we update the redux with the user name and values once we create the account from here only because we tried doing in body for the creating it is not syncing properly only it is taking email and password
            .then(() => {
              const currentUser = auth.currentUser;
              dispatch(
                addUser({
                  uid: currentUser.uid,
                  email: currentUser.email,
                  displayName: currentUser.displayName,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateError("already registered");
          // ..
        });
    } else if (toggleSignIn) {
      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateError("invalid name/password");
        });
    }
  };
  return (
    <div className="">
      <div className="absolute">
        <Header />
        <img
          className=" w-[90em] h-[37.45em] object-cover w-180"
          src={bg}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateLogin();
        }}
        className="w-full h-[94%] my-8 md:w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!toggleSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">
          {validateErrorMsg}
        </p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleLogin}>
          {toggleSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
