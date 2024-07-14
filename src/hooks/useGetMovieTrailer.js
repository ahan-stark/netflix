import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { Api_options } from "../utils/const";
const useGetMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const getMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          Api_options
        );
        const json = await data.json();
        const trailer = json.results.filter((val) => val.type == "Trailer");
        dispatch(addTrailer(trailer[0]));
      };
      useEffect(() => {
        getMovies();
      }, []);
    
}
export default useGetMovieTrailer;