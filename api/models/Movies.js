const S = require("sequelize");
const bcrypt = require("bcrypt");

const db = require("../config/db");

class Movie extends S.Model {}

Movie.init(
  {
    moviePin: {
      type: S.BIGINT,
    },
    title: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
    },
    img: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "movie",
  }
);

module.exports = Movie;
