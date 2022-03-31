import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

function Nav() {
  const appTitle = "Wrkt-Plan";
  const calendarLabel = "Calendar";
  const workoutsLabel = "Workouts";
  const signUpLabel = "Sign Up";

  return (
    <div className="nav-container">
      <Link to={"/"} className="nav-home-link">
        <h1 className="nav-heading">
          <FontAwesomeIcon icon={faDumbbell} className="logo" />
          {appTitle}
        </h1>
      </Link>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li className="nav-link">{calendarLabel}</li>
          <li className="nav-link">{workoutsLabel}</li>
          <li className="nav-link-signup">{signUpLabel}</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
