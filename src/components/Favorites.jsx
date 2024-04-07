import axios from "axios";
import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/favorites/${user.id}`)
      .then((res) => setFavorites(res.data));
  }, []);

  const removeFavorites = (id) => {
    axios
      .delete(
        `http://localhost:3001/api/users/favorites/?userId=${user.id}&movieId=${id}`
      )
  };
  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">Favorites</h1>
        <div className="row">
          {favorites.map((data, i) => (
            <div className="col-3 mt-5" key={i}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.img}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">
                    {data.description.slice(0, 80) + "..."}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFavorites(data.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
