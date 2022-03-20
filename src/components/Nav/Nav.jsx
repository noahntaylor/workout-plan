import React from "react";
import "./Nav.css";

function Nav() {
  const appTitle = "Wrkt-Plan";
  const calendarLabel = "Calendar";
  const workoutsLabel = "Workouts";
  const signUpLabel = "Sign Up";

  return (
    <div className="nav-container">
      <h1 className="nav-heading">{appTitle}</h1>
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
