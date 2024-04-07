import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import HomeSeries from "./components/HomeSeries";
import Users from "./components/Users";

const App = () => {
  // Estado para almacenar los géneros de películas
  const [genre, setGenre] = useState([]);
  // Estado para almacenar las películas populares
  const [populars, setPopulars] = useState([]);
  // Estado para almacenar las series populares
  const [seriePopulars, setSeriePopulars] = useState([]);
  // Estado para controlar la carga de datos
  const [loading, setLoading] = useState(true);
  // Estado para almacenar errores en caso de que ocurran
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función asincrónica para realizar las peticiones a la API
    const fetchData = async () => {
      try {
        // Obtener los géneros de películas desde la API
        const genreResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US`
        );
        setGenre(genreResponse.data.genres);

        // Obtener las películas populares desde la API
        const popularsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
        );
        setPopulars(popularsResponse.data.results);

        // Obtener las series populares desde la API
        const seriePopularsResponse = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=425c2d87b8b9c812c4101db1f80fd9e5&language=en-US&page=1`
        );
        setSeriePopulars(seriePopularsResponse.data.results);

        // Cambiar el estado de carga a falso cuando se completan las peticiones
        setLoading(false);
      } catch (error) {
        // Manejar errores si las peticiones fallan
        setError(error.message);
        setLoading(false);
      }
    };

    // Llamar a la función fetchData al montar el componente
    fetchData();
  }, []);

  // Si el estado de carga es true, mostrar "Cargando..."
  if (loading) return <div>Loading...</div>;
  // Si hay un error, mostrar el mensaje de error
  if (error) return <div>Error: {error}</div>;

  // Renderizar la aplicación con los componentes y rutas
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home genre={genre} populars={populars} />} />
        <Route path="/series" element={<HomeSeries populars={seriePopulars} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
