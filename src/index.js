import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import App from 'components/App/App';
import Loader from 'components/Loader/Loader';

const HomePage = React.lazy(() => import("./pages/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));
const Cast = React.lazy(() => import("./pages/Cast"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
// import NotFound from 'pages/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />}>
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
