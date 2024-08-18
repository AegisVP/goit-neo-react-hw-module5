import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { getTrendingMovies } from '../../api/getMovieData';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsErrorLoading(false);

    getTrendingMovies()
      .then(movies => {
        setMovies(movies.results);
        setPage(movies.page);
        setTotalPages(movies.total_pages);
      })
      .catch(() => {
        setIsErrorLoading(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
      <MoviesList movies={movies} />
  );
}
