import css from './MoviesPage.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../api/getMovieData';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';

export default function MoviesPage() {
  const [qParams, setQParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(qParams.get('page') || 1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const navigate = useNavigate();
  const query = qParams.get('query') || '';

  function onMovieSearch(query) {
    if ('' === query) return;

    setQParams({ query, page });
    navigate(`/movies?page=1&query=${query}`);
  }

  function onPageChange(page) {
    setPage(page);
    setQParams({ query, page });
    navigate(`/movies?page=${page}&query=${query}`);
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
        setPage(movies.page);
        setTotalPages(movies.total_pages);
      })
      .catch(() => {
        setIsErrorLoading(true);
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  return (
    <section className={css.section}>
      <SearchBar onSearch={onMovieSearch} />

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
        <>{query && <p>No movies found</p>}</>
      )}
    </section>
  );
}
