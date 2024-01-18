import { useState } from 'react';
import { RiArrowUpDoubleFill } from 'react-icons/ri';
import { RiArrowDownDoubleFill } from 'react-icons/ri';

const SliderInfo = ({
  Title,
  Released,
  Actors,
  Runtime,
  Language,
  Country,
  imdbRating,
  BoxOffice,
}) => {
  const [showMore, setShowMore] = useState('-73');

  return (
    <div
      className="slider-info"
      style={{
        bottom: `${showMore}%`,
        borderRadius: `${showMore === '-10' ? '1rem 1rem 0 0' : '0'}`,
      }}
    >
      <div className="slider-card-container">
        <h3 className="slider-card-title">
          {Title
            ? Title.length < 15
              ? Title
              : Title.substring(0, 15) + '...'
            : 'No Title Available'}
        </h3>
        <button
          className="more-btn"
          onClick={() => setShowMore(showMore === '-73' ? '-10' : '-73')}
        >
          More
          {showMore === '-73' ? (
            <RiArrowUpDoubleFill />
          ) : (
            <RiArrowDownDoubleFill />
          )}
        </button>
      </div>
      <div className="slider-movie-info">
        <span>{Released}</span>
      </div>
      <div>
        <span>
          <b>Runtime :</b> {Runtime}
        </span>
      </div>
      <div>
        <span>
          <b>Language :</b> {Language}
        </span>
      </div>
      <div>
        <span>
          <b>Country :</b> {Country}
        </span>
      </div>
      <div>
        <span>
          <b>Rating :</b> {imdbRating}
        </span>
      </div>
      <div>
        <span>
          <b>Actors :</b> {Actors}
        </span>
      </div>
      <div>
        <span>
          <b>Box Office :</b> {BoxOffice}
        </span>
      </div>
    </div>
  )
}
export default SliderInfo;
