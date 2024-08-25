import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import MovieCard from '../MovieCard/MovieCard';
import Loader from '../Loader/Loader';

export default function MovieList({ isLoading, isErrorLoading, movies, state }) {
  return (
    <>
      {isLoading && <Loader />}
      {isErrorLoading && 'Error loading movies'}
      {movies.length > 0 && (
        <>
          <ul className={css.list}>
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} state={state} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  isLoading: PropTypes.bool,
  isErrorLoading: PropTypes.bool,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
  state: PropTypes.object,
};
