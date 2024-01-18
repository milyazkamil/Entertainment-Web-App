import { BiSearch } from 'react-icons/bi';
import { useGlobalContext } from './Context';

const Search = () => {
  const { searchInputValue, searchMovie, handleInputChange } = useGlobalContext();
  return (
    <form id="search-form" onSubmit={searchMovie}>
      <input
        id="search-input"
        onChange={handleInputChange}
        value={searchInputValue}
        type="text"
        name="text"
        placeholder="Search..."
      />
      <BiSearch id="search-icon" />
      <button type="submit" id="search-btn">
        Search
      </button>
    </form>
  )
}
export default Search;