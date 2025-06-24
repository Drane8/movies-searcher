import { Movie } from "../domain/Movie";
import { MovieRepository } from "../domain/MovieRepository";
import fs from "fs";

export class JSONMovieRepository implements MovieRepository {
  searchByTitle(title: string): Movie | null {
    const movies = JSON.parse(
      fs.readFileSync("../../data/movies.json", "utf-8")
    );
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
