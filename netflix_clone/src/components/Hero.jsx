import { useEffect, useState } from "react";
import axios from 'axios';
import endpoints, { createImageUrl } from "../services/MovieService";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular)
      .then((response) => {
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      });
  }, []);

  if (!movie) {
    return (
      <div>Fetching Movie.....</div>
    );
  }

  function truncate(str,leng){
    if(!str) return ""
    return str.length>leng ? str.slice(0,leng)+"...": str
  }

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px] relative">
      <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
      <img
        className="w-full h-full object-cover object-top"
        src={createImageUrl(backdrop_path,"original")}
        alt={title}
      />
      <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8 text-white">
        <h1 className="text-3xl md:text-6xl font-sans-bold">{title}</h1>
        <div className="mt-8 mb-4">
          <button className="capitalize border bg-gray-300 text-black py-2 px-5">
            Play
          </button>
          <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
            Watch Later
          </button>
        </div>
        <p className=" w-full md:max-w-[70%] lg:max-W-[50] xl:MAX-W-[30] text-gray-400 text-sm">{release_date}</p>
        <p>{truncate(overview,205)}</p>
      </div>
    </div>
  );
};


export default Hero;
