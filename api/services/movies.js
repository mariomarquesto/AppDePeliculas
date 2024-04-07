const axios = require("axios");
/* https://api.themoviedb.org/3/movie/550?api_key=425c2d87b8b9c812c4101db1f80fd9e5 */

const tmdbAPI = "https://api.themoviedb.org/3";
const apiKey = "425c2d87b8b9c812c4101db1f80fd9e5";

class MovieService {
  static async getAll() {
    try {
      const resp = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=425c2d87b8b9c812c4101db1f80fd9e5 `);
      return { error: false, data: resp.data };
    } catch ({ response }) {
      const { error } = response.data;
      console.error(error);
      return { error: true, data: error };
    }
  }
}

module.exports = MovieService;
