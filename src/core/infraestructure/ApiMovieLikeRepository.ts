import { MovieLikeRepository } from "../domain/MovieLikeRepository";

export class ApiMovieLikeRepository implements MovieLikeRepository {
  async likeMove(): Promise<void> {
    try {
      const response = await fetch(
        "https://movies-backend-biko2.vercel.app/api/like?token=6293",
        {
          method: "POST",
        }
      );
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error liking movie:", error);
    }
  }
}
