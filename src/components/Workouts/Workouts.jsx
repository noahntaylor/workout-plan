import { Workout } from "./Workout";
import { Exercise } from "./Workout";
import "./Workouts.css";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrashCan,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Workouts() {
  const workoutsLabel = "Workouts";

  const workouts = [
    new Workout(
      "Workout 1: Push",
      "Weights targetting chest and triceps",
      [
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
      ],
      90
    ),
    new Workout(
      "Workout 2: Pull",
      "Weights targetting back and biceps",
      [
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
      ],
      90
    ),
    new Workout(
      "Workout 3: Legs",
      "Weights targetting legs",
      [
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
      ],
      90
    ),
    new Workout(
      "Workout 4: HIIT",
      "High intensity bodyweight workout",
      [
        new Exercise("Bench Press", 12),
        new Exercise("Bench Press", 12),
        new Exercise("Bench Press", 12),
      ],
      90
    ),
    new Workout(
      "Workout 5: Core Strength",
      "Bodyweight and core workout",
      [
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
        new Exercise("Bench Press", 12, 3),
      ],
      90
    ),
  ];

  // Temporarily populate workouts by instantiating class instances
  // TODO: Update to get workouts from database using fetch/axios
  useEffect(() => {
    // Add in call to server to fetch workouts
    console.log(`There are ${workouts.length} workouts!`);
  });

  const onDeleteWorkout = (workout) => {
    let index = workouts.indexOf(workout);
    workouts.splice(index, 1);
    console.log(`Workout ${index} deleted!`);
  };

  // TODO: Make function to use instead of repeating classes on table cells
  return (
    <div className="workouts-container">
      <h2 className="workouts-heading">{workoutsLabel}</h2>
      <table>
        <tbody>
          <tr>
            <th className="table-heading-cell">Workout Name</th>
            <th className="table-heading-cell">Description</th>
            <th className="table-heading-cell">Exercises</th>
            <th className="table-heading-cell">Duration</th>
          </tr>
          {workouts.map((wrkt, i) => (
            <WorkoutRow
              key={i}
              workout={wrkt}
              deleteWorkout={onDeleteWorkout}
            ></WorkoutRow>
          ))}
        </tbody>
      </table>
      <AddWorkout></AddWorkout>
    </div>
  );
}

function WorkoutRow(props) {
  const [editWorkout, setEditWorkout] = useState(false);
  const changeEdit = () => {
    setEditWorkout(!editWorkout);
  };

  const deleteWorkout = () => {
    props.deleteWorkout(props.workout);
  };

  if (editWorkout) {
    return (
      <EditWorkout title={"Edit Workout"} changeEdit={changeEdit}></EditWorkout>
    );
  } else {
    return (
      <tr className="table-row">
        <td className="table-cell">{props.workout.name}</td>
        <td className="table-cell">{props.workout.description}</td>
        <td className="table-cell">{props.workout.exercises.length}</td>
        <td className="table-cell">{props.workout.duration}</td>
        <td className="button-cell">
          <button className="workouts-button" onClick={changeEdit}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </td>
        <td className="button-cell">
          <button className="workouts-button" onClick={deleteWorkout}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </td>
      </tr>
    );
  }
}

function AddWorkout() {
  const [addWorkout, setAddWorkout] = useState(false);
  const changeEdit = () => {
    setAddWorkout(!addWorkout);
  };

  if (addWorkout) {
    return (
      <EditWorkout title={"Add Workout"} changeEdit={changeEdit}></EditWorkout>
    );
  } else {
    return (
      <div className="add-button-row">
        <button className="add-workout-button" onClick={changeEdit}>
          <FontAwesomeIcon icon={faCirclePlus} />
          <span className="button-text">New Workout</span>
        </button>
      </div>
    );
  }
}

function EditWorkout(props) {
  return (
    <tr>
      <div>
        <p>{props.title}</p>
        <button onClick={props.changeEdit}>Save</button>
        <button onClick={props.changeEdit}>Cancel</button>
      </div>
    </tr>
  );
}

// TODO: Add type checking to workouts
