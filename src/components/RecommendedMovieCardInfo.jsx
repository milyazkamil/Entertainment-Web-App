import { TbMovie } from "react-icons/tb";

const RecommendedMovieCardInfo = ({ Title, Released }) => {
  return (
    <div className="recommended-movie-card-info">
      <h3 className="movie-title">{Title.length < 23 ? Title : Title.substring(0, 19) + "..."}</h3>
      <div className="movie-info">
        <span>{Released}</span> •
        <span>
          <TbMovie />
        </span>
      </div>
    </div>
  )
}
export default RecommendedMovieCardInfo;