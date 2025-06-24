import { Movie } from "../domain/Movie/Movie";
import { LikeRepository } from "../domain/Like/LikeRepository";
import { MovieRepository } from "../domain/Movie/MovieRepository";

export class MovieService {
  constructor(
    private movieRepository: MovieRepository,
    private movieLikeRepository: LikeRepository
  ) {}

  public searchByTitle(title: string): Movie[] {
    return this.movieRepository.searchByTitle(title);
  }

  public async likeMovie(): Promise<void> {
    this.movieLikeRepository.likeMovie();
  }
}
