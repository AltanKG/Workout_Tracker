const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("index.html");
});

router.get("/exercise", async (req, res) => {
  res.render("exercise.html");
});

router.get("/stats", async (req, res) => {
  res.render("stats.html");
});

module.exports = router;
