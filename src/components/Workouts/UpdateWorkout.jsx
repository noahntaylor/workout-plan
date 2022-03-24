import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EditWorkout from "./EditWorkout";
import { Workout } from "./Workout";
import "./Workouts.css";

function UpdateWorkout(props) {
  const [editWorkout, setEditWorkout] = useState(new Workout("", "", [], ""));
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getEditWorkout = async () => {
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

      setEditWorkout(workout);
      return;
    };

    getEditWorkout();
  }, [params.id, navigate]);

  const updateWorkout = async (workout) => {
    const id = params.id.toString();
    await fetch(`http://localhost:5000/workouts/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    console.log("Workout updated!");
    navigate("/");
  };

  const deleteWorkout = async () => {
    const id = params.id.toString();
    await fetch(`http://localhost:5000/workouts/delete/${id}`, {
      method: "DELETE",
    }).catch((error) => {
      window.alert(error);
      return;
    });

    console.log("Workout Deleted!");
    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <EditWorkout
      title={"Edit Workout"}
      workout={editWorkout}
      canDelete={true}
      addOrUpdateWorkout={updateWorkout}
      onDeleteWorkout={deleteWorkout}
      onCancel={onCancel}
    ></EditWorkout>
  );
}

export default UpdateWorkout;
