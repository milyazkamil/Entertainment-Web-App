import {useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { useGlobalContext } from './Context';

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const url = 'https://www.omdbapi.com/?t=';

function App() {
  const { setMovie, searchedMovie } = useGlobalContext();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const resp = await fetch(`${url}${searchedMovie}&apikey=${API_KEY}`);
        const data = await resp.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [searchedMovie]);
  
  return (
    <>
      <main id="main">
        <Sidebar />
        <MainContent />
      </main>
    </>
  )
}
export default App;