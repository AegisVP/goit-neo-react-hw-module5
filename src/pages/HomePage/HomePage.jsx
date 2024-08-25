import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/getMovieData';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsErrorLoading(false);

    getTrendingMovies()
      .then(movies => setMovies(movies.results))
      .catch(() => setIsErrorLoading(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={css.homePage}>
      <MovieList isErrorLoading={isErrorLoading} isLoading={isLoading} movies={movies} state={{ from: '/' }} />
    </div>
  );
}
