import { Movie } from "../../domain/Movie/Movie";
import { MovieRepository } from "../../domain/Movie/MovieRepository";
import moviesJSON from "../../../data/movies.json";

export class JSONMovieRepository implements MovieRepository {
  searchByTitle(title: string): Movie[] {
    if (title === "") return [];
    const movies = moviesJSON.map((movie) => {
      return {
        title: movie.title,
        year: movie.year,
      } as Movie;
    });
    const moviesFiltered = movies.filter((movie)=>movie.title.toLowerCase().includes(title.toLowerCase()));
    if (!moviesFiltered) {
      return [];
    }
    return moviesFiltered;
  }
}
