import React from "react";
import { auth } from "../firebase/init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="Main">
      <img
        className="Main-bg2"
        src="https://img.freepik.com/free-photo/starry-ocean-nature-background-aesthetic-remixed-media_53876-126764.jpg?size=626&ext=jpg"
        alt=""
      />
      <img
        className="Main-bg"
        src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-52393.jpg?size=626&ext=jpg"
        alt=""
      />
      <img
        src="https://i.makeagif.com/media/11-10-2017/IRtMAD.gif"
        alt=""
        className="Main-bg3"
      />
      <h1 className="Main-title">
        Track your <span className="blue">Water Usage</span>
      </h1>
      <div className="button-wrapper">
        <Link onClick={register} className="Main-button">
          Login
        </Link>
        <Link className="Main-button" to="/V2Home">
          Register
        </Link>
        <Link to="/Dashboard" className="guest">Continue as guest</Link>
      </div>
    </div>
  );
};

export default Main;
