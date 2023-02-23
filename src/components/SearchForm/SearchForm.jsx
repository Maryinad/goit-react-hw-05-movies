import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function SearchForm({ onSubmit }) {
  const [searchParams] = useSearchParams();
  //query будет появляться в адресной строке ?query= (то, что введем в поле поиска)
  const searchQuery = searchParams.get('query');
  //   console.log('query', query);
  const [query, setQuery] = useState(searchQuery ?? '');

  const handleInput = event => {
    const query = event.target.value;
    setQuery(query);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={query}
          type="text"
          autocomplete="off"
          autoFocus
          onChange={handleInput}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}
