import { useState } from "react";
import { BiBookmark } from "react-icons/bi";
import { BsPlayCircleFill } from 'react-icons/bs';
import RecommendedMovieCardInfo from "./RecommendedMovieCardInfo";
import { useGlobalContext } from "./Context";

const RecommendedMovieCard = ({ id, Title, Released, Poster }) => {
  const { newSavedMovies, setNewSavedMovies } = useGlobalContext();
  const [bookmarkColor, setBookmarkColor] = useState('rgba(105, 105, 105, 0.8)');

  const saveMovieIfNotExists = () => {
    setBookmarkColor(bookmarkColor === '#FF4549' ? 'rgba(105, 105, 105, 0.8)' : '#FF4549');

    let newMovieObject = { id, Title, Released, Poster };

    const movies = [...newSavedMovies, newMovieObject];

    // Create an array to store unique objects
    const uniqueMovies = [];

    // Use a Map to track objects by a unique key (e.g., id)
    const uniqueKeyMap = new Map();

    movies.forEach((obj) => {
      const key = obj.id; // Change 'id' to the unique property you want to use

      // Check if the object with the same key has already been added
      if (!uniqueKeyMap.has(key)) {
        uniqueKeyMap.set(key, obj); // Store the object using the unique key
        uniqueMovies.push(obj); // Add the object to the result array
      }
    })
    setNewSavedMovies(uniqueMovies);
  };
  return (
    <article className="recommended-movie-card">
      <div className="overlay"></div>
      <BsPlayCircleFill className="play-btn" />
      <img src={Poster} alt="image" />
      <BiBookmark
        onClick={saveMovieIfNotExists}
        className="save"
        style={{ backgroundColor: bookmarkColor }}
      />
      <RecommendedMovieCardInfo Title={Title} Released={Released} />
    </article>
  )
}
export default RecommendedMovieCard;