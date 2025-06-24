import React, { useEffect, useState } from "react";
import "./App.css";
import movies from "./data/movies.json";
import { MovieService } from "./core/service/MovieService";
import { JSONMovieRepository } from "./core/infraestructure/JSONMovieRepository";

const Movie = ({ title, year }) => {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
      </div>
    </div>
  );
};

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies,setSearchedMovies] = useState([]);
  const movieService = new MovieService(new JSONMovieRepository());

  useEffect(()=>{
    const movies = movieService.searchByTitle(searchTerm);
    if(movies) {
      setSearchedMovies(movies);
    }
  },[searchTerm])
  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 Movie Search</h1>
        <p className="subtitle">Encuentra tu película favorita</p>
      </header>

      <main className="main-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar películas por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {searchedMovies && searchedMovies.length === 0 && (
          <div>
            No se encontraron películas
          </div>
        )}
        {searchedMovies && searchedMovies.length > 0 && (
          <div>
            {
              searchedMovies.map((movie)=>{
                return (<Movie title={movie.title} year={movie.year}/>);
              })
            }
          </div>
        )}

        <div className="placeholder">
          <p>
            📝 <strong>Tu tarea:</strong> Crear un buscador que permita filtrar
            películas por título
          </p>
          <p>
            📊 <strong>Datos disponibles:</strong> {movies.length} películas en
            el archivo movies.json
          </p>
        </div>
      </main>
    </div>
  );
};
