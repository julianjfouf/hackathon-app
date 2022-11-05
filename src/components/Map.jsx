import React, { useState } from "react";
import { FaHome, FaMapPin, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Map.css";

const Map = () => {
  const [pin1, setPin1] = useState(false);
  const [pin2, setPin2] = useState(false);
  const [pin3, setPin3] = useState(false);
  const [pin4, setPin4] = useState(false);
  const usage = false;
  const map = true;
  const home = false;
  function pin1fn() {
    setPin1(!pin1);
  }

  function pin2fn() {
    setPin2(!pin2);
  }

  function pin3fn() {
    setPin3(!pin3);
  }

  function pin4fn() {
    setPin4(!pin4);
  }
  return (
    <div className="map">
      <div className="dashboard">
        <div className="mapMap">
          <div className="map-mapName">Map of Merrill F. West High</div>
          <img
            src="https://attachments.office.net/owa/10319796%40student.tusd.net/service.svc/s/GetAttachmentThumbnail?id=AAMkADk1YTVhZWI2LWM0MGQtNDk5NS1hZGUxLWY3MjRiYTNkMzllYwBGAAAAAAArwSjgmhtSQLG%2F%2FnzrNSM6BwBTztInw42kSpoAtZ60gzzvAAAAAAEMAABTztInw42kSpoAtZ60gzzvAAMEUn0rAAABEgAQAPD5gVyUdo1OmkIttogJgsQ%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiYjZiN2Y2ZjA0Njk1NDAzMmI2ZGQyYTEzMzdkNmVkMmUiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1MzgwMTExNTM2NjEwMTI3MFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZiMzZjMWJkLTlkNzUtNDQzNi1iOTNkLWU2NjQ1YzI5NGRmNlwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzE3NDM3MTk1Mi0yOTI1OTA5MDU0LTMzNDkxODc5NzktMTcyNzUwODhcIn0iLCJuYmYiOjE2Njc2NzE3ODUsImV4cCI6MTY2NzY3MjM4NSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImhhcHAiOiJvd2EifQ.wS9Zk3E-ucovZM0I9TyG1emA4ZGL4n70hxEqinW2Noic1cZfmhqE9xPEsy4tm5yNewwJInWzfl8gKdXeUROlvjLqRWOdEvwiQfYIdv_dcZ28WcH4Q1d0dq3PeFVhFYlCl7KwVUrO7F4UeczfkZ4esQIE3-wUlLLdlqthHuxsYfSo_69GR5XaIkbQP4QJ8r9vdI99U_WaTPdxc7nkW3sdIUre7uyxfn8fvOl3KVphQmeOOl0GRAYml_NVk0GMgHhguaDruMf7gCu50OkcXX1bSBclEXr3CqWHMiZJ7B--D8VhqwgP0KZcKzREO8A_KuhgkwWWHEuyblaYt4WqioaNrA&X-OWA-CANARY=hyJpM9FQD0eofOJcD754oKCBrHpZv9oYSDt3-LLKs768O7CJybU0xGQTZ0mJ5bWB_Qfxhy_aaPw.&owa=outlook.office365.com&scriptVer=20221028006.04&animation=true"
            alt=""
            className="map-schoolMap"
          />
          <FaMapPin onClick={() => pin1fn()} className="mapPin1" />
          {pin1 ? (
            <div className="pin1Info">
              <div className="pin1Title">Irrigation Sensor A</div>
              <div className="pin1Data">
                <p className="pin1Stat">Water Used: 800 gallons</p>
                <p className="pin1Stat">
                  Water Usage: <span className="orange">HIGH</span>{" "}
                </p>
              </div>
            </div>
          ) : null}
          <FaMapPin onClick={() => pin2fn()} className="mapPin2" />
          {pin2 ? (
            <div className="pin2Info">
              <div className="pin1Title">Irrigation Sensor B</div>
              <div className="pin1Data">
                <p className="pin1Stat">Water Used: 1.2k gallons</p>
                <p className="pin1Stat">
                  Water Usage: <span className="red">ABNORMAL</span>{" "}
                </p>
              </div>
            </div>
          ) : null}
          <FaMapPin onClick={() => pin3fn()} className="mapPin3" />
          {pin3 ? (
            <div className="pin3Info">
              <div className="pin1Title">Bathroom Sensor 2</div>
              <div className="pin1Data">
                <p className="pin1Stat">Water Used: 180 gallons</p>
                <p className="pin1Stat">
                  Water Usage: <span className="yellow">Satisfactory</span>{" "}
                </p>
              </div>
            </div>
          ) : null}
          <FaMapPin onClick={() => pin4fn()} className="mapPin4" />
          {pin4 ? (
            <div className="pin4Info">
              <div className="pin1Title">Bathroom Sensor 1</div>
              <div className="pin1Data">
                <p className="pin1Stat">Water Used: 120 gallons</p>
                <p className="pin1Stat">
                  Water Usage: <span className="green">OPTIMAL</span>{" "}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom-navbar">
          <div className={`navbar-icon ${home ? `selected` : null}`}>
            <Link to="/Dashboard" className="navbarLink">
              <FaHome className="navbarIcon" />
              <p className="iconName">HOME</p>
            </Link>
          </div>
          <div className={`navbar-icon ${map ? `selected` : null}`}>
            <Link to="/Map" className="navbarLink">
              <FaMapPin className="navbarIcon" />
              <p className="iconName">MAP</p>
            </Link>
          </div>
          <div className={`navbar-icon ${usage ? `selected` : null}`}>
            <Link to="/Usage" className="navbarLink">
              <FaUser className="navbarIcon" />
              <p className="iconName">USAGE</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
