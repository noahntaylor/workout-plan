import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AddWorkout from "./components/Workouts/WorkoutEditor/AddWorkout";
import UpdateWorkout from "./components/Workouts/WorkoutEditor/UpdateWorkout";
import ViewWorkout from "./components/Workouts/WorkoutViewer/ViewWorkout";
import Workouts from "./components/Workouts/Workouts";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Workouts />} />
          <Route path="/AddWorkout" element={<AddWorkout />} />
          <Route path="/EditWorkout/:id" element={<UpdateWorkout />} />
          <Route path="/Workout/:id" element={<ViewWorkout />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
