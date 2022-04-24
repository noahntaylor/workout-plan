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
  }, [props.exercise]);

  const updateName = (value) => {
    updateExercise(value);

    let exercises = [...props.exercises];
    let exer = { ...exercises[props.index] };
    exer.name = value.name;
    exercises[props.index] = exer;
    console.log(exercises);
    props.updateWorkout({ exercises: exercises });
  };

  const updateSets = (value) => {
    updateExercise(value);

    let exercises = [...props.exercises];
    let exer = { ...exercises[props.index] };
    exer.sets = value.sets;
    exercises[props.index] = exer;
    console.log(exercises);
    props.updateWorkout({ exercises: exercises });
  };

  const updateReps = (value) => {
    updateExercise(value);

    let exercises = [...props.exercises];
    let exer = { ...exercises[props.index] };
    exer.reps = value.reps;
    exercises[props.index] = exer;
    console.log(exercises);
    props.updateWorkout({ exercises: exercises });
  };

  const updateExercise = (value) => {
    return setExercise((prev) => {
      return { ...prev, ...value };
    });
  };

  const saveExercise = () => {};

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
          onChange={(e) => {
            updateName({ name: e.target.value });
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
            updateSets({
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
            updateReps({
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
