const express = require("express");
const router = express.Router();

const MoviesController = require("../controllers/movies");

router.get("/", MoviesController.getAll);


module.exports = router;
