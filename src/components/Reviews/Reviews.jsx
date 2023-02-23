import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsReviews } from 'servisies/Api';

export function Reviews() {
  const { moviesId } = useParams();
  // console.log(moviesId);

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!moviesId) return;
    async function getReviews() {
      try {
        setIsLoading(true);

        const reviews = await getFilmsReviews(moviesId);
        console.log('reviews', reviews);
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews(moviesId);
  }, [moviesId]);

  return (
    <>
      {reviews && reviews.length === 0 && (
        <p>We don't have reviews about this movie</p>
      )}
      {!isLoading && !error && reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
