import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function TrendingFilm({ filmsData }) {
  const location = useLocation();
  // console.log('filmsData', filmsData);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {filmsData.map(({ name, id, title }) => (
          <li key={id}>
            {name ? (
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {name}
              </Link>
            ) : (
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

TrendingFilm.propTypes = {
  filmsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
