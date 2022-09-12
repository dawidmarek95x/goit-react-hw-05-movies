import MoviesList from 'components/Movies/MoviesList';
import React, { useEffect, useState } from 'react';
import apiMovies from 'api/movies';
import { TrendiesSection } from './HomePage.styled';

const HomePage = () => {
  const [trendyMovies, setTrendyMovies] = useState([]);

  const getMovies = async () => {
    try {
      const moviesList = await apiMovies.fetchTrendy();
      setTrendyMovies(moviesList);
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <TrendiesSection>
      <div>
        <h2>Trending today</h2>
      </div>
      <MoviesList movies={trendyMovies}/>
    </TrendiesSection>
  );
};

export default HomePage;
