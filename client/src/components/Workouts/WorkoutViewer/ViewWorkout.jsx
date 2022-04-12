import { React, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import { Workout } from "../WorkoutClasses";
import ExerciseRow from "./ExerciseRow";
import "../Workouts.css";

function ViewWorkout() {
  const [workout, setWorkout] = useState(new Workout("", "", [], ""));
  const [exercises, setExercises] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getWorkout = async () => {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/workouts/${id}`);

      if (!response.ok) {
        window.alert(`An error has occurred: ${response.statusText}`);
        return;
      }

      const workout = await response.json();
      if (!workout) {
        window.alert(``);
      }

      setWorkout(workout);
      setExercises(workout.exercises);
      return;
    };

    getWorkout();
  }, [params.id, navigate]);

  return (
    <div className="view-workout-container">
      <div className="edit-workout-title-row">
        <p className="workout-label">{workout.name}</p>
        <span>
          <Link to={`/EditWorkout/${workout._id}`}>
            <button className="add-workout-button">
              <FontAwesomeIcon icon={faPencil} />
            </button>
          </Link>
        </span>
      </div>
      <div className="view-workout-row">
        <div className="input desript-input">
          <div>{workout.description}</div>
        </div>
        <div className="input duration-input">
          <div>{workout.duration}</div>
        </div>
      </div>
      <div className="edit-workout-row">
        <p className="view-exercises-label">Exercises:</p>
      </div>
      <div>
        <table className="exercise-table">
          <thead>
            <tr>
              <th className="view-exercise-table-heading-cell">Name</th>
              <th className="view-exercise-table-heading-cell">Sets</th>
              <th className="view-exercise-table-heading-cell">Reps</th>
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
