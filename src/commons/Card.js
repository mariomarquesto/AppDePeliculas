import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  const addFavorites = (data) => {
    axios.post("http://localhost:3001/api/users/favorites", {
      userId: user.id,
      movie: data,
    });
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-5" key={data.id}>
      <div className="card">
        <Link to={`/movieDetails/${data.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{data.original_title}</h5>
          <p className="card-text">{data.overview.slice(0, 80) + "..."}</p>
          <p className="text-info">Click in the image for more details</p>
          <button
            className="btn btn-primary"
            onClick={() => addFavorites(data)}
          >
            Add To Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
