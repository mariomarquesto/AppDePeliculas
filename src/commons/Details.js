import React from "react";
const Details = ({ data }) => {
  return (
    <>
      <div className="row p-5 bg-secondary bg-gradient">
        <div className="col-4 ">
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-8 pt-5 text-center text-light">
          <h1 className="text-warning">{data.title + " ( " + data.release_date + " )"}</h1>
          <h5 className="pt-5">{data.overview}</h5>
          <h1 className="pt-5 text-warning">Popularity: {data.popularity}</h1>
          <a href={`${data.homepage}`} className="text-light pt-5">Home Page of {data.title}</a>
        </div>
      </div>
    </>
  );
};

export default Details;
