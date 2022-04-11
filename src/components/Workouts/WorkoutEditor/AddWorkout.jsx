import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import WorkoutEditor from "./WorkoutEditor";
import { Exercise, Workout } from "../WorkoutClasses";
import "../Workouts.css";

function AddWorkout() {
  const [newWorkout] = useState(
    new Workout("", "", [new Exercise("", "", "")], "")
  );

  const navigate = useNavigate();

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

  const cancel = () => {
    navigate("/");
  };

  return (
    <WorkoutEditor
      title={"Add Workout"}
      workout={newWorkout}
      canDelete={false}
      addOrUpdateWorkout={addWorkout}
      onCancel={cancel}
    ></WorkoutEditor>
  );
}

export default AddWorkout;
