import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <Link to="/" className="return-button">Back</Link>
      <h1 className="AboutUs-title">About Us!</h1>
      <p className="AboutUs-description">
        We are a water reservation group who strive to make applications that
        can help raise awareness about the San Joaquin County Water Status, and
        to help people keep the water clean!
      </p>
    </div>
  );
};

export default AboutUs;
