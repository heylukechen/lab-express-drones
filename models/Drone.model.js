// Iteration #1
const mongooese = require("mongoose");
const Schema = mongooese.Schema;

const droneSchema = new Schema({
  name: {
    type: String,
  },
  propellers: {
    type: Number,
  },
  maxSpeed: {
    type: Number,
  }
});

const Drone = mongooese.model("Drone",droneSchema);
module.exports = Drone; 