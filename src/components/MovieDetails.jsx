import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Details from "../commons/Details";

const MovieDetails = ({ data }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`
      )
      .then((res) => setMovie(res.data));
  }, []);

  return (
    <>
      <Details data={movie} />
    </>
  );
};

export default MovieDetails;
