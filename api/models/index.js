const Users = require("./Users");
const Movies = require("./Movies");

Movies.belongsToMany(Users, { through: "favorites_movies", as: "favorites" });
Users.belongsToMany(Movies, { through: "favorites_movies", as: "favorites" });

module.exports = { Users, Movies };
