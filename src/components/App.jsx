import { Routes, NavLink, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { HomePage } from '../pages/HomePage';
import { MoviesPage } from '../pages/MoviesPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />} />
          {/* <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};
