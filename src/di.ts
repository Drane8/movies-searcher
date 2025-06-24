import { ApiMovieLikeRepository } from "./core/infraestructure/ApiMovieLikeRepository";
import { JSONMovieRepository } from "./core/infraestructure/JSONMovieRepository";
import { MovieService } from "./core/service/MovieService";

export const movieService = new MovieService(new JSONMovieRepository(),new ApiMovieLikeRepository());