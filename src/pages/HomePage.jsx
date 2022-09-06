import React from "react";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  let location = useLocation();

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        <li>
          <Link to={`/movies/${1}`} state={{from: location}}>1</Link>
        </li>
        <li>
          <Link to={`/movies/${2}`} state={{from: location}}>2</Link>
        </li>
        <li>
          <Link to={`/movies/${3}`} state={{from: location}}>3</Link>
        </li>
      </ul>
    </section>
  );
};

export default HomePage;