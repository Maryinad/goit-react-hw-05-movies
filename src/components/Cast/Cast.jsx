import { Loader } from 'components/Loader/Loader';
import React from 'react';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmsCredits } from 'servisies/Api';

export function Cast() {
  const { moviesId } = useParams();
  // console.log(moviesId);

  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!moviesId) return;
    async function getCast() {
      try {
        setIsLoading(true);

        const cast = await getFilmsCredits(moviesId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getCast(moviesId);
  }, [moviesId]);

  return (
    <>
      {error && <p>Ooops, error: {error}</p>}
      {isLoading && <Loader />}
      {cast && !error && !isLoading && (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={'https://image.tmdb.org/t/p/w500/' + profile_path}
                  alt={name}
                  width="100"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
