import { FiTrash2 } from 'react-icons/fi';
import SavedMovieCardInfo from './SavedMovieCardInfo';
import { useGlobalContext } from './Context';

const SavedMovieCard = ({ id, Title, Released, Poster}) => {
  const { removeSavedMovie } = useGlobalContext();

  return (
    <article className="saved-movie-card">
      <img className="saved-movie-image" src={Poster} alt={Title} />
      <SavedMovieCardInfo Title={Title} Released={Released} />
      <FiTrash2 className="remove-icon" onClick={() => removeSavedMovie(id)} />
    </article>
  )
}
export default SavedMovieCard;