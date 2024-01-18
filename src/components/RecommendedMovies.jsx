import RecommendedMovieCard from "./RecommendedMovieCard";
import { recommendedMovies } from '../data';

const Recommended = () => {
  return (
    <section id="recommended">
      <h2 id="recommended-title">Recommended for you</h2>
      <div className="recommended-movie-cards">
        {
          recommendedMovies.map((movie) => (
            <RecommendedMovieCard key={movie.id} {...movie} />
          ))
        }
      </div>
    </section>
  )
}
export default Recommended;