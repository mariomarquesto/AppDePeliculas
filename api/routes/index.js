const express = require("express");
const router = express.Router();
const moviesRoutes = require("./movies");
const userRoutes = require("./users")

router.use("/movies", moviesRoutes);
router.use("/users", userRoutes);

module.exports = router;
