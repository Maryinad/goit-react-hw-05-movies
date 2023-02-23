import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { getFilmsDataById } from 'servisies/Api';
import { Loader } from '../../components/Loader/Loader';

export function MovieDetails() {
  // moviesId то что в App  <Route path="/movies/:moviesId" element={<MovieDetails />}
  const { moviesId } = useParams();
  // console.log(moviesId);

  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMoviesDetails() {
      try {
        setIsLoading(true);

        const details = await getFilmsDataById(moviesId);
        // console.log('details', details);

        setDetails(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesDetails(moviesId);
  }, [moviesId]);

  return (
    <>
      {error && <p>Ooops, error: {error}</p>}
      <Link to="/">Go back</Link>
      {isLoading && <Loader />}
      {details && <MovieCard details={details} />}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

// https://image.tmdb.org/t/p/original/'
