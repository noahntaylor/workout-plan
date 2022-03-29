import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import "./Workouts.css";
import { Workout } from "./Workout";

function WorkoutRow(props) {
  const [workout, setWorkout] = useState(new Workout("", "", [], ""));

  useEffect(() => {
    setWorkout(props.workout);
    return;
  }, [props.workout]);

  return (
    <tr className="table-row">
      <td className="table-cell">
        <Link to={`/Workout/${workout._id}`} className="view-workout-link">
          <button className="workout-button-link">{workout.name}</button>
        </Link>
      </td>
      <td className="table-cell">{workout.description}</td>
      <td className="table-cell">{workout.exercises.length}</td>
      <td className="table-cell">{workout.duration}</td>
      <td className="button-cell">
        <Link to={`/EditWorkout/${workout._id}`}>
          <button className="workouts-button">
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default WorkoutRow;
