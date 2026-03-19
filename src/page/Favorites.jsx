import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../componets/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorite-empty">
      <h2>No Favorite Movie Yet</h2>
      <p>start adding movies to your favorite and they will appere here</p>
    </div>
  );
}
export default Favorites;
