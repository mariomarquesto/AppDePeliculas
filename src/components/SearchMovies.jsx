import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "../commons/Card";

const SearchMovies = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&query=${value}&page=1&include_adult=false`
      )
      .then((res) => setMovies(res.data.results));

    setValue("");
  };
  return (
    <>
      <div
        className="  py-4 pt-5 pb-5"
        style={{ paddingLeft: 400, paddingRight: 400 }}
      >
        <h5 className="mb-5">
        "Explore a Vast Universe of Movies"
        </h5>
        <h5 className="mb-5">
        " Start Discovering Now!"
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search Movie"
              className="form-control text-center"
              onChange={handleValue}
              value={value}
            />
          </div>
        </form>
      </div>

      <div className="row container-fluid">
        {movies.map((data, i) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default SearchMovies;
