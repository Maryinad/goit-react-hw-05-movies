import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, Suspense } from 'react';

// import { HomePage } from '../pages/HomePage';
// import { MoviesPage } from '../pages/MoviesPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Loader } from './Loader/Loader';

const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyMoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const LazyMovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LazyHomePage />}></Route>
            <Route path="/movies" element={<LazyMoviesPage />} />
            <Route path="/movies/:moviesId" element={<LazyMovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
};
