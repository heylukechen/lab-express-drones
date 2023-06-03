// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/drones")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return Drone.create(drones);
  }).then(()=>{
    console.log("Drone created")
    mongoose.connection.close()
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

// Drone.create(drones)
//   .then(mongoose.connection.close())
//   .catch((err) => console.log(err));
