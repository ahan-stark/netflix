import React from 'react'
import { useSelector } from "react-redux";

const DisplaySearchmovie = () => {
    const movieSearchList = useSelector((store) => store.searchMovie.searchList);
    if(movieSearchList.length === 0)
        return;
    
  return (
    <div className='text-white'>DisplaySearchmovie</div>
  )
}

export default DisplaySearchmovie