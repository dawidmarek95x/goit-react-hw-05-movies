import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetchMoviesById = (movieId, urlParameter) => {
  const [movie, setMovie] = useState({});
  const [loading, isLoading] = useState(false);

  let parameterPath;
  switch (urlParameter) {
    case "credits":
      parameterPath = "/credits";
      break;

    case "reviews":
      parameterPath = "/reviews";
    break;
  
    default:
      parameterPath = "";
      break;
  }

  useEffect(() => {
    const getMovieById = async () => {
      isLoading(true);
  
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}${parameterPath}?api_key=80dd3433372e51907072dd17bd29b086`);
        await setMovie(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        isLoading(false);
      }
    };
    getMovieById();
  }, [movieId, parameterPath]);

  return {movie, loading};
}

export default useFetchMoviesById;