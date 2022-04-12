import { React, useState, useEffect } from "react";

import { Exercise } from "../WorkoutClasses";
import "../Workouts.css";

function ExerciseRow(props) {
  const [exercise, setExercise] = useState(new Exercise("", "", ""));

  useEffect(() => {
    setExercise(props.exercise);
    return;
  }, [props.exercise]);

  return (
    <tr>
      <td className="table-cell">{exercise.name}</td>
      <td className="table-cell">{exercise.sets}</td>
      <td className="table-cell">{exercise.reps}</td>
    </tr>
  );
}

export default ExerciseRow;
