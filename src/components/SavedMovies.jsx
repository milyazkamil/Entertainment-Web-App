import SavedMovieCard from "./SavedMovieCard";
import { useGlobalContext } from "./Context";

const SavedMovies = () => {
  const { newSavedMovies, filterSavedMovies, isRemoveModalOpen, cancelRemoveMovie } = useGlobalContext();

  return (
    <section id="saved-movies-container">
      <h1 id="saved-movies-title">Saved Movies</h1>
      <div
        id="remove-movie-alert-bg"
        style={{
          display: `${isRemoveModalOpen === false ? 'none' : 'block'}`,
          backgroundColor: `${
            isRemoveModalOpen === false
              ? 'rgba(0, 0, 0, 0)'
              : 'rgba(0, 0, 0, 0.8)'
          }`,
        }}
      >
        <div
          id="remove-movie-alert"
          style={{
            display: `${isRemoveModalOpen === false ? 'none' : 'block'}`,
          }}
        >
          <h2 id="remove-movie-title">
            Are you sure you want to remove the movie?
          </h2>
          <button
            id="remove-movie-btn"
            onClick={filterSavedMovies}
            type="button"
          >
            Remove
          </button>
          <button
            id="cancel-movie-btn"
            onClick={cancelRemoveMovie}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
      <div id="saved-movies">
        {newSavedMovies.map((movie, index) => (
          <SavedMovieCard key={index} {...movie} />
        ))}
      </div>
    </section>
  )
}
export default SavedMovies;