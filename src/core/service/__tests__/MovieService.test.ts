import { describe, it, expect, beforeEach } from "vitest";
import { MovieService } from "../MovieService";
import { JSONMovieRepository } from "../../infraestructure/JSONMovieRepository";

describe("Movie Service",()=>{
    const movieService = new MovieService(new JSONMovieRepository());
  it("Should find searched movie",()=>{
    const movie = movieService.searchByTitle("The Shawshank Redemption");

    expect(movie?.title).toBe("The Shawshank Redemption");
    expect(movie?.year).toBe(1994);

  })
  
  it("Should return null if not found movie",()=>{
    const movie = movieService.searchByTitle("Not a movie title");

    expect(movie).toBeNull();

  })
})