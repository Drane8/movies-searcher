import { Movie } from "../domain/Movie";
import { MovieLikeRepository } from "../domain/MovieLikeRepository";
import { MovieRepository } from "../domain/MovieRepository";

export class MovieService {
  constructor(
    private movieRepository: MovieRepository,
    private movieLikeRepository: MovieLikeRepository
  ) {}

  public searchByTitle(title: string): Movie[] {
    return this.movieRepository.searchByTitle(title);
  }

  public async likeMovie(): Promise<void> {
    this.movieLikeRepository.likeMove();
  }
}
