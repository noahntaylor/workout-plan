const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const workoutRoutes = express.Router();
const db = require("../db/conn");

// GET all workouts
workoutRoutes.route("/workouts").get(function (req, res) {
  var data = db.getData("workouts");
  data
    .collection("workouts")
    .find({})
    .toArray(function (error, result) {
      if (error) {
        throw error;
      }

      res.json(result);
    });
});

// GET workout by ID
workoutRoutes.route("workouts/:id").get(function (req, res) {
  var data = db.getData("workouts");
  var query = { _id: ObjectId(req.params.id) };
  data.collection("workouts").findOne(query, function (error, result) {
    if (error) {
      throw error;
    }

    res.json(result);
  });
});

// POST new workout
workoutRoutes.route("workouts/add").post(function (req, res) {
  var data = db.getData("workouts");
  var newWorkout = {
    name: req.body.workout.name,
    exercises: req.body.workout.exercises,
  };
  data.collection("workouts").insertOne(newWorkout, function (error, result) {
    if (error) {
      throw error;
    }

    res.json(result);
  });
});

// POST update workout by ID
workoutRoutes.route("workouts/update/:id").post(function (req, res) {
  var data = db.getData("workouts");
  var query = { _id: ObjectId(req.params.id) };
  var updatedWorkout = {
    $set: {
      workout_name: req.body.workout.name,
      workout_exercises: req.body.workout.exercises,
    },
  };
  data
    .collection("workouts")
    .updateOne(query, updatedWorkout, function (error, result) {
      if (error) {
        throw error;
      }

      res.json(result);
    });
});

// DELETE workout by ID
workoutRoutes.route("workouts/delete/:id").delete(function (req, res) {
  var data = db.getData("workouts");
  var query = { _id: ObjectId(req.params.id) };
  data.collection("workouts").deleteOne(query, function (error, result) {
    if (error) {
      throw error;
    }

    res.json(result);
  });
});

module.exports = workoutRoutes;
