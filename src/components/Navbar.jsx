import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Image from "../assets/water website logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [links, setLinks] = useState(false);
  const [exit, setExit] = useState(false);

  function menu() {
    setLinks(!links);
    setExit(!exit);
  }

  return (
    <div className="navbar">
      <img src={Image} className="navbar-logo" />
      <h1 className="navbar-title">Water Preservation</h1>
      <div>
        <ul className={`navbar-list ${links ? null : `navbar-list-none`}`}>
          <Link onClick={() => menu()} to="/AboutUs" className="navbar-links">
            <Link onClick={() => menu()} to="/AboutUs" className="navbar-link">
              About us
            </Link>
          </Link>
          <Link to="/OurGoal" onClick={() => menu()} className="navbar-links">
            <Link onClick={() => menu()} to="/OurGoal" className="navbar-link">
              Our goal
            </Link>
          </Link>

          <Link onClick={() => menu()} to="/ContactUs" className="navbar-links">
            <Link
              onClick={() => menu()}
              to="/ContactUs"
              className="navbar-link"
            >
              Contact us
            </Link>
          </Link>
        </ul>
        {exit ? (
          <FaTimes className="menu-exit" onClick={() => menu()} />
        ) : (
          <FaBars className="menu-bar" onClick={() => menu()} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
