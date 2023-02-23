import React from 'react';
import { useEffect, useState } from 'react';
import { TrendingFilm } from '../../components/TrendingFilms/TrendingFilm';
import { fetchFilmsData } from 'servisies/Api';
// import { useLocation } from 'react-router-dom';

export function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function takeFilms() {
      try {
        const filmsResult = await fetchFilmsData();
        setFilms(filmsResult);
      } catch (error) {
        throw new Error(error.message);
      } finally {
      }
    }
    takeFilms();
  }, []);

  return <>{films.length !== 0 && <TrendingFilm filmsData={films} />}</>;
}

export default HomePage;
