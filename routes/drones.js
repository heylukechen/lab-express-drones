const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", (req, res, next) => {
  Drone.find().then((results) => {
    res.render("./drones/list", { results });
  });
});

router.get("/drones/create", (req, res, next) => {
  res.render("./drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  Drone.findById(req.params.id)
    .then((results) => {
      console.log(results);
      res.render("./drones/update-form", { existingValue: results });
    })
    .catch((err) => console.log(err));
});

router.post("/drones/:id/edit", (req, res) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(
    id,
    {
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed,
    },
    { new: true }
  )
    .then((updateDrone) => {
      console.log("updateDrone", updateDrone);
      res.redirect(`/drones`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/drones/${id}/edit`);
    });
});

//handle ths delet action
router.post("/drones/:id/delete", (req, res) => {
  const { id } = req.params;
  Drone.findByIdAndRemove(id)
    .then((deletedDrone) => {
      console.log("deletedDrone", deletedDrone);
      res.redirect("/drones");
    })
    .catch((err) => console.log(err));
});

module.exports = router;