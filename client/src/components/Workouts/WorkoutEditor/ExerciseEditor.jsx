import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { Exercise } from "../WorkoutClasses";
import "../Workouts.css";

function ExerciseEditor(props) {
  const [exercise, setExercise] = useState(new Exercise("", "", ""));

  useEffect(() => {
    setExercise(props.exercise);
    return;
  }, [props.exercise.name, props.exercise.sets, props.exercise.reps]);

  const updateExercise = (value) => {
    setExercise((prev) => {
      return { ...prev, ...value };
    });

    var exercises = props.exercises;
    exercises.splice(props.index, 1, exercise);
    props.setExercises(exercises);
    props.updateWorkout({ exercises: exercises });
  };

  const deleteExercise = () => {
    var exercises = props.exercises;
    exercises.splice(props.index, 1);
    props.setExercises(exercises);
    props.updateWorkout({ exercises: exercises });
  };

  return (
    <tr>
      <td className="exercise-table-cell">
        <input
          type="text"
          placeholder="Exercise name"
          className="exercise-input"
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
          className="exercise-input"
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
          className="exercise-input"
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
