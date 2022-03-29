import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Exercise } from "./Workout";
import "./Workouts.css";

function ExerciseRow(props) {
  const [exercise, setExercise] = useState(new Exercise("", "", ""));

  useEffect(() => {
    setExercise(props.exercise);
    return;
  }, [props.exercise]);

  return (
    <tr>
      <td className="exercise-table-cell">
        <span>{exercise.name}</span>
      </td>
      <td className="exercise-table-cell">
        <span>{exercise.sets}</span>
      </td>
      <td className="exercise-table-cell">
        <span>{exercise.reps}</span>
      </td>
    </tr>
  );
}

export default ExerciseRow;
