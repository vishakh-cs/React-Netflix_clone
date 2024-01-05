import axios from "axios";
import { useEffect, useState } from "react";
import MovieItems from "./MovieItems";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"


const MovieRow = ({ title, url }) => {
  const RowId = Math.floor(Math.random()*1000)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  const slide=(offset)=>{
    const slider = document.getElementById('slider' + RowId)
    slider.scrollLeft = slider.scrollLeft + offset

  }



  return (
    <>
    <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
    <div className="relative flex items-center">
      <MdChevronLeft onClick={()=>slide(-500)} className="rounded-full bg-white text-black left-2 opacity-80 ml-1 z-20" size={40} />
      <div
        id={'slider' + RowId}
        className="flex w-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
      
        {movies.map((movie) => (
          <MovieItems key={movie.id} movie={movie} />
        ))}
      </div>
      <MdChevronRight onClick={()=>slide(500)} className="rounded-full bg-white text-black right-2 opacity-80 ml-1 z-20" size={40} />
    </div>
  </>
);
};
export default MovieRow;