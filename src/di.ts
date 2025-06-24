import { ApiLikeRepository } from "./core/infraestructure/Like/ApiLikeRepository";
import { JSONMovieRepository } from "./core/infraestructure/Movie/JSONMovieRepository";
import { MovieService } from "./core/service/MovieService";

export const movieService = new MovieService(new JSONMovieRepository(),new ApiLikeRepository());