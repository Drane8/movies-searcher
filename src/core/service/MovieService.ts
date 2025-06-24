import { Movie } from "../domain/Movie";
import { MovieRepository } from "../domain/MovieRepository";

export class MovieService {
  constructor(private movieRepository: MovieRepository) {}

  public searchByTitle(title: string): Movie[] {
    return this.movieRepository.searchByTitle(title);
  }
}
