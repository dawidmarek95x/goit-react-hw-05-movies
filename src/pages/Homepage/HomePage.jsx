import MoviesList from 'components/Movies/MoviesList';
import React, { useEffect, useState } from 'react';
import { getTrendyMovies } from 'services/movieApi';
import { TrendiesSection } from './HomePage.styled';

const HomePage = () => {
  const [trendyMovies, setTrendyMovies] = useState([]);

  const getMovies = async () => {
    try {
      const moviesList = await getTrendyMovies();
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
