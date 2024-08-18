import css from './MoviesPage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../api/getMovieData';
import Pagination from '../../components/Pagination/Pagination';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [qParams, setQParams] = useSearchParams();
  const navigate = useNavigate();
  const query = qParams.get('query') || '';
  const page = qParams.get('page') || 1;

  function onMovieSearch(query) {
    if (!query) return;

    navigate(`/movies?page=1&query=${query}`);
  }

  function onPageChange(page) {
    navigate(`/movies?page=${page}&query=${query}`);
  }

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setTotalPages(0);
      return;
    }

    setQParams({ query, page });
    searchMovies(query, page).then(movies => {
      setMovies(movies.results);
      setTotalPages(movies.total_pages);
    });
  }, [query, page]);

  return (
    <section className={css.section}>
      <SearchBar onSearch={onMovieSearch} />

      {movies && <MoviesList movies={movies} />}
    </section>
  );
}
