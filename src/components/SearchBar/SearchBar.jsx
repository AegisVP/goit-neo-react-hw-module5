import PropTypes from 'prop-types';
import css from './SearchBar.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  function handleChange(event) {
    setQuery(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.searchBoxLabel}>
        <input name="query" type="text" autoComplete="off" autoFocus placeholder="Search movies" className={css.searchBox} value={query} onChange={handleChange} />
        <button type="submit" className={css.searchButton}>
          <PiMagnifyingGlass />
        </button>
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
