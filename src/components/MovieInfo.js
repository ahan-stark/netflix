import React from 'react'
import { useParams } from 'react-router-dom'
import useGetMovieDetails from '../hooks/useGetMovieDetails';
import { img_cdn_url } from '../utils/const';
import CircularIndeterminate from '../utils/CircularIndeterminate';

const MovieInfo = () => {
    let movieId = useParams();
    const movieDetails = useGetMovieDetails(movieId);
    console.log(movieDetails);
    if(!movieDetails)
      return (<div className='bg-black h-[37.5em] content-center pl-[40em]'><CircularIndeterminate/></div>)
    const{poster_path} = movieDetails;
    
    
  return (
    <div className="bg-black h-[37.5em]">
    <img src={img_cdn_url + poster_path} className='h-4/6 m-auto'></img>
    </div>
  )
}

export default MovieInfo