import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import WorkoutEditor from "./WorkoutEditor";
import { Workout } from "../WorkoutClasses";
import "../Workouts.css";

function UpdateWorkout() {
  const [editWorkout, setEditWorkout] = useState(new Workout("", "", [], ""));
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getEditWorkout = async () => {
      const id = params.id.toString();
      const response = await fetch(`/workouts/${id}`);

      if (!response.ok) {
        window.alert(`An error has occurred: ${response.statusText}`);
        return;
      }

      const workout = await response.json();
      if (!workout) {
        window.alert(``);
      }

      setEditWorkout(workout);
      return;
    };

    getEditWorkout();
  }, [params.id, navigate]);

  const updateWorkout = async (workout) => {
    const id = params.id.toString();
    await fetch(`/workouts/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    navigate(`/Workout/${id}`);
  };

  const deleteWorkout = async () => {
    const id = params.id.toString();
    await fetch(`/workouts/delete/${id}`, {
      method: "DELETE",
    }).catch((error) => {
      window.alert(error);
      return;
    });

    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <WorkoutEditor
      title={"Edit Workout"}
      workout={editWorkout}
      canDelete={true}
      addOrUpdateWorkout={updateWorkout}
      onDeleteWorkout={deleteWorkout}
      onCancel={onCancel}
    ></WorkoutEditor>
  );
}

export default UpdateWorkout;
