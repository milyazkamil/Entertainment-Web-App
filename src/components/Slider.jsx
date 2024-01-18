import { useEffect } from 'react';
import Slider from 'react-slick';
import SliderCard from './SliderCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGlobalContext } from './Context';
import { recommendedMovies } from '../data';

const SlickCarousel = () => {
  const { slidesToShow, setSlidesToShow} = useGlobalContext();

  useEffect(() => {
    // Function to handle window resize and update slidesToShow
    const handleResize = () => {
      // Adjust the number of slidesToShow based on the screen width
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1180) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1500) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1780) {
        setSlidesToShow(4)
      } else {
        setSlidesToShow(5)
      }
    };

    // Add a listener to the window resize event
    window.addEventListener('resize', handleResize);
    // Call handleResize once when the component mounts to set the initial value
    handleResize();
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section id="slider-container">
      <Slider {...settings}>
        {
          recommendedMovies.map((movie, index) => <SliderCard key={index} movie={movie} />)
        }
      </Slider>
    </section>
  )
}
export default SlickCarousel;