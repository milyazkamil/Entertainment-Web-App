import { createContext, useContext, useState } from "react";
import { emptyMoviesArray } from '../data';

const GlobalContext = createContext();

const AppContext = ({children}) => {
  const [movie, setMovie] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [idFromMovieCard, setIdFromMovieCard] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isOpenSavedMovies, setIsOpenSavedMovies] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [newSavedMovies, setNewSavedMovies] = useState(emptyMoviesArray);

  const showSavedMovies = () => {
    setIsOpenSavedMovies(!isOpenSavedMovies);
  };
  
  const closeSavedMovies = () => {
    setIsOpenSavedMovies(false);
  };

  const filterSavedMovies = () => {
    const myNewMovieArr = newSavedMovies.filter(
      (movie) => movie.id !== idFromMovieCard
    );
    setNewSavedMovies(myNewMovieArr);
    setIsRemoveModalOpen(!isRemoveModalOpen);
  };

  const cancelRemoveMovie = () => {
    setIsRemoveModalOpen(!isRemoveModalOpen);
  };

  const handleInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    setSearchedMovie(searchInputValue);
  };

  const clearSearch = () => {
    setSearchedMovie('');
    setSearchInputValue('');
  };

  const removeSavedMovie = (id) => {
    setIsRemoveModalOpen(!isRemoveModalOpen);
    setIdFromMovieCard(id);
  };

  return (
    <GlobalContext.Provider
      value={{
        movie,
        slidesToShow,
        setSlidesToShow,
        isOpenSavedMovies,
        showSavedMovies,
        closeSavedMovies,
        setMovie,
        searchedMovie,
        setSearchedMovie,
        searchInputValue,
        newSavedMovies,
        setNewSavedMovies,
        removeSavedMovie,
        filterSavedMovies,
        isRemoveModalOpen,
        cancelRemoveMovie,
        searchMovie,
        handleInputChange,
        clearSearch,
        }}
      >
      {children}
    </GlobalContext.Provider>
  )
};

export default AppContext;
export const useGlobalContext = () => useContext(GlobalContext);