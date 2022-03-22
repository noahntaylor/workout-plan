import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import EditWorkout from "./EditWorkout";
import { Exercise, Workout } from "./Workout";
import "./Workouts.css";

function UpdateWorkout(props) {
  const [editWorkout, setEditWorkout] = useState(
    new Workout(
      "Edit workout name",
      "string",
      [new Exercise("Pull ups", "23", "2")],
      "200"
    )
  );

  const navigate = useNavigate();

  const updateWorkout = () => {
    console.log("Workout updated!");
    navigate("/");
  };

  const deleteWorkout = () => {
    props.deleteWorkout(props.workout);
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <EditWorkout
      title={"Edit Workout"}
      workout={editWorkout}
      addOrUpdateWorkout={updateWorkout}
      onCancel={onCancel}
    ></EditWorkout>
  );
}

export default UpdateWorkout;
