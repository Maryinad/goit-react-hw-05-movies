import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchFilmsData } from 'servisies/Api';

export function MoviesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [querySearch, setQuerySearch] = useState([]);

  const searchQuery = searchParams.get('query');

  const onSubmit = query => {
    setSearchParams({ query: query });
    console.log('query', query);
  };

  useEffect(() => {
    if (searchQuery === null) return;
    async function getSearchFilms() {
      try {
        setIsLoading(true);
        const searchFilms = await searchFilmsData(searchQuery);
        console.log('searchFilms', searchFilms);
        setQuerySearch(searchFilms);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getSearchFilms(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      {error && <p>Ooops, error: {error}</p>}
      {isLoading && <Loader />}
      <ul>
        {querySearch &&
          querySearch.map(({ title, id }) => {
            return (
              <>
                <li key={id}>
                  <Link to={`/movies/${id}`}>{title}</Link>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}
