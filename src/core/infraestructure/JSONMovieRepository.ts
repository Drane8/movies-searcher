import { Movie } from "../domain/Movie";
import { MovieRepository } from "../domain/MovieRepository";
import movies from "../../data/movies.json";

export class JSONMovieRepository implements MovieRepository {
  searchByTitle(title: string): Movie | null {
    const findedMovie = movies.find((movie) => movie.title === title);
    if (!findedMovie) {
      return null;
    }
    const movie: Movie = {
      title: findedMovie.title,
      year: findedMovie.year,
    };
    return movie;
  }
}
