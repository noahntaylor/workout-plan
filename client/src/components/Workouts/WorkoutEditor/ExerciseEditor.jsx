import { React, useState, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Exercise } from "../WorkoutClasses";
import "../Workouts.css";

function ExerciseEditor(props) {
  const [exercise, setExercise] = useState(new Exercise("", "", ""));

  useEffect(() => {
    setExercise(props.exercise);
    return;
  }, [props.exercise]);

  const updateExercise = (type, value) => {
    props.updateExercises(type, value, props.index);

    return setExercise((prev) => {
      return { ...prev, ...value };
    });
  };

  const deleteExercise = () => {
    var exercs = [...props.exercises];
    exercs.splice(props.index, 1);
    props.setExercises(exercs);
    props.updateWorkout({ exercises: exercs });
  };

  return (
    <tr>
      <td className="exercise-table-cell">
        <input
          type="text"
          placeholder="Exercise name"
          className="exercise-input"
          value={exercise.name}
          onChange={(e) => {
            updateExercise("updateName", { name: e.target.value });
          }}
        />
      </td>
      <td className="exercise-table-cell">
        <input
          type="text"
          placeholder="Sets"
          className="exercise-input"
          value={exercise.sets}
          onChange={(e) =>
            updateExercise("updateSets", {
              sets: e.target.value,
            })
          }
        />
      </td>
      <td className="exercise-table-cell">
        <input
          type="text"
          placeholder="Reps"
          className="exercise-input"
          value={exercise.reps}
          onChange={(e) =>
            updateExercise("updateReps", {
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
