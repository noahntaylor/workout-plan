import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Exercise } from "./Workout";
import "./Workouts.css";

function ExerciseEditor(props) {
  const [exercise, setExercise] = useState(new Exercise("", "", ""));

  useEffect(() => {
    setExercise(props.exercise);
    return;
  }, [props.exercise]);

  const updateExercise = (value) => {
    return setExercise((prev) => {
      return { ...prev, ...value };
    });
  };

  const deleteExercise = () => {
    props.onDeleteExercise(exercise);
  };

  return (
    <tr>
      <td className="exercise-table-cell">
        <input
          type="text"
          placeholder="Exercise name"
          value={exercise.name}
          onChange={(e) =>
            updateExercise({
              name: e.target.value,
            })
          }
        />
      </td>
      <td className="exercise-table-cell">
        <input
          type="text"
          placeholder="Sets"
          value={exercise.sets}
          onChange={(e) =>
            updateExercise({
              sets: e.target.value,
            })
          }
        />
      </td>
      <td className="exercise-table-cell">
        <input
          type="text"
          placeholder="Reps"
          value={exercise.reps}
          onChange={(e) =>
            updateExercise({
              reps: e.target.value,
            })
          }
        />
      </td>
      <td className="exercise-table-cell">
        <button className="workouts-button" onClick={deleteExercise}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
}

export default ExerciseEditor;
