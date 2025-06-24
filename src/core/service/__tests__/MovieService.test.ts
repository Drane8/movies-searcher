import { describe, it, expect, beforeEach } from "vitest";
import { MovieService } from "../MovieService";
import { JSONMovieRepository } from "../../infraestructure/JSONMovieRepository";

describe("Movie Service",()=>{
    const movieService = new MovieService(new JSONMovieRepository());
  it("Should find searched movie by full title",()=>{
    const movies = movieService.searchByTitle("The Shawshank Redemption");

    expect(movies[0]?.title).toBe("The Shawshank Redemption");
    expect(movies[0]?.year).toBe(1994);
    expect(movies).toHaveLength(1);

  })

  it("Should find searched movie even if the title is not full",()=>{
    const movies = movieService.searchByTitle("Godfath");

    expect(movies[0]?.title).toBe("The Godfather");
    expect(movies[0]?.year).toBe(1972);

  })
  
  it("Should return empty if not found movie",()=>{
    const movies = movieService.searchByTitle("Not a movie title");

    expect(movies).toHaveLength(0);

  })
})