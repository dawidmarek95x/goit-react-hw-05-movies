import axios from 'axios';
const apiKey = "80dd3433372e51907072dd17bd29b086";

export const fetchTrendy = async (periodOfTime = "day") => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${periodOfTime}?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  };
};

export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const apiMovies = {
  fetchTrendy,
  fetchMoviesByQuery,
};

export default apiMovies;