import PropTypes from 'prop-types';
import css from './MoviesList.module.css';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';

export default function MoviesList({ movies, page, totalPages, onPageChange }) {
  return (
    <>
    <ul className={css.list}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </ul>

      <Pagination page={page} totalPages={totalPages} setPage={onPageChange} />
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    {
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }
  ).isRequired,
}