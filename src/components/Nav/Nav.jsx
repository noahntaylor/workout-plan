import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

function Nav() {
  const appTitle = "Workout-Plan";
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
          <Link to={"/"} className="nav-link">
            {workoutsLabel}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
