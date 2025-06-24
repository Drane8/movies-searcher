import { Movie } from "./Movie";

export interface MovieRepository {
  searchByTitle(title: string): Movie | null;
}
