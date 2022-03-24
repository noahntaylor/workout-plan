import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import AddWorkout from "./components/Workouts/AddWorkout";
import UpdateWorkout from "./components/Workouts/UpdateWorkout";
import Workouts from "./components/Workouts/Workouts";

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Workouts />} />
          <Route path="/AddWorkout" element={<AddWorkout />} />
          <Route path="/EditWorkout/:id" element={<UpdateWorkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
