import React from "react";
import axios from "axios";
import { apiUrl } from "./config";

export const MoviesContext = React.createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = React.useState({ movies: [] });

  React.useEffect(() => {
    async function fetchMovies() {
      const data = await axios("http://localhost:3000/movies");
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider value={movies}>{children}</MoviesContext.Provider>
  );
};
