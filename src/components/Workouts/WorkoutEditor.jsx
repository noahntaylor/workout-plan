import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { Exercise, Workout } from "./Workout";
import ExerciseEditor from "./ExerciseEditor";
import "./Workouts.css";

function WorkoutEditor(props) {
  const [workout, setWorkout] = useState(new Workout("", "", [], ""));
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setWorkout(props.workout);
    setExercises(props.workout.exercises);
    return;
  }, [props.workout]);

  const updateWorkout = (value) => {
    return setWorkout((prev) => {
      return { ...prev, ...value };
    });
  };

  const addOrUpdateWorkout = () => {
    props.addOrUpdateWorkout(workout);
  };

  const deleteWorkout = () => {
    if (props.onDeleteWorkout) {
      props.onDeleteWorkout();
    }
  };

  const addExercise = () => {
    setExercises((prev) => [...prev, new Exercise("", "", "")]);
    console.log("Exercise Added!");
  };

  const deleteExercise = (exercise) => {
    let index = exercises.indexOf(exercise);
    setExercises(
      exercises.filter((exerc) => exercises.indexOf(exerc) != index)
    );
    console.log("Exercise Deleted!");
  };

  const cancel = () => {
    props.onCancel();
  };

  return (
    <div className="edit-workout-container">
      <div className="edit-workout-title-row">
        <p className="workout-label">{props.title}</p>
        <span>
          <button className="add-workout-button" onClick={addOrUpdateWorkout}>
            Save
          </button>
          <button className="add-workout-button" onClick={cancel}>
            Cancel
          </button>
        </span>
      </div>
      <div className="edit-workout-row">
        <div className="input name-input">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Workout name"
            value={workout.name}
            onChange={(e) => updateWorkout({ name: e.target.value })}
          />
        </div>
        <div className="input desript-input">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            value={workout.description}
            onChange={(e) => updateWorkout({ description: e.target.value })}
          />
        </div>
        <div className="input duration-input">
          <label htmlFor="duration">Duration:</label>
          <input
            id="duration"
            name="duration"
            type="text"
            placeholder="Duration"
            value={workout.duration}
            onChange={(e) => updateWorkout({ duration: e.target.value })}
          />
        </div>
      </div>
      <div className="edit-workout-row">
        <p className="exercises-label">Exercises:</p>
      </div>
      <div>
        <table className="exercise-table">
          <thead>
            <tr>
              <th className="exercise-table-heading-cell">Name</th>
              <th className="exercise-table-heading-cell">Sets</th>
              <th className="exercise-table-heading-cell">Reps</th>
              <th>
                <button className="workouts-button" onClick={addExercise}>
                  <FontAwesomeIcon icon={faCirclePlus} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, i) => (
              <ExerciseEditor
                key={i}
                exercise={exercise}
                onAddExercise={addExercise}
                onDeleteExercise={deleteExercise}
              ></ExerciseEditor>
            ))}
          </tbody>
        </table>
      </div>
      {props.canDelete && (
        <div className="delete-button-row">
          <button className="add-workout-button" onClick={deleteWorkout}>
            <FontAwesomeIcon icon={faTrashCan} />
            <span className="delete-button-text">Delete Workout</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default WorkoutEditor;