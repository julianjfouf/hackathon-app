import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Water Preservation Society</h1>
      <Link to="/Start" className="home-button">Get Started Now!</Link>
      <Link to="/V2">Version 2!</Link>
    </div>
  );
};

export default Home;
