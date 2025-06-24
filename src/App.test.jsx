import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {App} from "./App";
import userEvent from "@testing-library/user-event";
import { movieService } from "./di";

describe("App Component", () => {
  it("displays the subtitle", () => {
    render(<App />);
    const subtitle = screen.getByText(/encuentra tu película favorita/i);
    expect(subtitle).toBeInTheDocument();
  });

  it("displays searched movie",async ()=>{
    render(<App />);

    const searchField = await screen.findByPlaceholderText("Buscar películas por título...");
    await userEvent.click(searchField);
    await userEvent.keyboard("godfather");
    const movie = await screen.findByText("The Godfather");

    expect(movie).toBeInTheDocument();
  })

  it("displays not found text when there is no movie afte search",async ()=>{
    render(<App />);

    const searchField = await screen.findByPlaceholderText("Buscar películas por título...");
    await userEvent.click(searchField);
    await userEvent.keyboard("No title movie search");
    const notFoundText = await screen.findByText("No se encontraron películas");

    expect(notFoundText).toBeInTheDocument();
  })

  // it("calls correctly to the api when liked movie", async () =>{
  //   const mockFetch = vi
  //     .fn()
  //     .mockResolvedValue({
  //       ok: true,
  //       json: async () => ({
  //         results: [
  //         ],
  //       }),
  //     });
  //   const spyLike = vi.spyOn(movieService, "likeMovie").mockImplementation(mockFetch);
  //   render(<App />);

  //   const searchField = await screen.findByPlaceholderText("Buscar películas por título...");
  //   await userEvent.click(searchField);
  //   await userEvent.keyboard("godfather");
  //   const likeButton = await screen.findByText("Me gusta");
  //   await userEvent.click(likeButton);

  //   expect(spyLike).toBeCalledWith("https://movies-backend-biko2.vercel.app/api/like?token=6293");
  // })
});
