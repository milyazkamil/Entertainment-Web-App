import SliderInfo from "./SliderInfo";

const SliderCard = ({ movie }) => {
  return (
    <div className="slider-card">
      <img src={movie.Poster} alt={movie.Title} />
      <SliderInfo {...movie} />
    </div>
  )
}
export default SliderCard;