import React from 'react';

export function MovieCard({ details }) {
  const {
    poster_path,
    original_title,
    overview,
    vote_average,
    genres,
    release_date,
  } = details;
  //   console.log('fggg', details);

  return (
    <div>
      <img
        src={'https://image.tmdb.org/t/p/w500/' + poster_path}
        alt={original_title}
        width="250"
      ></img>

      <h2>
        {original_title} <span> ({release_date})</span>
      </h2>
      <p>User score: {Math.round(vote_average * 10)}% </p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres}</p>
    </div>
  );
}
