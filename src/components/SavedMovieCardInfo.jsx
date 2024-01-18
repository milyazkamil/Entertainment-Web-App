import { TbMovie } from 'react-icons/tb';

const SavedMovieCardInfo = ({ Title, Released }) => {
  return (
    <div className="saved-movie-card-info">
      <h3 className="saved-movie-card-title">{Title}</h3>
      <div className="saved-movie-info">
        <span>
          {Released} • <TbMovie />
        </span>
      </div>
    </div>
  )
}
export default SavedMovieCardInfo;
