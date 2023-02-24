import React from 'react';
import { Container, TextContainer } from './MovieCard.styled';
import PropTypes from 'prop-types';

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
    <Container>
      <img
        src={'https://image.tmdb.org/t/p/w500/' + poster_path}
        alt={original_title}
        width="250"
      />
      <TextContainer>
        <h2>
          {original_title} <span> ({release_date})</span>
        </h2>
        <p style={{ fontWeight: 'bold' }}>
          User score: {Math.round(vote_average * 10)}%
        </p>
        <p style={{ fontWeight: 'bold' }}>Overview:</p>
        <p>{overview}</p>
        <p style={{ fontWeight: 'bold' }}>Genres:</p>
        <p>{genres}</p>
      </TextContainer>
    </Container>
  );
}

MovieCard.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      genres: PropTypes.array.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
};
