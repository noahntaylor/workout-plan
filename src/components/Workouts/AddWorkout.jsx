import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import EditWorkout from "./EditWorkout";
import { Exercise, Workout } from "./Workout";
import "./Workouts.css";

function AddWorkout(props) {
  useEffect(() => {});

  const navigate = useNavigate();

  const [newWorkout] = useState(
    new Workout("", "", [new Exercise("", "", "")], "")
  );

  const addWorkout = async (workout) => {
    await fetch("http://localhost:5000/workouts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    console.log("Workout Added!");
    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <EditWorkout
      title={"Add Workout"}
      workout={newWorkout}
      addOrUpdateWorkout={addWorkout}
      onCancel={onCancel}
    ></EditWorkout>
  );
}

export default AddWorkout;
