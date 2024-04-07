const MoviesService = require("../services/movies");
const axios = require("axios");

class MoviesController {
  static async getAll(req, res) {
    /*     const { error, data } = await MoviesService.getAll;

    if (error) {
      return res.status(data.status || 500).send({ message: data.message });
    } */

    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=425c2d87b8b9c812c4101db1f80fd9e5 `
    );

    console.log(resp.data);
    res.send(data);
  }
}

module.exports = MoviesController;
