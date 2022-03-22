import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import "./Workouts.css";

function WorkoutRow(props) {
  useEffect(() => {});

  return (
    <tr className="table-row">
      <td className="table-cell">{props.workout.name}</td>
      <td className="table-cell">{props.workout.description}</td>
      <td className="table-cell">{props.workout.exercises.length}</td>
      <td className="table-cell">{props.workout.duration}</td>
      <td className="button-cell">
        <Link to="/EditWorkout">
          <button className="workouts-button">
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default WorkoutRow;
