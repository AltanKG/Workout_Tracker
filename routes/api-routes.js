const router = require("express").Router();
const { db } = require("../models/workouts");
const Workout = require("../models/workouts");
const { route } = require("./html-routes");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      // let total = 0;
      // for (i = 0; i < parseInt(dbWorkout.length); i++) {
      //   total += parseInt(dbWorkout[i].exercises.duration[0]);
      //   dbWorkout[i].totalDuration = total;
      //   console.log(total);
      //   return total;
      // }
      res.json(dbWorkout);
      // consolee.log(total);
      // console.log(parseInt(dbWorkout[1].exercises.duration[0]));
      // console.log(dbWorkout[1]);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
