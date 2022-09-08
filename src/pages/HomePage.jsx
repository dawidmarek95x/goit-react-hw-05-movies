import MovieList from 'components/MovieList';
import React, { useEffect, useState } from 'react';
import { getTrendyMovies } from 'services/movieApi';

const HomePage = () => {
  const [trendyMovies, setTrendyMovies] = useState([]);

  const getMovies = async () => {
    try {
      const moviesList = await getTrendyMovies();
      setTrendyMovies(moviesList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <MovieList movies={trendyMovies}/>
    </section>
  );
};

export default HomePage;
