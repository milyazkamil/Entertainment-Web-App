import { useEffect } from "react";
import SearchBar from "./SearchBar";
import RecommendedMovies from "./RecommendedMovies";
import SavedMovies from "./SavedMovies";
import TrendingMovies from "./TrendingMovies";
import SearchedMovie from './SearchedMovie';
import { useGlobalContext } from './Context';

const MainContent = () => {
  const { searchedMovie, setSearchedMovie, isOpenSavedMovies, searchInputValue } = useGlobalContext();

  useEffect(() => {
    searchInputValue === "" ? setSearchedMovie("") : <></>
  }, [searchInputValue]);

  return (
    <section id="main-content">
      {isOpenSavedMovies === false ? (
        <>
          <SearchBar />
          {
            searchedMovie === "" ? (
              <>
                <TrendingMovies />
                <RecommendedMovies />
              </>
            ) : (
              <SearchedMovie />
            )
          }
        </>
      ) : (
        <SavedMovies />
      )}
    </section>
  )
}
export default MainContent;