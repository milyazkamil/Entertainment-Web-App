import { TbMovie } from 'react-icons/tb';
import { MdMovie } from "react-icons/md";
import { BiSolidBookmark } from 'react-icons/bi';
import { PiSquaresFourFill } from 'react-icons/pi';
import { PiTelevisionBold } from 'react-icons/pi';
import { useGlobalContext } from "./Context";
import profilePhoto from "../assets/images/milyaz-photo.png";

const Sidebar = () => {
  const { isOpenSavedMovies, showSavedMovies, closeSavedMovies } = useGlobalContext();
  return (
    <section id="side-bar">
      <MdMovie id="movie-icon" onClick={closeSavedMovies} />
      <div id="icons">
        <PiSquaresFourFill id="square-icon" />
        <TbMovie id="tbmovie-icon" />
        <PiTelevisionBold id="tv-icon" />
        <BiSolidBookmark
          style={{
            color: isOpenSavedMovies ? '#FCFFFF' : '#586B92',
          }}
          onClick={showSavedMovies}
          id="bookmark-icon"
        />
      </div>
      <a href="https://www.instagram.com/milyazkamil" target='_blank'>
        <img id="profile-image" src={profilePhoto} alt="profile image" />
      </a>
    </section>
  )
}
export default Sidebar;