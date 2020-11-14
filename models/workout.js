const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default:Date.now
  },
  exercises: [{
    type: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
      trim: true,
    },
    distance: {
      type: Number,
      trim: true,
      allowNull: true,
    },
    weight: {
      type: Number,
      trim: true,
      allowNull: true,
    },
    sets: {
      type: Number,
      trim: true,
      allowNull: true,
    },
    reps: {
      type: Number,
      trim: true,
      allowNull: true,
    }
  }]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
