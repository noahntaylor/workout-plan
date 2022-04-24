import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import WorkoutRow from "./WorkoutRow";
import "./Workouts.css";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const getWorkouts = async () => {
      const response = await fetch("/workouts");

      if (!response.ok) {
        window.alert(`An error occured: ${response.statusText}`);
        return;
      }

      const workouts = await response.json();
      setWorkouts(workouts);
    };

    getWorkouts();
    return;
  }, [workouts.length]);

  return (
    <div className="workouts-container">
      <h2 className="workouts-heading">Workouts</h2>
      <table>
        <tbody>
          <tr>
            <th className="table-heading-cell">Name</th>
            <th className="table-heading-cell descript-cell">Description</th>
            <th className="table-heading-cell">Exercises</th>
            <th className="table-heading-cell">Duration</th>
          </tr>
          {workouts.map((wrkt, i) => (
            <WorkoutRow key={i} workout={wrkt}></WorkoutRow>
          ))}
        </tbody>
      </table>
      <div className="add-button-row">
        <Link to="/AddWorkout">
          <button className="add-workout-button">
            <FontAwesomeIcon icon={faCirclePlus} />
            <span className="button-text">New Workout</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Workouts;
