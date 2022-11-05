import React, { useState } from "react";
import {
  FaCalendar,
  FaCalendarDay,
  FaHome,
  FaMapPin,
  FaMedal,
  FaRegCalendar,
  FaRegCalendarAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Usage.css";

const Usage = () => {
  const [calendar, setCalendar] = useState(false);
  const usage = true;
  const home = false;
  const map = false;
  function toggleCalendar() {
    setCalendar(!calendar);
  }
  return (
    <div>
      <div className="dashboard">
        <div className="leaderboard">
          <div className={`calendar-page ${calendar ? `show` : null}`}>
            <h1 className="calendar-pageTitle">Your Month's Calendar</h1>
            <img
              src="https://attachments.office.net/owa/10319796%40student.tusd.net/service.svc/s/GetAttachmentThumbnail?id=AAMkADk1YTVhZWI2LWM0MGQtNDk5NS1hZGUxLWY3MjRiYTNkMzllYwBGAAAAAAArwSjgmhtSQLG%2F%2FnzrNSM6BwBTztInw42kSpoAtZ60gzzvAAAAAAEMAABTztInw42kSpoAtZ60gzzvAAMEUn0wAAABEgAQADLajTFlaVVIudJBq1fYNW0%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiYjZiN2Y2ZjA0Njk1NDAzMmI2ZGQyYTEzMzdkNmVkMmUiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1MzgwMTExNTM2NjEwMTI3MFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZiMzZjMWJkLTlkNzUtNDQzNi1iOTNkLWU2NjQ1YzI5NGRmNlwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzE3NDM3MTk1Mi0yOTI1OTA5MDU0LTMzNDkxODc5NzktMTcyNzUwODhcIn0iLCJuYmYiOjE2Njc2ODA1MTIsImV4cCI6MTY2NzY4MTExMiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImhhcHAiOiJvd2EifQ.fk9zAqMhs3rzDfheeJUGuibQwkjeZflNbDfAvAAWBW8gfwaPANIVIyZ9rJGmmhyAXgH6t1_IqNCqaxdqIfeO-y--ptAg8845bkZGZCkWfle3j_la48yrggzJFHOLzW0eSud315_3C7nGj_lcjRBdJATsubePrtzdy0jN-XG2kJAzP9ukYpSn8Cf9gUOQyvqvcsBJbjpjm7gncuxL9OrifQtbkfv9cSkHUt940ZmrlznVXuLQOnAnwpKABHufj96c5gh2ctxEYjznAAlr3MmRBtIRchmfxFUfyLSlpejx1TNBiNnyaH-8gB6QPKySaOLTQaq_jwJofJoqTk1ulUxDvg&X-OWA-CANARY=ymQG98-vg0a4TA6x5rB5GJBcQT1tv9oY51i6nTMQiaylxdjXIqEOeOutaos2ckmSS_Oo7McrP9E.&owa=outlook.office365.com&scriptVer=20221028006.04&animation=true"
              alt=""
              className="calendar"
            />
          </div>
          {calendar ? (
            <div onClick={() => toggleCalendar()} className="calendarButton">
              <FaTimes />
            </div>
          ) : (
            <div onClick={() => toggleCalendar()} className="calendarButton">
              <FaRegCalendarAlt />
            </div>
          )}
          <div className="leaderboardInfo">
            <div className="leaderboard-title">Monthly Top 5 Leaderboard</div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="schoolImage"
            />
            <div className="schoolName">
              <b>Merrill F. West High School</b>
            </div>
            <div className="yourRanking">
              District Ranking:{" "}
              <b>
                <span className="yellow">
                  1st <FaMedal />
                </span>
              </b>
            </div>
          </div>
          <div className="leaderboardRankings">
            <div className="leaderboardHeading">
              <div className="leaderboardRank">Rank</div>
              <div className="leaderboardName">School Name</div>
              <div className="gallons">GALLONS</div>
            </div>
            <div className="leaderboardSchool first">
              <div className="leaderboardSchool-ranking">
                1st <FaMedal />
              </div>
              <div className="school">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="leaderboardSchool-image"
                />
                <div className="leaderboardSchool-name">West High School</div>
              </div>
              <div className="leaderboardSchool-gallons">
                <div className="number">19.4k</div>
              </div>
            </div>
            <div className="leaderboardSchool second">
              <div className="leaderboardSchool-ranking">
                2nd <FaMedal />
              </div>
              <div className="school">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZAUaqXXuKt9QEjVwBO7jViSF-o8BounSF4SuVbeR-A&s"
                  alt=""
                  className="leaderboardSchool-image"
                />
                <div className="leaderboardSchool-name">
                  Williams High School
                </div>
              </div>
              <div className="leaderboardSchool-gallons">
                <div className="number">23.5k</div>
              </div>
            </div>
            <div className="leaderboardSchool third">
              <div className="leaderboardSchool-ranking">
                3rd <FaMedal />
              </div>
              <div className="school">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="leaderboardSchool-image"
                />
                <div className="leaderboardSchool-name">
                  Jefferson High School
                </div>
              </div>
              <div className="leaderboardSchool-gallons">
                <div className="number">25.3k</div>
              </div>
            </div>
            <div className="leaderboardSchool">
              <div className="leaderboardSchool-ranking">4th</div>
              <div className="school">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="leaderboardSchool-image"
                />
                <div className="leaderboardSchool-name">
                  Discovery High School
                </div>
              </div>
              <div className="leaderboardSchool-gallons">
                <div className="number">27.8k</div>
              </div>
            </div>
            <div className="leaderboardSchool">
              <div className="leaderboardSchool-ranking">5th</div>
              <div className="school">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="leaderboardSchool-image"
                />
                <div className="leaderboardSchool-name">
                  Monte Vista High School
                </div>
              </div>
              <div className="leaderboardSchool-gallons">
                <div className="number">30.3k</div>
              </div>
            </div>
          </div>
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

export default Usage;
