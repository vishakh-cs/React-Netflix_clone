import { useState } from "react";
import { createImageUrl } from "../services/MovieService"
import { LuHeart } from "react-icons/lu";
import {arrayUnion,updateDoc, doc } from "firebase/firestore";
import { db } from "../services/Firebase";
import { userAuth } from "../context/AuthContext";


const MovieItems = ({ movie }) => {
    const {title , backdrop_path, poster_path } = movie
   const[like,setLike]=useState(false);
 
   const {user}=userAuth()

   const markFavShow= async()=>{
    const userEmail = user?.email;

    if(userEmail){
      const userDoc= doc(db,"users", userEmail)
      setLike((prevLike) => !prevLike);
      await updateDoc(userDoc,{
        favShow:arrayUnion({...movie})
      })
    }else{
      alert("login to save  movie user ")
    }
   }

    return (
        <div>
            <div className="relative w- [160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block
                          rounded-lg overflow-hidden cursor-pointer m-2">
                <img className="w-full block object-cover h-40" src={createImageUrl(backdrop_path ?? poster_path, "w500")}
                 alt={title} />
                   <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
          <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
            {title}
          </p>

          <p onClick={markFavShow} className="cursor-pointer">
            {like ? (
              <LuHeart
                size={20}
                className="absolute top-2 left-2 text-red-500"
              />
            ) : (
              <LuHeart
                size={20}
                className="absolute top-2 left-2 text-grey-300 "
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItems