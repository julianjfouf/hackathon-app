import React from "react";
import { Link } from "react-router-dom";
import "./OurGoal.css";

const OurGoal = () => {
  return (
    <div className="OurGoal">
      <Link to="/" className="back-button">
        Back
      </Link>
      <h1 className="OurGoal-title">Our Goal</h1>
      <p className="OurGoal-description">
        Our goal is to help save the water resources, we do this by implementing
        an api calling function that pulls data from databases that collect data
        on water quality. We take this data and evaluate it through our
        algorithms in order to inform our users of the proper course of action
        to take.
      </p>
    </div>
  );
};

export default OurGoal;
