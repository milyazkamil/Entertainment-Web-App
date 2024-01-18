import { FiTrash2 } from 'react-icons/fi';
import SliderInfo from './SliderInfo';
import { useGlobalContext } from './Context';
import notFoundImage from "../assets/images/404.png";

const SearchedMovieCard = () => {
  const { movie, searchedMovie, clearSearch} = useGlobalContext();

  return (
    <article className="searched-movie-card">
      {movie.Poster ? (
        <>
          <img
            className="searched-movie-image"
            src={movie.Poster}
            alt={movie.Title}
          />
          <SliderInfo {...movie} />
        </>
      ) : (
        <>
          <img className="not-found" src={notFoundImage} alt="not found image" />
          <h3 className="not-found-text">
            Your search - <span>{searchedMovie}</span> - did not match any
            movie.
          </h3>
        </>
      )}
      <FiTrash2 onClick={clearSearch} className="remove-icon" />
    </article>
  )
}
export default SearchedMovieCard;