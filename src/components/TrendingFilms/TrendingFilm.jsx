import React from 'react';
import { Link } from 'react-router-dom';

export function TrendingFilm({ filmsData }) {
  // console.log('filmsData', filmsData);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {filmsData.map(({ name, id, title }) => (
          <li key={id}>
            {name ? (
              <Link to={`/movies/${id}`}>{name}</Link>
            ) : (
              <Link to={`/movies/${id}`}>{title}</Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
