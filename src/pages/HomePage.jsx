import React from 'react';
import { useEffect } from 'react';
import { TrendingFilm } from '../components/TrendingFilms/TrendingFilm';
import { fetchFilmsData } from 'servisies/Api';

export function HomePage() {
  useEffect(() => {
    async function takeFilms() {
      try {
        const films = await fetchFilmsData();
        console.log('films', films);
      } catch (error) {
        throw new Error(error.message);
      } finally {
      }
    }
    takeFilms();
  }, []);

  return (
    <>
      <TrendingFilm />
    </>
  );
}
