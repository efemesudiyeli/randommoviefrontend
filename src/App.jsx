import axios from "axios";
import { useState } from "react";

//layout & pages
import Sidebar from './components/Sidebar';
import DisplaySection from "./components/DisplaySection";

function App() {

  const [randomlySelectedMovie, setRandomlySelectedMovie] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [clickedFirstTime, setClickedFirstTime] = useState(false)
  const getRandomMovie = () => {
    try {
      setClickedFirstTime(true)
      setIsLoading(true)

      axios.get('http://localhost:1337/api/movies')
        .then((res) => {
          const min = Math.ceil(1);
          const max = Math.floor(res.data.meta.pagination.total + 1);
          let randomMovieID = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive

          try {
            axios.get('http://localhost:1337/api/movies/' + randomMovieID).then((res) => {
              // RANDOMLY SELECTED MOVIE
              setRandomlySelectedMovie(res.data.data.attributes.title)
            }).finally(setIsLoading(false))
          } catch (error) {
            alert(error)
          }
        })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className="flex">
        <Sidebar getRandomMovie={getRandomMovie} />
        <DisplaySection randomlySelectedMovie={randomlySelectedMovie} isLoading={isLoading} clickedFirstTime={clickedFirstTime} />
      </div>

    </>
  )
}

export default App
