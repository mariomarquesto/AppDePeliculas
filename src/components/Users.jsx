import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      {user ? (
        <div className="row mt-3">
          <div className="col-lg-3">
            <img
              src={`https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png`}
              className="img-fluid rounded-circle"
              alt="Profile"
            />
          </div>
          <div className="col-lg-9 d-flex align-items-center">
            <h1 className="display-4">
              {(user.name + " " + user.lastname).toUpperCase()}
            </h1>
          </div>
        </div>
      ) : (
        <div className="row mt-3">
          <div className="col">
            <h1 className="display-4 text-center">USER NOT FOUND</h1>
          </div>
        </div>
      )}

      {user && (
        <div className="row mt-3">
          <div className="col">
            <div className="d-flex justify-content-center">
              <h2>{user.favorites && user.favorites.length} Favorites</h2>
            </div>
            <div className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {user.favorites &&
                  user.favorites.map((data, i) => (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      key={i}
                    >
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`https://image.tmdb.org/t/p/original/${data.img}`}
                              className="img-fluid rounded-start"
                              alt={data.title}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h3 className="card-title">{data.title}</h3>
                              <p className="card-text">
                                {data.description.slice(0, 200) + "..."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target=".carousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target=".carousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
