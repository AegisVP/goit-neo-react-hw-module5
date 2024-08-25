import css from './MoviesPage.module.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../api/getMovieData';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';

export default function MoviesPage() {
  const [qParams, setQParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  let query = qParams.get('query') || '';
  let page = parseInt(qParams.get('page') || 1);

  function onMovieSearch(passedQuery) {
    if ('' === passedQuery) return;

    query = passedQuery;
    page = 1;
    setQParams({ page, query: passedQuery });
  }

  function onPageChange(passedPage) {
    page = parseInt(passedPage);
    setQParams({ page: passedPage, query });
  }

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setTotalPages(0);
      return;
    }

    setIsErrorLoading(false);
    setIsLoading(true);

    searchMovies(query, page)
      .then(movies => {
        setMovies(movies.results);
        page = parseInt(movies.page);
        setTotalPages(movies.total_pages);
      })
      .catch(() => {
        setIsErrorLoading(true);
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  return (
    <section className={css.section}>
      <SearchBar onSearch={onMovieSearch} initialQuery={query} />

      {isLoading && <Loader />}

      {isErrorLoading && <p>Something went wrong. Please try again later.</p>}

      {movies.length > 0 ? (
        <>
          <MovieList
            isErrorLoading={isErrorLoading}
            isLoading={isLoading}
            movies={movies}
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
            state={{ from: '/movies', query, page }}
          />
          <Pagination page={page} totalPages={totalPages} setPage={onPageChange} />
        </>
      ) : (
        query && <p>No movies found</p>
      )}
    </section>
  );
}
