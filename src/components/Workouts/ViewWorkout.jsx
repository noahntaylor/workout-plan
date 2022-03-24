import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import { Exercise, Workout } from "./Workout";
import ExerciseRow from "./ExerciseRow";
import "./Workouts.css";

function ViewWorkout(props) {
  const [workout, setWorkout] = useState(new Workout("", "", [], ""));
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setWorkout(props.workout);
    setExercises(props.workout.exercises);
    return;
  }, [props.workout]);

  return (
    <div className="edit-workout-container">
      <div className="edit-workout-title-row">
        <p className="workout-label">{workout.name}</p>
        <span>
          <button className="add-workout-button">
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </span>
      </div>
      <div className="edit-workout-row">
        <div className="input desript-input">
          <div>{workout.description}</div>
        </div>
        <div className="input duration-input">
          <div>{workout.duration}</div>
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
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, i) => (
              <ExerciseRow key={i} exercise={exercise}></ExerciseRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewWorkout;
