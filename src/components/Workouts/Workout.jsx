export class Workout {
  constructor(name, description, exercises, duration) {
    this.name = name;
    this.description = description;
    this.exercises = exercises;
    this.duration = duration;
  }
}

export class Exercise {
  constructor(name, reps, sets) {
    this.name = name;
    this.reps = reps;
    this.sets = sets;
  }
}
